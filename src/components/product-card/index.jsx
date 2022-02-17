import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'

import Button from '_components/button'
import MissingPicturePlaceHolder from '_assets/images/missing-picture.jpeg'

import styles from './styles.css'
import QuantifierInput from '../quantifier-input'

const ProductCard = ({ name, price, image, stock }) => {
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
        <Button>Add to cart</Button>
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
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string,
  stock: PropTypes.number.isRequired,
}

ProductCard.defaultProps = {
  image: '',
}

export default React.memo(ProductCard)
