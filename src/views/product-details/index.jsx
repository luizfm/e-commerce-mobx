import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '_services/api'

import MissingPicturePlaceHolder from '_assets/images/missing-picture.jpeg'

import QuantifierInput from '_components/quantifier-input'
import useQuantifier from '_hooks/use-quantifier'
import Button, { BUTTON_THEME } from '_components/button'
import { StoreContext } from '_providers/store-provider'

import styles from './styles.css'

const ProductDetails = () => {
  const { productId } = useParams()
  const { cartStore } = useContext(StoreContext)
  const [product, setProduct] = useState({})
  const [quantity, onIncrement, onDecrement, onChange] = useQuantifier()

  const onAddToCart = useCallback(() => {
    const formattedProduct = {
      ...product,
      quantity,
    }
    cartStore.addProductToCart(formattedProduct)
  }, [cartStore, product, quantity])

  useEffect(() => {
    async function getProduct() {
      const response = await api.get(`/products/${productId}`)

      setProduct(response.data)
    }

    getProduct()
  }, [productId])

  return (
    <section className={styles['product-details-container']}>
      <div className={styles['product-details-wrapper']}>
        <img
          className={styles.image}
          src={product.image || MissingPicturePlaceHolder}
          alt={`${product.name}`}
        />
        <h1 className={styles['product-name']}>{product.name}</h1>
        <p className={styles['product-description']}>{product.description}</p>
        <p className={styles.technical}>{product.technicalInfo}</p>
        <QuantifierInput
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onChange={onChange}
          quantity={quantity}
          stock={product.stock || 0}
          className={styles.quantifier}
        />
        <div className={styles['product-receipt']}>
          <span className={styles['receipt-info']}>
            Price: ${product.price}
          </span>
          <span className={styles['receipt-info']}>Quantity: {quantity}</span>
          <span className={styles['receipt-info']}>
            Total: ${product?.price?.toFixed(2) * quantity}
          </span>
        </div>
        <Button
          className={styles['add-to-cart-button']}
          theme={BUTTON_THEME.LEAD_GRAY}
          onClick={onAddToCart}
        >
          Add to cart
        </Button>
      </div>
    </section>
  )
}

export default React.memo(ProductDetails)
