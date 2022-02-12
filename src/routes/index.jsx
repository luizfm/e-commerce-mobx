import React from 'react'
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom'
import Login from '_views/login'

import StoreProvider from '_store/'

import Dashboard from '_views/dashboard'
import App from '../App'

const Routes = () => (
  <StoreProvider>
    <Router>
      <Switch>
        <Route path="/" element={<App />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/login" element={<Login />} />

      </Switch>
    </Router>
  </StoreProvider>
)

export default Routes
