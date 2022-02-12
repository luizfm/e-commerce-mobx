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
  }))

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default StoreProvider
