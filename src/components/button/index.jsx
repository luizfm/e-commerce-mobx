import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './styles.css'

export const BUTTON_THEME = {
  TRANSPARENT: 'transparent',
  YELLOW: 'yellow',
}

const Button = ({
  type,
  children,
  onClick,
  theme,
  className,
  ...buttonProps
}) => (
  <button
    className={classnames(styles.button, styles[theme], className)}
    type={type || 'button'}
    onClick={onClick}
    {...buttonProps}
  >
    {children}
  </button>
)

Button.propTypes = {
  type: PropTypes.string,
  theme: PropTypes.oneOf(Object.values(BUTTON_THEME)),
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {
  type: 'button',
  className: '',
  onClick: () => {},
  theme: BUTTON_THEME.TRANSPARENT,
}

export default Button
