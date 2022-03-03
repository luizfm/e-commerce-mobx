import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import MasterCardLogo from '_assets/images/mastercard-logo.png'

import styles from './styles.css'

const CreditCard = ({ name, cardNumber, cvc, expires, className }) => (
  <div className={classnames(styles['credit-card-container'], className)}>
    <img
      className={styles['card-logo']}
      src={MasterCardLogo}
      alt="Mastercard"
    />
    <p>{cardNumber}</p>
    <div className={styles['card-data']}>
      <span>{name}</span>
      <span>{expires}</span>
      <span>{cvc}</span>
    </div>
  </div>
)

CreditCard.propTypes = {
  name: PropTypes.string.isRequired,
  cardNumber: PropTypes.number.isRequired,
  cvc: PropTypes.number.isRequired,
  expires: PropTypes.string.isRequired,
  className: PropTypes.string,
}

CreditCard.defaultProps = {
  className: '',
}

export default React.memo(CreditCard)
