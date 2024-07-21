import { Links, Meta, Outlet, Scripts, ScrollRestoration, type MetaDescriptor } from '@remix-run/react'
import type { LinkDescriptor } from '@remix-run/server-runtime'
import { Analytics } from '@vercel/analytics/react'

import globalStyles from '~/styles/global.css?url'
import tailwindStyles from '~/styles/tailwind.css?url'
import { Footer, GeneralErrorBoundary } from './components'

function meta() {
  const descriptorList: MetaDescriptor[] = [
    { title: 'U.S Weather Forecast' },
    { name: 'description', content: 'U.S 7-day forecast for a specified address' },
  ]

  return descriptorList
}

function links() {
  const linkList: LinkDescriptor[] = [
    { rel: 'stylesheet', href: tailwindStyles },
    { rel: 'stylesheet', href: globalStyles },
  ]

  return linkList
}

function Document(props: Required<React.PropsWithChildren<unknown>>) {
  const { children } = props

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <main>{children}</main>
        <ScrollRestoration />
        <Scripts />
        <Analytics />
      </body>
    </html>
  )
}

function App() {
  return (
    <Document>
      <article className="weather py-8">
        <Outlet />
        <Footer />
      </article>
    </Document>
  )
}

function ErrorBoundary() {
  return (
    <Document>
      <div className="flex-1">
        <GeneralErrorBoundary />
      </div>
    </Document>
  )
}

export default App

export { ErrorBoundary, meta, links }
