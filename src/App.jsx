import React from 'react'
import PropTypes from 'prop-types'
import {
  Navigate,
  useNavigate,
  useLocation,
  Routes as Switch,
  Route,
  Outlet,
} from 'react-router-dom'
import cookies from 'react-cookies'

import './styles/_colors.css'
import './styles/global.css'

import Header from '_components/header'
import Sidebar from '_components/sidebar'

import styles from './styles.css'

const App = () => {
  const navigate = useNavigate()
  const location = useLocation()

  if (location.pathname === '/') {
    return <Navigate to="/dashboard" />
  }

  return (
    <main className={styles['app-container']}>
      <Sidebar />
      <div className={styles.content}>
        <Header />
        <Outlet />
      </div>
    </main>
  )
}

export default App
