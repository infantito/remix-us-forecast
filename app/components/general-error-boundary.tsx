import { isRouteErrorResponse, useParams, useRouteError } from '@remix-run/react'

import type { GeneralErrorProps } from '~/typings'
import { getErrorMessage } from '~/utils'

export function GeneralErrorBoundary(props: GeneralErrorProps) {
  const {
    defaultStatusHandler = ({ error }) => (
      <p>
        {error.status} {error.data}
      </p>
    ),
    statusHandlers,
    unexpectedErrorHandler = error => <p>{getErrorMessage(error)}</p>,
  } = props

  const error = useRouteError()

  const params = useParams()

  if (typeof document !== 'undefined') {
    console.error(error)
  }

  return (
    <div className="container mx-auto flex h-full w-full items-center justify-center bg-destructive p-20 text-h2 text-destructive-foreground font-semibold text-4xl text-white">
      {isRouteErrorResponse(error)
        ? (statusHandlers?.[error.status] ?? defaultStatusHandler)({
            error,
            params,
          })
        : unexpectedErrorHandler(error)}
    </div>
  )
}

export default GeneralErrorBoundary
