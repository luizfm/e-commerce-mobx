import React, { useMemo } from 'react'
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom'
import Login from '_views/login'

import StoreProvider from '_store/'

import SignUp from '_views/sign-up'
import Dashboard from '_views/dashboard'
import ProductsCatalog from '_views/products-catalog'
import App from '../App'

const Routes = () => (
  <StoreProvider>
    <Router>
      <Switch>
        <Route path="/" element={<App />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/furniture" element={<ProductsCatalog />} />
          <Route path="/games" element={<ProductsCatalog />} />
          <Route path="/accessories" element={<ProductsCatalog />} />
          <Route path="/books" element={<ProductsCatalog />} />
          <Route path="/electronics" element={<ProductsCatalog />} />
          <Route path="/clothes" element={<ProductsCatalog />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
      </Switch>
    </Router>
  </StoreProvider>
)

export default Routes
