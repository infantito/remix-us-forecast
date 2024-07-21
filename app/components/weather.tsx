import type { WeatherProps } from '~/typings'
import { fahrenheitToCelsius, formatDateTime } from '~/utils'

function Weather(props: WeatherProps) {
  const { weather } = props

  const date = formatDateTime(new Date(weather.startTime))

  const celsius = fahrenheitToCelsius(weather.temperature)

  return (
    <li className="flex items-center justify-center w-full md:max-w-xs max-w-full">
      <div className="flex flex-col bg-white/75 rounded p-4 w-full">
        <span className="text-sm text-gray-500">{date}</span>
        <div className="mt-4 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
          <img src={weather.icon} alt={weather.shortForecast} />
        </div>
        <div className="flex flex-row items-center justify-center gap-4 mt-4">
          <h4 className="font-medium text-6xl">
            {celsius}°<span className="font-semibold text-4xl relative bottom-4">C</span>
          </h4>
          <span
            className="text-center cursor-help font-normal text-sm text-gray-500 truncate-3"
            title={weather.shortForecast}
          >
            {weather.shortForecast}
          </span>
        </div>
        <div className="flex flex-row justify-between mt-4">
          <div className="flex flex-col items-center">
            <span className="font-medium text-sm">Wind Direction</span>
            <span className="text-sm text-gray-500">{weather.windDirection}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-medium text-sm">Wind Speed</span>
            <span className="text-sm text-gray-500">{weather.windSpeed}</span>
          </div>
        </div>
      </div>
    </li>
  )
}

export default Weather
