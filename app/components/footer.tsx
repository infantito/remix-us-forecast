import Waves from './waves'

function Footer() {
  return (
    <>
      <Waves />
      <div className="creditionals">
        <div className="sm:container sm:mx-auto flex justify-between px-40">
          <span>
            Created by:{' '}
            <a className="font-medium" href="https://github.com/infantito" rel="noopener noreferrer" target="_blank">
              Daniel Infante
            </a>
          </span>
          <span>
            Data from:{' '}
            <a
              className="font-medium"
              href="https://www.weather.gov/documentation/services-web-api"
              rel="noopener noreferrer"
              target="_blank"
            >
              National Weather Service (NWS)
            </a>
          </span>
        </div>
      </div>
    </>
  )
}

export default Footer
