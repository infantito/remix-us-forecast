import * as React from 'react'

const useToggle = () => {
  const [isToggled, setIsToggled] = React.useState(false)

  const handleToggle = () => {
    setIsToggled(prevState => !prevState)
  }

  return { isToggled, handleToggle }
}

export default useToggle
