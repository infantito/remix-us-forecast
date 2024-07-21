import type { ErrorResponse } from '@remix-run/server-runtime'

type StatusHandlerInfoParams = {
  error: ErrorResponse
  params: Record<string, string>
}

type StatusHandler = (info: StatusHandlerInfoParams) => JSX.Element

type GeneralErrorProps = {
  /**
   * @default
   * ```typescriptreact
   * ({ error }) => (
   *   <p>
   *    {error.status} {error.data}
   *    </p>
   * )
   * ```
   */
  defaultStatusHandler?: (params: StatusHandlerInfoParams) => JSX.Element
  statusHandlers?: Record<number, StatusHandler>
  /**
   * @default
   * ```typescriptreact
   * error => <p>{getErrorMessage(error)}</p>
   * ```
   */
  unexpectedErrorHandler?: <T = unknown>(error: T) => JSX.Element
}

export type { StatusHandlerInfoParams, StatusHandler, GeneralErrorProps }
