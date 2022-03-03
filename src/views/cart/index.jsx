import { observer } from 'mobx-react'
import React, { useContext, useMemo } from 'react'

import { StoreContext } from '_providers/store-provider'
import Button, { BUTTON_THEME } from '_components/button'

import EmptyCart from '_components/empty-cart'
import CheckoutProductList from '_components/checkout-product-list'
import styles from './styles.css'

const Cart = observer(() => {
  const { cartStore } = useContext(StoreContext)

  const disablePaymentButton = useMemo(
    () => cartStore.cart.length === 0,
    [cartStore.cart.length]
  )

  return (
    <section className={styles['cart-container']}>
      <div className={styles['content-wrapper']}>
        <h1>Cart</h1>
        <p className={styles['cart-description']}>
          Below you&apos;re going to find the items on your cart. Please, check
          them and if everything is okay, proceed to payment!
        </p>
        {cartStore.cart.length > 0 ? <CheckoutProductList /> : <EmptyCart />}
      </div>
    </section>
  )
})

export default Cart
