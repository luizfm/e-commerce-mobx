/* eslint-disable prettier/prettier */
import React, { createContext } from 'react'
import PropTypes from 'prop-types'
import { useLocalStore } from 'mobx-react'
import cookies from 'react-cookies'

export const StoreContext = createContext()

const StoreProvider = ({ children }) => {
  const authToken = cookies.load('accessToken')
  const userEmail = cookies.load('email')

  const initialState = authToken
    ? {
      user: {
        authToken,
        email: userEmail,
      },
    }
    : {
      user: {
        authToken: '',
        email: ''
      }
    }

  const store = useLocalStore(() => ({
    ...initialState,
    updateUser: (payload) => {
      const { email, accessToken } = payload

      store.user.email = email
      store.user.authToken = accessToken
    },
    products: [],
    updateProductsList: (list) => {
      const formattedList = list.reduce((acc, current) => {
        if (store.products.some((item) => item.id === current.id)) {
          return acc
        }

        return [...acc, current]
      }, [])

      store.products = [...store.products, ...formattedList]
    },
    currentCategoryList: (category) => store.products.filter((item) => item.category === category),
    cart: [],
    addProductToCart: (product) => {
      if (product.stock < product.quantity || product.quantity <= 0) {
        return
      }

      const productInCart = store.cart.find((prod) => prod.id === product.id)

      if (!productInCart) {
        store.cart.push(product)
      }

      productInCart.quantity += product.quantity

      store.cart.reduce((acc, current) =>
        current.id === productInCart.id ? [...acc, productInCart] : acc,
      [])
    },
    updateCartProductQuantity: (product, quantity) => {
      const productExists = store.cart.find((prod) => prod.id === product.id)

      if (!productExists) {
        return
      }

      productExists.quantity = quantity

      store.cart.reduce((acc, current) =>
        current.id === productExists.id ? [...acc, productExists] : acc,
      [])
    },
    cartTotal: () => store.cart.reduce((acc, current) => {
      let total = 0
      total += acc + current.quantity * current.price
      return total
    }, 0)
  }))

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default StoreProvider
