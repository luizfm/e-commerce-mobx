import React from 'react'

import Svg from '_components/svg'
import CheckIcon from '_assets/icons/check-icon.svg'

import styles from './styles.css'

const PaymentSuccess = () => (
  <section className={styles['payment-success-container']}>
    <div className={styles['view-content']}>
      <Svg icon={CheckIcon} className={styles['check-icon']} />
      <h1>Payment confirmed!</h1>
      <h2 className={styles['order-info']}>
        Thanks for buy with us. Your going to be notified by email about your
        order delivery status
      </h2>
    </div>
  </section>
)

export default React.memo(PaymentSuccess)
