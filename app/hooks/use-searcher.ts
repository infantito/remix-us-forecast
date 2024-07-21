import * as React from 'react'
import { useLocation, useNavigation, useSubmit } from '@remix-run/react'

import useDebounce from './use-debounce'

const useSearcher = () => {
  const navigation = useNavigation()

  const location = useLocation()

  const [value, setValue] = React.useState(() => {
    const urlSearchParams = new URLSearchParams(location.search)

    return urlSearchParams.get('q') ?? ''
  })

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const debounceQuery = useDebounce({ value })

  const submit = useSubmit()

  const searching = navigation.location && new URLSearchParams(navigation.location.search).has('q')

  const isSearching = value.trim() !== debounceQuery.trim() || searching

  React.useEffect(
    function searchForecast() {
      const searchParams = new URLSearchParams(location.search)

      const newValue = debounceQuery.trim()

      const query = searchParams.get('q') ?? ''

      const shouldSubmit = newValue.toLowerCase() !== query.toLowerCase()

      if (debounceQuery) {
        searchParams.set('q', debounceQuery.trim())
      } else {
        searchParams.delete('q')
      }

      if (shouldSubmit) {
        submit(searchParams)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [debounceQuery]
  )

  return {
    value,
    handleSearch,
    isSearching,
  }
}

export default useSearcher
