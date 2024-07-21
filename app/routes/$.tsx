import { Link, useLocation } from '@remix-run/react'

import { GeneralErrorBoundary } from '~/components'

function loader() {
  throw new Response('Not found', { status: 404 })
}

function NotFound() {
  return <ErrorBoundary />
}

function ErrorBoundary() {
  const location = useLocation()

  return (
    <GeneralErrorBoundary
      statusHandlers={{
        404: () => (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3 text-center">
              <h1 className="align-baseline text-4xl font-bold text-white">We can't find this page: 😥</h1>
              <pre className="whitespace-pre-wrap break-all text-2xl text-teal-400">{location.pathname}</pre>
            </div>
            <Link
              to="/"
              className="text-center font-bold text-white bg-[#7790c6] hover:bg-[#c0cbe5] hover:text-[#7790c6] focus:ring-4 rounded-lg text-sm px-5 py-2.5 focus:outline-none max-w-36 mx-auto"
            >
              ⬅️ Back to home
            </Link>
          </div>
        ),
      }}
    />
  )
}

export default NotFound

export { loader, ErrorBoundary }
