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

  interface Geometry {
    type: 'Point' | 'Polygon' | 'LineString'
    coordinates: [number, number]
  }

  interface RelativeLocation {
    type: 'Feature'
    geometry: Geometry
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
    '@id': 'https://api.weather.gov/points/39.7456,-97.0892'
    '@type': `${Lowercase<string>}:${Capitalize<string>}`
    cwa: Uppercase<string>
    forecastOffice: 'https://api.weather.gov/offices/TOP'
    gridId: Uppercase<string>
    gridX: number
    gridY: number
    forecast: 'https://api.weather.gov/gridpoints/TOP/32,81/forecast'
    forecastHourly: 'https://api.weather.gov/gridpoints/TOP/32,81/forecast/hourly'
    forecastGridData: 'https://api.weather.gov/gridpoints/TOP/32,81'
    observationStations: 'https://api.weather.gov/gridpoints/TOP/32,81/stations'
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
    geometry: Geometry
    properties: ForecastProperties
  }
}
