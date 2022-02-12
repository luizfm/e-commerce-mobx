import { useCallback, useState } from 'react'

export default (initialState = false) => {
  const [isVisible, setIsVisible] = useState(initialState)

  const onToggleVisibility = useCallback(() => {
    setIsVisible((prevValue) => !prevValue)
  }, [])

  return [isVisible, onToggleVisibility]
}
