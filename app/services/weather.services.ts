import { API, WeatherForecastPathParams } from '~/constants'

function weatherByCoordinatesApi(params: Geocoder.Coordinates) {
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
  })

  return response
}

export { weatherByCoordinatesApi }
