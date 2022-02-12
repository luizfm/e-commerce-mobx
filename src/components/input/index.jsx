import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

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
  ...inputProps
}) {
  const [isPasswordVisible, onTogglePassword] = useToggle()

  const inputPasswordIcon = useMemo(
    () => (isPasswordVisible ? LockOpenIcon : LockIcon),
    [isPasswordVisible]
  )

  const handleInputType = useMemo(
    () =>
      type === INPUT_TYPES.TEXT || (INPUT_TYPES.PASSWORD && isPasswordVisible)
        ? 'text'
        : 'password',
    [isPasswordVisible, type]
  )

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
      <div className={styles['input-wrapper']}>
        <input
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
    </div>
  )
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  hiddenLabel: PropTypes.bool,
  type: PropTypes.oneOf(Object.values(INPUT_TYPES)),
  icon: svgShape,
  className: PropTypes.string,
}

Input.defaultProps = {
  type: INPUT_TYPES.TEXT,
  hiddenLabel: false,
  icon: '',
  className: '',
}
