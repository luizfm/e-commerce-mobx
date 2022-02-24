/* eslint-disable arrow-body-style */
/* eslint-disable prettier/prettier */
import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'

import { RootStoreContext } from '_store/rootStore'

export const StoreContext = createContext()

const StoreProvider = ({ children }) => {
  const rootStore = useContext(RootStoreContext)
  return (
    <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
  )
}

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default StoreProvider
