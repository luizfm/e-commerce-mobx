import { makeAutoObservable } from 'mobx'

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
}

export default UserStore
