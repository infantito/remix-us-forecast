declare namespace Weather {
  interface PointContext {
    '@version': '1.1'
    wx: 'https://api.weather.gov/ontology#'
    s: 'https://schema.org/'
    geo: 'http://www.opengis.net/ont/geosparql#'
    unit: 'http://codes.wmo.int/common/unit/'
    '@vocab': 'https://api.weather.gov/ontology#'
    geometry: {
      '@id': 's:GeoCoordinates'
      '@type': 'geo:wktLiteral'
    }
    city: 's:addressLocality'
    state: 's:addressRegion'
    distance: {
      '@id': 's:Distance'
      '@type': 's:QuantitativeValue'
    }
    bearing: {
      '@type': 's:QuantitativeValue'
    }
    value: {
      '@id': 's:value'
    }
    unitCode: {
      '@id': 's:unitCode'
      '@type': '@id'
    }
    forecastOffice: {
      '@type': '@id'
    }
    forecastGridData: {
      '@type': '@id'
    }
    publicZone: {
      '@type': '@id'
    }
    county: {
      '@type': '@id'
    }
  }

  interface RelativeLocationGeometry {
    type: 'Point' | 'Polygon' | 'LineString'
    coordinates: [number, number]
  }

  interface RelativeLocation {
    type: 'Feature'
    geometry: RelativeLocationGeometry
    properties: {
      city: Uppercase<string>
      state: Uppercase<string>
      distance: {
        unitCode: string
        value: number
      }
      bearing: {
        unitCode: string
        value: number
      }
    }
  }

  interface ForecastProperties {
    '@id': `https://api.weather.gov/points/${number},${number}`
    '@type': `${Lowercase<string>}:${Capitalize<string>}`
    cwa: Uppercase<string>
    forecastOffice: `https://api.weather.gov/offices/${Uppercase<string>}`
    gridId: Uppercase<string>
    gridX: number
    gridY: number
    forecast: `https://api.weather.gov/gridpoints/${Uppercase<string>}/${number},${number}/forecas`
    forecastHourly: `https://api.weather.gov/gridpoints/${Uppercase<string>}/${number},${number}/forecast/hourly`
    forecastGridData: `https://api.weather.gov/gridpoints/${Uppercase<string>}/${number},${number}`
    observationStations: `https://api.weather.gov/gridpoints/${Uppercase<string>}/${number},${number}/stations`
    relativeLocation: RelativeLocation
    forecastZone: `https://api.weather.gov/zones/forecast/${Uppercase<string>}`
    county: `https://api.weather.gov/zones/county/${Uppercase<string>}`
    fireWeatherZone: `https://api.weather.gov/zones/fire/${Uppercase<string>}`
    timeZone: `${Capitalize<string>}/${Capitalize<string>}`
    radarStation: Uppercase<string>
  }

  interface PointResponse {
    '@context': ['https://geojson.org/geojson-ld/geojson-context.jsonld', PointContext]
    id: `https://api.weather.gov/points/${number},${number}`
    type: 'Feature'
    geometry: RelativeLocationGeometry
    properties: ForecastProperties
  }

  interface ForecastContext {
    '@version': '1.1'
    wx: 'https://api.weather.gov/ontology#'
    geo: 'http://www.opengis.net/ont/geosparql#'
    unit: 'http://codes.wmo.int/common/unit/'
    '@vocab': 'https://api.weather.gov/ontology#'
  }

  type ForecastGeometry = {
    type: RelativeLocationGeometry['type']
    coordinates: [number, number][][]
  }

  interface ForecastPeriod {
    number: number
    name: string
    /**
     * Format: `YYYY-MM-DDTHH:MM:SS-07:00`
     */
    startTime: `${number}-${number}-${number}T${number}:${number}:${number}+${number}:${number}`
    /**
     * Format: `YYYY-MM-DDTHH:MM:SS-07:00`
     */
    endTime: `${number}-${number}-${number}T${number}:${number}:${number}+${number}:${number}`
    isDaytime: boolean
    temperature: number
    temperatureUnit: 'F' | 'C'
    temperatureTrend: string
    probabilityOfPrecipitation: {
      unitCode: string
      value: number
    }
    windSpeed: string
    windDirection:
      | 'NNW'
      | 'NNE'
      | 'S'
      | 'NE'
      | 'N'
      | 'WSW'
      | 'E'
      | 'ENE'
      | 'SE'
      | 'SSW'
      | 'SW'
      | 'W'
      | 'WNW'
      | 'SSE'
      | 'ESE'
      | 'NW'
    icon: string
    shortForecast: 'Clear' | 'Sunny' | 'Mostly Sunny' | 'Mostly Clear' | 'Partly Cloudy'
    detailedForecast: string
  }

  interface ForecastProperties {
    units: 'us'
    forecastGenerator: 'BaselineForecastGenerator'
    /**
     * Format: `YYYY-MM-DDTHH:MM:SS+00:00`
     */
    generatedAt: `${number}-${number}-${number}T${number}:${number}:${number}+${number}:${number}`
    /**
     * Format: `YYYY-MM-DDTHH:MM:SS+00:00`
     */
    updateTime: `${number}-${number}-${number}T${number}:${number}:${number}+${number}:${number}`
    /**
     * Format: `YYYY-MM-DDTHH:MM:SS+00:00`
     */
    validTimes: `${number}-${number}-${number}T${number}:${number}:${number}+${number}:${number}`
    elevation: {
      unitCode: string
      value: number
    }
    periods: ForecastPeriod[]
  }

  interface ForecastResponse {
    '@context': ['https://geojson.org/geojson-ld/geojson-context.jsonld', ForecastContext]
    type: 'Feature'
    geometry: ForecastGeometry
    properties: ForecastProperties
  }
}
