import React, { useCallback, useMemo, useState } from 'react'
import PropTypes from 'prop-types'

import Button from '../button'
import Input from '../input'

import styles from './styles.css'

const QuantifierInput = ({
  stock,
  quantity,
  onIncrement,
  onDecrement,
  onChange,
}) => {
  const disableIncrement = useMemo(() => stock === quantity, [quantity, stock])
  const disableDecrement = useMemo(() => quantity === 0, [quantity])

  return (
    <div className={styles['quantifier-container']}>
      <Button onClick={onDecrement} disabled={disableDecrement}>
        -
      </Button>
      <input
        className={styles['quantity-input']}
        type="number"
        onChange={onChange}
        value={quantity}
      />
      <Button onClick={onIncrement} disabled={disableIncrement}>
        +
      </Button>
    </div>
  )
}

QuantifierInput.propTypes = {
  stock: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onChange: PropTypes.func,
}

QuantifierInput.defaultProps = {
  onIncrement: () => {},
  onDecrement: () => {},
  onChange: () => {},
}

export default QuantifierInput
