import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import cookies from 'react-cookies'

import './styles/_colors.css'
import './styles/global.css'
import Dashboard from './views/dashboard'

const App = () => {
  const authToken = cookies.load('accessToken')
  const navigate = useNavigate()

  if (!authToken) {
    return <Navigate to="/login" />
  }

  return <Dashboard />
}

export default App
