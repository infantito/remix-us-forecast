const GeocoderBenchmark = {
  /**
   * ### Public_AR_Current
   *
   * Public Address Ranges - Current Benchmark
   *
   * This is the default benchmark.
   */
  current: '4',
  /**
   * ###Public_AR_ACS2023
   *
   * Public Address Ranges - ACS2023 Benchmark
   */
  acs2023: '8',
  /**
   * ### Public_AR_Census2020
   *
   * Public Address Ranges - Census 2020 Benchmark
   */
  census2020: '2020',
} as const

const GeocoderPathParams = {
  /**
   * To get just geocoding response
   */
  locations: 'locations',
  /**
   * One line address
   */
  address: 'onelineaddress',
} as const

const GeocoderUrlParams = {
  /**
   * The address to geocode
   */
  address: 'address',
  /**
   * A numerical ID or name that references what version of the locator should be searched.
   * This generally corresponds to MTDB data which is benchmarked twice yearly.
   * A full list of options can be accessed at: @see https://geocoding.geo.census.gov/geocoder/benchmarks
   */
  benchmark: 'benchmark',
  /**
   * The format to be used for returning the standardized output
   * (supported values include `json` and `jsonp`).
   */
  format: 'format',
} as const

const WeatherForecastPathParams = {
  /**
   * Use the `/points` endpoint to retrieve the current grid forecast endpoint
   */
  points: 'points',
} as const

export { GeocoderBenchmark, GeocoderPathParams, GeocoderUrlParams, WeatherForecastPathParams }
