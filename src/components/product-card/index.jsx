import React, { useState, useCallback, useContext } from 'react'
import PropTypes from 'prop-types'

import Button from '_components/button'
import MissingPicturePlaceHolder from '_assets/images/missing-picture.jpeg'

import { StoreContext } from '_providers/store-provider'
import { observer } from 'mobx-react'
import styles from './styles.css'
import QuantifierInput from '../quantifier-input'

const ProductCard = observer(({ product, name, price, image, stock }) => {
  const { cartStore } = useContext(StoreContext)
  const [quantity, setQuantity] = useState(0)

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

  const onAddProductToCart = useCallback(() => {
    const productPayload = {
      ...product,
      quantity,
    }
    cartStore.addProductToCart(productPayload)
  }, [product, cartStore, quantity])

  return (
    <article className={styles['product-card-container']}>
      <img
        className={styles['product-image']}
        src={image || MissingPicturePlaceHolder}
        alt={`${name}`}
      />
      <h1 className={styles['product-name']}>{name}</h1>
      <p className={styles.price}>{`$${price.toFixed(2)}`}</p>
      <div className={styles['card-footer']}>
        <Button onClick={onAddProductToCart}>Add to cart</Button>
        <QuantifierInput
          stock={stock}
          quantity={quantity}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onChange={onChange}
        />
      </div>
    </article>
  )
})

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
    stock: PropTypes.number.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string,
  stock: PropTypes.number.isRequired,
}

ProductCard.defaultProps = {
  image: '',
}

export default React.memo(ProductCard)
