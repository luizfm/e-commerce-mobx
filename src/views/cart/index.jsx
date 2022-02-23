import { observer } from 'mobx-react'
import React, { useContext, useMemo } from 'react'

import { StoreContext } from '_store'
import Button, { BUTTON_THEME } from '_components/button'

import EmptyCart from '_components/empty-cart'
import CheckoutProductList from '_components/checkout-product-list'
import styles from './styles.css'

const Cart = observer(() => {
  const { cart } = useContext(StoreContext)

  const disablePaymentButton = useMemo(() => cart.length === 0, [cart.length])

  return (
    <section className={styles['cart-container']}>
      <div className={styles['content-wrapper']}>
        <h1>Cart</h1>
        <p className={styles['cart-description']}>
          Below you&apos;re going to find the items on your cart. Please, check
          them and if everything is okay, proceed to payment!
        </p>
        {cart.length > 0 ? <CheckoutProductList /> : <EmptyCart />}
        <Button
          disabled={disablePaymentButton}
          theme={BUTTON_THEME.LEAD_GRAY}
          to="/cart/payment"
          className={styles['payment-button']}
        >
          Payment
        </Button>
      </div>
    </section>
  )
})

export default Cart
