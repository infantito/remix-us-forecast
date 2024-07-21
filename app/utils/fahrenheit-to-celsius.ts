function fahrenheitToCelsius(fahrenheit: number) {
  const celsius = ((fahrenheit - 32) * 5) / 9

  return Math.round(celsius)
}

export default fahrenheitToCelsius
