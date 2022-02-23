import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './styles.css'

export const BUTTON_THEME = {
  TRANSPARENT: 'transparent',
  LEAD_GRAY: 'lead-gray',
  YELLOW: 'yellow',
}

const Button = ({
  type,
  children,
  onClick,
  theme,
  className,
  to,
  state,
  disabled,
  ...buttonProps
}) => {
  if (to && !disabled) {
    return (
      <Link
        state={state}
        className={classnames(
          styles.button,
          styles[theme],
          { [styles.disabled]: disabled },
          className
        )}
        to={to}
        rel="noopener noreferrer"
        {...buttonProps}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      className={classnames(styles.button, styles[theme], className)}
      type={type || 'button'}
      onClick={onClick}
      disabled={disabled}
      {...buttonProps}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  theme: PropTypes.oneOf(Object.values(BUTTON_THEME)),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  state: PropTypes.shape({}),
}

Button.defaultProps = {
  type: 'button',
  className: '',
  disabled: false,
  onClick: () => {},
  theme: BUTTON_THEME.TRANSPARENT,
  to: '',
  state: {},
}

export default Button
