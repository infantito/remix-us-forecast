import { CloudIcon } from '@heroicons/react/24/solid'

function Loading() {
  return (
    <div className="weather-country mt-40 fill-white">
      <CloudIcon className="w-20 mx-auto animate-bounce" />
      <p className="pt-3 text-sky-400/100">Loading weather...</p>
    </div>
  )
}

export default Loading
