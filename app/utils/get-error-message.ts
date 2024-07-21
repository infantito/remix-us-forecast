/**
 * Does its best to get a string error message from an unknown error.
 */
function getErrorMessage<T = unknown>(error: T) {
  if (typeof error === 'string') {
    return error
  }

  if (error && typeof error === 'object' && 'message' in error && typeof error.message === 'string') {
    return error.message
  }

  return 'Unknown Error'
}

export default getErrorMessage
