import cookies from 'react-cookies'

/* eslint-disable prettier/prettier */
export const login =
  ({ email, accessToken }) => (store) => {
    cookies.save('accessToken', accessToken, {
      maxAge: 60 * 24 * 24,
      secure: true,
      path: '/'
    })

    cookies.save('email', email, {
      maxAge: 60 * 24 * 24,
      secure: true,
      path: '/'
    })

    return store.updateUser({ email, accessToken })
  }

export const logout = () => (store) =>
  store.updateUser({ email: '', accessToken: '' })
