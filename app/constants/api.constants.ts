const API_RESPONSE_FORMAT = {
  json: 'json',
  jsonp: 'jsonp',
} as const

const API = {
  /**
   * The current Geocoding Services engine requires a structure address be provided.
   * The resulting `lat/long` is calculated along an address range.
   */
  geocoder: 'https://geocoding.geo.census.gov/geocoder',
  /**
   * To obtain the grid forecast
   */
  weather: 'https://api.weather.gov',
} as const

export { API, API_RESPONSE_FORMAT }
