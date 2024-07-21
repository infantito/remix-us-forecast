import { API, WeatherForecastPathParams } from '~/constants'
import { addressGeocodingApi } from './geocoding.services'

function weatherByCoordinatesApi(params: Geocoder.Coordinates, signal: AbortSignal) {
  const { x: longitude, y: latitude } = params

  const endpoint = `${API.weather}/${WeatherForecastPathParams.points}/${latitude},${longitude}` as const

  const url = new URL(endpoint)

  const response = fetch(url.toString(), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: null,
    signal,
  })

  return response
}

async function getWeatherForecastListByUrlApi(
  url: Weather.PointResponse['properties']['forecast'],
  signal: AbortSignal
) {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: null,
    signal,
  })

  return response
}

async function getWeatherForecastByAddressApi(address: string, signal: AbortSignal) {
  const response = await addressGeocodingApi({ address }, signal)

  const addressData: Geocoder.AddressResponse = await response.json()

  const hasAddressMatch = addressData.result.addressMatches.length > 0

  if (hasAddressMatch) {
    const [addressMatch] = addressData.result.addressMatches

    const weatherResponse = await weatherByCoordinatesApi(addressMatch.coordinates, signal)

    const weather: Weather.PointResponse = await weatherResponse.json()

    const forecastResponse = await getWeatherForecastListByUrlApi(weather.properties.forecast, signal)

    const forecast: Weather.ForecastResponse = await forecastResponse.json()

    return { address: addressMatch, forecast }
  }

  return null
}

export { weatherByCoordinatesApi, getWeatherForecastByAddressApi }
