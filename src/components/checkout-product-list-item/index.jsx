/* eslint-disable react/jsx-one-expression-per-line */
import React, { useCallback, useContext, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'

import { productShape } from '_utils/proptypes'
import QuantifierInput from '_components/quantifier-input'
import { StoreContext } from '_providers/store-provider'

import { observer } from 'mobx-react'
import styles from './styles.css'

const CheckoutProductListItem = observer(({ product }) => {
  const { cartStore } = useContext(StoreContext)
  const [quantity, setQuantity] = useState(product.quantity)

  const updateCart = useCallback(() => {
    cartStore.updateCartProductQuantity(product, quantity)
  }, [cartStore, product, quantity])

  const debounceUpdateQuantity = useDebouncedCallback(updateCart, 500)

  const onIncrement = useCallback(() => {
    setQuantity((prevValue) => prevValue + 1)
    debounceUpdateQuantity()
  }, [debounceUpdateQuantity])

  const onDecrement = useCallback(() => {
    setQuantity((prevValue) => {
      if (prevValue <= 0) {
        return 0
      }

      return prevValue - 1
    })

    debounceUpdateQuantity()
  }, [debounceUpdateQuantity])

  const onChange = useCallback(
    ({ target }) => {
      const { value } = target

      if (value < 0) {
        return
      }

      setQuantity(Number(value))
      debounceUpdateQuantity()
    },
    [debounceUpdateQuantity]
  )

  return (
    <li className={styles['checkout-product-item-container']}>
      <img
        className={styles['product-image']}
        src={product.image}
        alt={`${product.name} on the cart`}
      />
      <p className={styles['product-description']}>{product.name}</p>
      <QuantifierInput
        stock={product.stock}
        quantity={quantity}
        onChange={onChange}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
      <p className={styles['product-price']}>Price: ${product.price}</p>
      <p className={styles['product-quantity']}>Quant: {quantity}</p>
      <p className={styles['product-subtotal']}>
        Subtotal: ${product.price * quantity}
      </p>
    </li>
  )
})

CheckoutProductListItem.propTypes = {
  product: productShape.isRequired,
}

export default React.memo(CheckoutProductListItem)
