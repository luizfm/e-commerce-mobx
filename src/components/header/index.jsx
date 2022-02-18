import React, { useContext, useMemo } from 'react'
import classnames from 'classnames'

import { SEARCH_ICON } from '_utils/constants'
import EcommerceLogo from '_assets/images/logo.png'
import { StoreContext } from '_store'
import { observer } from 'mobx-react'
import Button, { BUTTON_THEME } from '../button'
import Input from '../input'

import styles from './styles.css'
import UserMenu from '../user-menu'

const Header = observer(() => {
  const store = useContext(StoreContext)

  const isUserLoggedIn = useMemo(
    () => store.user.authToken,
    [store.user.authToken]
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
