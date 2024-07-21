import * as React from 'react'

import type { UseDebounceProps } from '~/typings'
import { NUMERICS } from '~/constants'

/**
 * @copyright https://usehooks.com/useDebounce/
 */
const useDebounce = (props: UseDebounceProps) => {
  const { value, delay = NUMERICS.DEBOUNCE_DELAY } = props

  const [debouncedValue, setDebouncedValue] = React.useState(value)

  const previousValue = React.useRef(value)

  React.useEffect(() => {
    let handler: NodeJS.Timeout = null

    if (previousValue.current !== value) {
      previousValue.current = value

      handler = setTimeout(() => {
        setDebouncedValue(value)
      }, delay)
    }

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

export default useDebounce
