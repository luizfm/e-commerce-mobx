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
    currentCategoryList: (category) => store.products.filter((item) => item.category === category)
  }))

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default StoreProvider
