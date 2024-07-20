declare namespace Geocoder {
  interface InputAddress {
    address: string
  }

  interface Benchmark {
    isDefault: boolean
    benchmarkDescription: string
    id: '4' | '8' | '2020'
    benchmarkName: 'Public_AR_Current' | 'Public_AR_ACS2023' | 'Public_AR_Census2020'
  }

  interface Input {
    address: InputAddress
    benchmark: Benchmark
  }

  interface TigerLine {
    side: 'R' | 'L'
    tigerLineId: `${number}`
  }

  interface Coordinates {
    x: number
    y: number
  }

  interface AddressComponents {
    zip: string
    streetName: Uppercase<string>
    preType: string
    city: Uppercase<string>
    preDirection: string
    suffixDirection: string
    fromAddress: string
    state: Uppercase<string>
    suffixType: Uppercase<string>
    toAddress: `${number}`
    suffixQualifier: string
    preQualifier: string
  }

  interface AddressMatch {
    tigerLine: TigerLine
    coordinates: Coordinates
    addressComponents: AddressComponents
    matchedAddress: string
  }

  interface AddressResponse {
    result: {
      input: Input
      addressMatches: AddressMatch[]
    }
  }
}
