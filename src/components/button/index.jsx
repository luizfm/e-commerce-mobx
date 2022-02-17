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
  ...buttonProps
}) => {
  if (to) {
    return (
      <Link
        state={state}
        className={classnames(styles.button, styles[theme], className)}
        to={to}
        rel="noopener noreferrer"
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
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  state: PropTypes.shape({}),
}

Button.defaultProps = {
  type: 'button',
  className: '',
  onClick: () => {},
  theme: BUTTON_THEME.TRANSPARENT,
  to: '',
  state: {},
}

export default Button
