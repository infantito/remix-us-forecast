import type { LinkDescriptor, LoaderFunctionArgs } from '@remix-run/server-runtime'
import * as React from 'react'
import { Await, defer, Form, useLoaderData } from '@remix-run/react'

import type { WeatherListProps } from '~/typings'
import { getWeatherForecastByAddressApi } from '~/services'
import { useToggle } from '~/hooks'
import { DayNightSwitch, Loading, NoData, NoQuery, Searcher, Weather } from '~/components'
import darkModeStyles from '~/styles/dark-mode.css?url'

function links() {
  const linkList: LinkDescriptor[] = [{ rel: 'stylesheet', href: darkModeStyles }]

  return linkList
}

function loader(args: LoaderFunctionArgs) {
  const url = new URL(args.request.url)

  const q = url.searchParams.get('q')

  const weatherForecast = q ? getWeatherForecastByAddressApi(q, args.request.signal) : null

  return defer({ weatherForecast, q })
}

function WeatherList(props: WeatherListProps) {
  const { forecast, status } = props

  const weatherForecastList = React.useMemo(() => {
    const list = forecast.properties.periods.filter(period => (status === 'day' ? period.isDaytime : !period.isDaytime))

    return list
  }, [status, forecast.properties.periods])

  return (
    <ul className="flex flex-wrap gap-6 md:justify-center items-center">
      {weatherForecastList.map(period => (
        <Weather key={period.number} weather={period} />
      ))}
    </ul>
  )
}

function Index() {
  const data = useLoaderData<typeof loader>()

  const { isToggled, handleToggle } = useToggle()

  return (
    <div className="sm:container sm:mx-auto px-10">
      <div className="header">
        <div className="flex justify-between align-baseline">
          <div className="app-logo align-baseline text-white my-auto">
            <h1 className="align-baseline my-auto text-xl font-bold">Weather App</h1>
          </div>
          <Form role="search" className="flex items-center max-w-sm w-full">
            <Searcher />
          </Form>
        </div>
      </div>
      <div className="container mt-6">
        <React.Suspense fallback={<Loading />}>
          <Await resolve={data.weatherForecast} errorElement={<div>There was an error</div>}>
            {resolved => {
              if (!data.q) {
                return <NoQuery />
              }

              if (resolved) {
                return (
                  <div>
                    <p className="pt-3 text-center text-white">
                      <span>Weekly forecast for</span> <b>"{resolved.address.matchedAddress}"</b>
                    </p>
                    <DayNightSwitch checked={isToggled} handleToggle={handleToggle} />
                    <WeatherList forecast={resolved.forecast} status={isToggled ? 'night' : 'day'} />
                  </div>
                )
              }

              return <NoData address={data.q} />
            }}
          </Await>
        </React.Suspense>
      </div>
    </div>
  )
}

export default Index

export { links, loader }
