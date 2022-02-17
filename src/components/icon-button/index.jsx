import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { svgShape } from '_utils/proptypes'
import { Link } from 'react-router-dom'
import Svg from '../svg'

import styles from './styles.css'

const IconButton = ({
  icon,
  className,
  to,
  state,
  iconClassName,
  ...buttonProps
}) => {
  if (to) {
    return (
      <Link
        to={to}
        state={state}
        className={classnames(styles.button, className)}
        {...buttonProps}
      >
        <Svg icon={icon} className={iconClassName} />
      </Link>
    )
  }

  return (
    <button className={classnames(styles.button, className)} {...buttonProps}>
      <Svg icon={icon} className={iconClassName} />
    </button>
  )
}

IconButton.propTypes = {
  icon: svgShape.isRequired,
  className: PropTypes.string,
  iconClassName: PropTypes.string,
  to: PropTypes.string,
  state: PropTypes.shape({}),
}

IconButton.defaultProps = {
  className: '',
  iconClassName: '',
  to: '',
  state: {},
}

export default IconButton
