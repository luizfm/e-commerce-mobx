import React, { useCallback, useContext } from 'react'
import { Wrapper, Button, Menu } from 'react-aria-menubutton'
import { useNavigate } from 'react-router-dom'

import { StoreContext } from '_store'
import UserPlaceholder from '_assets/images/user-placeholder.png'
import UserMenuItem from '_components/user-menu-item'
import ArrowDownIcon from '_assets/icons/arrow-down-icon.svg'
import { logout } from '_store/modules/user/actions'
import Svg from '_components/svg'

import styles from './styles.css'

export const MENU_ACTIONS = {
  NAVIGATE: 'navigate',
  LOGOUT: 'logout',
}

const USER_MENU_ITEMS = [
  {
    id: 1,
    text: 'Settings',
    action: {
      type: MENU_ACTIONS.NAVIGATE,
      to: '/user-profile',
    },
  },
  {
    id: 2,
    text: 'Logout',
    to: '/user-profile',
    action: {
      type: MENU_ACTIONS.LOGOUT,
    },
  },
]

const UserMenu = () => {
  const store = useContext(StoreContext)
  const navigate = useNavigate()
  const onSelection = useCallback(
    (value, event) => {
      const {
        dataset: { to },
      } = event.target

      if (to) {
        navigate(to)
        return
      }

      logout()(store)
    },
    [navigate, store]
  )

  return (
    <Wrapper
      className={styles['user-menu-container']}
      onSelection={onSelection}
    >
      <div className={styles['user-menu-wrapper']}>
        <img
          className={styles['user-image']}
          src={UserPlaceholder}
          alt={`${store.user.name}'s portrait`}
        />
        <div className={styles['user-info']}>
          <p>{store.user.name}</p>
          <p className={styles.email}>{store.user.email}</p>
        </div>
        <Button className={styles['arrow-button']}>
          <Svg className={styles['menu-icon']} icon={ArrowDownIcon} />
        </Button>
      </div>
      <Menu className={styles['menu-options']}>
        <ul>
          {USER_MENU_ITEMS.map((item) => (
            <UserMenuItem key={item.id} text={item.text} to={item.action.to} />
          ))}
        </ul>
      </Menu>
    </Wrapper>
  )
}

export default React.memo(UserMenu)
