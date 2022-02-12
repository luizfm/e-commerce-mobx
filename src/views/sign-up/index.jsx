import React, { useCallback, useContext, useReducer } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

import api from '_services/api'
import Button, { BUTTON_THEME } from '_components/button'
import Input, { INPUT_TYPES } from '_components/input'
import { StoreContext } from '_store'
import { signUp } from '_store/modules/user/actions'
import emailValidator from '_utils/helpers'

import { reducer, UPDATE_STATE, INITIAL_STATE } from './reducer'
import styles from './styles.css'
import validate from './validate'

const INPUT_IDS = {
  NAME: 'name',
  EMAIL: 'email',
  PASSWORD: 'password',
  CONFIRM_PASSWORD: 'confirmPassword',
}

const SignUp = () => {
  const store = useContext(StoreContext)
  const [state, localDispatch] = useReducer(reducer, INITIAL_STATE)
  const navigate = useNavigate()

  const onChange = useCallback(({ target }) => {
    const { name, value } = target

    localDispatch({
      type: UPDATE_STATE,
      payload: {
        [name]: value,
        [`${name}Error`]: '',
      },
    })
  }, [])

  const onSubmit = useCallback(async () => {
    const errorsPayload = validate(state)

    if (Object.values(errorsPayload).length) {
      localDispatch({
        type: UPDATE_STATE,
        payload: errorsPayload,
      })

      return
    }

    try {
      const payload = {
        name: state[INPUT_IDS.NAME],
        email: state[INPUT_IDS.EMAIL],
        password: state[INPUT_IDS.PASSWORD],
        confirmPassword: state[INPUT_IDS.CONFIRM_PASSWORD],
      }

      const response = await api.post('/register', payload)
      const { accessToken, user } = response.data

      signUp({ email: user.email, accessToken })(store)

      navigate('/dashboard')
    } catch (err) {
      console.log(err)
    }
  }, [navigate, state, store])

  if (store.user.authToken) {
    return <Navigate to="/dashboard" />
  }

  return (
    <main className={styles['sign-up-container']}>
      <section className={styles['sign-up-card']}>
        <h1 className={styles.title}>Register a new account</h1>
        <p className={styles['card-description']}>
          Fill the fields below with your information to register a new account
          on our website
        </p>

        <Input
          className={styles.input}
          name={INPUT_IDS.NAME}
          id={INPUT_IDS.NAME}
          autoComplete="off"
          label="Name"
          error={state.nameError}
          onChange={onChange}
          value={state[INPUT_IDS.NAME]}
        />

        <Input
          className={styles.input}
          autoComplete="off"
          name={INPUT_IDS.EMAIL}
          id={INPUT_IDS.EMAIL}
          error={state.emailError}
          label="Email"
          onChange={onChange}
          value={state[INPUT_IDS.EMAIL]}
        />

        <Input
          className={styles.input}
          name={INPUT_IDS.PASSWORD}
          id={INPUT_IDS.PASSWORD}
          label="Password"
          error={state.passwordError}
          onChange={onChange}
          type={INPUT_TYPES.PASSWORD}
          value={state[INPUT_IDS.PASSWORD]}
        />

        <Input
          className={styles.input}
          name={INPUT_IDS.CONFIRM_PASSWORD}
          id={INPUT_IDS.CONFIRM_PASSWORD}
          label="Confirm password"
          error={state.confirmPasswordError}
          onChange={onChange}
          type={INPUT_TYPES.PASSWORD}
          value={state[INPUT_IDS.CONFIRM_PASSWORD]}
        />

        <Button
          className={styles['submit-button']}
          theme={BUTTON_THEME.YELLOW}
          onClick={onSubmit}
        >
          Confirm
        </Button>
      </section>
    </main>
  )
}

export default SignUp
