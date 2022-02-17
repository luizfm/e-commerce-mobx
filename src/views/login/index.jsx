import React, { useCallback, useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

import Input, { INPUT_TYPES } from '_components/input'
import Button, { BUTTON_THEME } from '_components/button'
import api from '_services/api'
import { observer } from 'mobx-react-lite'
import { StoreContext } from '_store/'
import { login } from '_store/modules/user/actions'

import styles from './styles.css'

const INPUT_IDS = {
  EMAIL: 'email',
  PASSWORD: 'password',
}

const Login = observer(() => {
  const store = useContext(StoreContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const navigate = useNavigate()

  const onChange = useCallback(({ target }) => {
    const { name, value } = target

    if (name === INPUT_IDS.EMAIL) {
      setEmail(value)
      return
    }

    setPassword(value)
  }, [])

  const onLoginClick = useCallback(async () => {
    try {
      const response = await api.post('/login', { email, password })
      const { accessToken, user } = response.data

      login({ email, accessToken })(store)

      navigate('/dashboard')
    } catch (err) {
      setEmailError('Email or password incorrect')
      setPasswordError('Email or password incorrect')
    }
  }, [email, navigate, password, store])

  if (store?.user?.authToken) {
    return <Navigate to="/dashboard" />
  }

  return (
    <section className={styles['login-container']}>
      <div className={styles['login-card']}>
        <h1 className={styles.title}>Login</h1>
        <p className={styles.description}>
          Enter your credentials to login into the application
        </p>
        <Input
          className={styles['email-input']}
          id="email"
          name={INPUT_IDS.EMAIL}
          value={email}
          error={emailError}
          onChange={onChange}
          label="Email"
        />
        <Input
          id="password"
          autoComplete="off"
          name={INPUT_IDS.PASSWORD}
          value={password}
          error={passwordError}
          onChange={onChange}
          type={INPUT_TYPES.PASSWORD}
          label="Password"
        />

        <Button
          onClick={onLoginClick}
          className={styles['login-button']}
          theme={BUTTON_THEME.YELLOW}
        >
          Login
        </Button>
      </div>
    </section>
  )
})

export default Login
