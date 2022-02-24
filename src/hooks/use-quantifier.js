import { useCallback, useState } from 'react'

export default (initialQuantity = 0) => {
  const [quantity, setQuantity] = useState(initialQuantity)

  const onIncrement = useCallback(() => {
    setQuantity((prevValue) => prevValue + 1)
  }, [])

  const onDecrement = useCallback(() => {
    setQuantity((prevValue) => {
      if (prevValue <= 0) {
        return 0
      }

      return prevValue - 1
    })
  }, [])

  const onChange = useCallback(({ target }) => {
    const { value } = target

    if (value < 0) {
      return
    }

    setQuantity(Number(value))
  }, [])

  return [quantity, onIncrement, onDecrement, onChange]
}
