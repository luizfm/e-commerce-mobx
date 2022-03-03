import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import InputMask from 'react-input-mask'

import { svgShape } from '_utils/proptypes'
import LockIcon from '_assets/icons/lock-icon.svg'
import LockOpenIcon from '_assets/icons/lock-open-icon.svg'
import Svg from '_components/svg'
import useToggle from '_hooks/use-toggle'

import styles from './styles.css'
import Button from '../button'

export const INPUT_TYPES = {
  TEXT: 'text',
  PASSWORD: 'password',
}

export default function Input({
  id,
  label,
  hiddenLabel,
  icon,
  type,
  className,
  error,
  ...inputProps
}) {
  const [isPasswordVisible, onTogglePassword] = useToggle()

  const inputPasswordIcon = useMemo(
    () => (isPasswordVisible ? LockOpenIcon : LockIcon),
    [isPasswordVisible]
  )

  const handleInputType = useMemo(() => {
    switch (type) {
      case INPUT_TYPES.PASSWORD: {
        if (isPasswordVisible) {
          return 'text'
        }

        return 'password'
      }
      case INPUT_TYPES.TEXT: {
        return 'text'
      }
      default:
        return type
    }
  }, [isPasswordVisible, type])

  return (
    <div className={classnames(styles['input-container'], className)}>
      <label
        htmlFor={id}
        className={classnames(styles.label, {
          [styles['hidden-label']]: hiddenLabel,
        })}
      >
        {label}
      </label>
      <div
        className={classnames(styles['input-wrapper'], {
          [styles['input-error']]: !!error,
        })}
      >
        <InputMask
          id={id}
          type={handleInputType}
          {...inputProps}
          className={styles.input}
        />
        {icon && <Svg icon={icon} className={styles['input-icon']} />}
        {type === INPUT_TYPES.PASSWORD && (
          <Button
            onClick={onTogglePassword}
            className={styles['visibility-button']}
          >
            <Svg icon={inputPasswordIcon} className={styles['input-icon']} />
          </Button>
        )}
      </div>
      {!!error && <span className={styles['error-message']}>{error}</span>}
    </div>
  )
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  hiddenLabel: PropTypes.bool,
  type: PropTypes.oneOf(Object.values(INPUT_TYPES)),
  icon: svgShape,
  error: PropTypes.string,
  className: PropTypes.string,
}

Input.defaultProps = {
  type: INPUT_TYPES.TEXT,
  hiddenLabel: false,
  icon: '',
  className: '',
  error: '',
}
