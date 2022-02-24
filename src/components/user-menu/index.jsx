import React, { useCallback, useContext } from 'react'
import { Wrapper, Button, Menu } from 'react-aria-menubutton'
import { useNavigate } from 'react-router-dom'

import { StoreContext } from '_providers/store-provider'
import UserPlaceholder from '_assets/images/user-placeholder.png'
import UserMenuItem from '_components/user-menu-item'
import ArrowDownIcon from '_assets/icons/arrow-down-icon.svg'
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
  const { userStore } = useContext(StoreContext)

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

      userStore.logoutUser()
    },
    [navigate, userStore]
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
          alt={`${userStore.name}'s portrait`}
        />
        <div className={styles['user-info']}>
          <p>{userStore.name}</p>
          <p className={styles.email}>{userStore.email}</p>
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
