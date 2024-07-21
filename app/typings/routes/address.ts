import type { getWeatherByAddressApi } from '~/services'

type AddressRouteParams = {
  address: string
}

type AddressLoaderResponse = {
  forecast: ReturnType<typeof getWeatherByAddressApi>
  q: string
}

export type { AddressRouteParams, AddressLoaderResponse }
