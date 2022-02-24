import { makeAutoObservable } from 'mobx'
import cookies from 'react-cookies'

class UserStore {
  email
  name
  avatar
  authToken
  rootStore

  constructor(rootStore, email = '', authToken = '') {
    makeAutoObservable(this)
    this.rootStore = rootStore
    this.email = email
    this.authToken = authToken
  }

  authenticateUser(payload) {
    const { email, accessToken } = payload

    this.email = email
    this.authToken = accessToken
  }

  logoutUser() {
    this.email = ''
    this.authToken = ''

    cookies.remove('accessToken', { path: '/' })
    cookies.remove('user', { path: '/' })
  }
}

export default UserStore
