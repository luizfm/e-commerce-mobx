import React, { useContext, useMemo } from 'react'
import classnames from 'classnames'

import { SEARCH_ICON } from '_utils/constants'
import EcommerceLogo from '_assets/images/logo.png'
import { StoreContext } from '_providers/store-provider'
import { observer } from 'mobx-react'
import UserMenu from '_components/user-menu'
import CartIconButton from '_components/cart-icon-button'
import Button, { BUTTON_THEME } from '../button'
import Input from '../input'

import styles from './styles.css'

const Header = observer(() => {
  const store = useContext(StoreContext)

  const isUserLoggedIn = useMemo(
    () => store.userStore?.authToken,
    [store.userStore?.authToken]
  )

  return (
    <header className={styles['header-container']}>
      <div className={styles['header-content']}>
        <img
          className={styles['company-logo']}
          src={EcommerceLogo}
          alt="Company logo"
        />
        <Input
          id="search-input"
          label="Search"
          hiddenLabel
          icon={SEARCH_ICON.icon}
          className={styles['search-input']}
        />
        <CartIconButton />
        {isUserLoggedIn ? (
          <UserMenu />
        ) : (
          <div className={styles['buttons-container']}>
            <Button
              to="/sign-up"
              className={classnames(styles.button, styles['register-button'])}
            >
              Register
            </Button>
            <Button
              to="/login"
              className={classnames(styles.button, styles['login-button'])}
              theme={BUTTON_THEME.LEAD_GRAY}
            >
              Login
            </Button>
          </div>
        )}
      </div>
    </header>
  )
})

export default Header
