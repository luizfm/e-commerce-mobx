import React from 'react'
import classnames from 'classnames'

import { SEARCH_ICON } from '_utils/constants'
import EcommerceLogo from '_assets/images/logo.png'
import Button, { BUTTON_THEME } from '../button'
import Input from '../input'

import styles from './styles.css'

const Header = () => (
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
    </div>
  </header>
)

export default Header
