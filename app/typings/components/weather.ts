type WeatherProps = {
  weather: Weather.ForecastPeriod
}

type WeatherListProps = {
  forecast: Weather.ForecastResponse
  status: 'day' | 'night'
}

export type { WeatherProps, WeatherListProps }
