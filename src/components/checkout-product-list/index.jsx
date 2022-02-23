import React, { useContext } from 'react'
import { StoreContext } from '_store'
import CheckoutProductListItem from '_components/checkout-product-list-item'

import { observer } from 'mobx-react'
import styles from './styles.css'

const CheckoutProductList = observer(() => {
  const { cart, cartTotal } = useContext(StoreContext)

  return (
    <div className={styles['checkout-product-list-container']}>
      <p className={styles['checkout-items-quantity']}>
        {`Your cart has ${cart.length} item${cart.length > 1 ? 's' : ''}`}
      </p>
      <p className={styles['checkout-description']}>
        Increase, decrease or remove the item if necessary
      </p>
      <ul className={styles['products-list']}>
        {cart.map((product) => (
          <CheckoutProductListItem key={product.id} product={product} />
        ))}
      </ul>
      <p className={styles.total}>Total: ${cartTotal()}</p>
    </div>
  )
})

export default React.memo(CheckoutProductList)
