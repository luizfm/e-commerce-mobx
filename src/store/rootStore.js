import React, { createContext } from 'react'
import PropTypes from 'prop-types'
import cookies from 'react-cookies'
import { ProductsStore, UserStore, CartStore } from './modules'

const authToken = cookies.load('accessToken')
const email = cookies.load('email')

export class RootStore {
  constructor() {
    this.userStore = new UserStore(this, email, authToken)
    this.productsStore = new ProductsStore(this)
    this.cartStore = new CartStore(this)
  }
}

export const RootStoreContext = createContext(new RootStore())

// export const RootProvider = ({ children }) => (
//   <RootStoreContext.Provider value={RootStoreContext}>
//     {children}
//   </RootStoreContext.Provider>
// )

// RootProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// }
