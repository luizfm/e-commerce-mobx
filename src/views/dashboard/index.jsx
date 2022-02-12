import React, { useContext } from 'react'
import { StoreContext } from '_store'

const Dashboard = () => {
  const { user } = useContext(StoreContext)
  console.log({ user })
  return (
    <main>
      <p>{user.email}</p>
      <p>{user.authToken}</p>
    </main>
  )
}

export default Dashboard
