import { observer } from 'mobx-react'
import React, { useContext } from 'react'
import { StoreContext } from '_providers/store-provider'

import ShoppingCartIcon from '_assets/icons/shopping-cart-icon.svg'
import IconButton from '_components/icon-button'

import styles from './styles.css'

const CartIconButton = observer(() => {
  const { cartStore } = useContext(StoreContext)

  return (
    <div className={styles['cart-icon-button-container']}>
      <IconButton
        to="/cart"
        className={styles.button}
        iconClassName={styles['cart-icon']}
        icon={ShoppingCartIcon}
      />
      <span className={styles['cart-quantity']}>{cartStore.cart?.length}</span>
    </div>
  )
})

export default React.memo(CartIconButton)
