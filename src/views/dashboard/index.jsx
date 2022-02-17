import React, { useContext } from 'react'

import { StoreContext } from '_store'
import Sidebar from '_components/sidebar'

import styles from './styles.css'

const Dashboard = () => {
  const { user } = useContext(StoreContext)
  return (
    <section className={styles['dashboard-container']}>
      <p>{user.email}</p>
      <p>{user.authToken}</p>
    </section>
  )
}

export default Dashboard
