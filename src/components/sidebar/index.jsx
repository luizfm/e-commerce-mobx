import React, { useMemo } from 'react'
import useToggle from '_hooks/use-toggle'
import classnames from 'classnames'

import { SIDEBAR_ITEMS, MENU_ICON } from '_utils/constants'
import SidebarItem from '_components/sidebar-item'

import styles from './styles.css'

const Sidebar = () => {
  const [isSidebarOpen, onToggleSidebar] = useToggle()

  return (
    <aside
      className={classnames(styles['sidebar-container'], {
        [styles['sidebar-container-open']]: isSidebarOpen,
      })}
    >
      <SidebarItem
        className={styles['sidebar-item']}
        icon={MENU_ICON.icon}
        text={MENU_ICON.name}
        isOpen={isSidebarOpen}
        onClick={onToggleSidebar}
      />
      {SIDEBAR_ITEMS.map((item) => (
        <SidebarItem
          className={styles['sidebar-item']}
          key={item.name}
          icon={item.icon}
          text={item.name}
          isOpen={isSidebarOpen}
          {...item}
        />
      ))}
    </aside>
  )
}

export default Sidebar
