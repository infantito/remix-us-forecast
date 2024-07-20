import type { GeocodingAddressParams } from '~/typings'
import { API, API_RESPONSE_FORMAT, GeocoderBenchmark, GeocoderPathParams, GeocoderUrlParams } from '~/constants'

function addressGeocodingApi(param: GeocodingAddressParams) {
  const endpoint = `${API.geocoder}/${GeocoderPathParams.locations}/${GeocoderPathParams.address}` as const

  const url = new URL(endpoint)

  url.searchParams.append(GeocoderUrlParams.address, param.address)

  url.searchParams.append(GeocoderUrlParams.format, API_RESPONSE_FORMAT.json)

  url.searchParams.append(GeocoderUrlParams.benchmark, GeocoderBenchmark.current)

  const response = fetch(url.toString(), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: null,
  })

  return response
}

export { addressGeocodingApi }
