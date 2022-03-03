import React, { useCallback, useContext, useMemo, useReducer } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import Input from '_components/input'
import CreditCard from '_components/credit-card'
import Button, { BUTTON_THEME } from '_components/button'

import { useNavigate } from 'react-router-dom'
import { StoreContext } from '_providers/store-provider'
import styles from './styles.css'
import { reducer, UPDATE_STATE, INITIAL_STATE } from './reducer'

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY)

const Payment = () => {
  const { cartStore } = useContext(StoreContext)
  const [state, localDispatch] = useReducer(reducer, INITIAL_STATE)
  const navigate = useNavigate()

  const onChange = useCallback(({ target }) => {
    const { name, value } = target

    const payload = {
      [name]: value,
    }

    localDispatch({
      type: UPDATE_STATE,
      payload,
    })
  }, [])

  const onConfirmPayment = useCallback(() => {
    const delay = (0.5 + Math.random() * 2) * 1000
    setTimeout(() => {
      alert('Payment confirmed!')
      navigate('/cart/payment-success')
      cartStore.clearCart()
    }, delay)
  }, [cartStore, navigate])

  const disableButton = useMemo(
    () => Object.values(state).filter(Boolean).length === 0,
    [state]
  )

  return (
    <Elements stripe={stripePromise}>
      <section className={styles['payment-container']}>
        <div className={styles['payment-info']}>
          <h1>Payment</h1>
          <p>
            At the moment, the only payment method available is by card. Please,
            inform your card data below
          </p>
        </div>
        <div className={styles['card-setup']}>
          <form className={styles['card-form']}>
            <Input
              mask="9999 9999 9999 9999"
              onChange={onChange}
              id="card-number-input"
              label="Card number"
              name="cardNumber"
              placeholder="1234 1234 1234 1234"
              className={styles['card-number']}
              value={state.cardNumber}
            />
            <Input
              onChange={onChange}
              id="card-name-input"
              label="Owner name"
              placeholder="John Doe"
              className={styles['card-name']}
              name="ownerName"
              value={state.ownerName}
            />
            <Input
              mask="99/99"
              maskChar=""
              onChange={onChange}
              id="card-expiry-in-input"
              label="Expiry"
              placeholder="MM/AA"
              className={styles['card-expires']}
              name="expires"
              value={state.expires}
            />
            <Input
              mask="999"
              maskChar=""
              onChange={onChange}
              id="card-cvc-input"
              label="CVC"
              placeholder="123"
              className={styles['card-cvc']}
              name="cvc"
              value={state.cvc}
            />
          </form>
          <CreditCard
            className={styles['credit-card']}
            name={state.ownerName}
            cardNumber={state.cardNumber}
            cvc={state.cvc}
            expires={state.expires}
          />
        </div>
        <Button
          theme={BUTTON_THEME.LEAD_GRAY}
          className={styles['confirm-payment-button']}
          disabled={disableButton}
          onClick={onConfirmPayment}
        >
          Confirm Payment
        </Button>
      </section>
    </Elements>
  )
}

export default Payment
