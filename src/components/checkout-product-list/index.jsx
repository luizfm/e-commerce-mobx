import React, { useContext } from 'react'
import { StoreContext } from '_providers/store-provider'
import CheckoutProductListItem from '_components/checkout-product-list-item'

import { observer } from 'mobx-react'
import styles from './styles.css'

const CheckoutProductList = observer(() => {
  const { cartStore } = useContext(StoreContext)

  return (
    <div className={styles['checkout-product-list-container']}>
      <p className={styles['checkout-items-quantity']}>
        {`Your cart has ${cartStore.cart.length} item${
          cartStore.cart.length > 1 ? 's' : ''
        }`}
      </p>
      <p className={styles['checkout-description']}>
        Increase, decrease or remove the item if necessary
      </p>
      <ul className={styles['products-list']}>
        {cartStore.cart.map((product) => (
          <CheckoutProductListItem key={product.id} product={product} />
        ))}
      </ul>
      <p className={styles.total}>Total: ${cartStore.cartTotal()}</p>
    </div>
  )
})

export default React.memo(CheckoutProductList)
