import { Links, Meta, Outlet, Scripts, ScrollRestoration, type MetaFunction } from '@remix-run/react'
import { Analytics } from '@vercel/analytics/react'

const meta: MetaFunction = () => {
  return [{ title: 'U.S Forecast' }, { name: 'description', content: 'U.S 7-day forecast for a specified address' }]
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
        {children}
        <ScrollRestoration />
        <Scripts />
        <Analytics />
      </body>
    </html>
  )
}

function Layout() {
  return (
    <Document>
      <Outlet />
    </Document>
  )
}

function App() {
  return <Layout />
}

function ErrorBoundary() {
  return (
    <Document>
      <h1>Something went wrong</h1>
    </Document>
  )
}

export default App

export { ErrorBoundary, meta }
