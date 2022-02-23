import React from 'react'

import EmptyCartImage from '_assets/images/empty-cart.jpeg'

import styles from './styles.css'

const EmptyCart = () => (
  <div className={styles['empty-cart-container']}>
    <img className={styles.image} src={EmptyCartImage} alt="An Empty Cart" />
    <p className={styles['empty-cart-description']}>
      Your cart is empty. Check our sales, add a few items on your cart and come
      back here later
    </p>
  </div>
)

export default EmptyCart
