import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import Svg from '../svg'
import { svgShape } from '_utils/proptypes'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

const IconButton = ({ icon, className, to, iconClassName, ...buttonProps }) => {
  if(to) {
    return (
      <Link to={to} className={classNames(styles.button, className)} {...buttonProps}>
        <Svg icon={icon} className={iconClassName} />
      </Link>
    )
  }

  return (
    <button className={classNames(styles.button, className)} {...buttonProps}>
      <Svg icon={icon} className={iconClassName} />
    </button>
  )
}

IconButton.propTypes = {
  icon: svgShape.isRequired,
  className: PropTypes.string,
  iconClassName: PropTypes.string,
  to: PropTypes.string,
}

IconButton.defaultProps = {
  className: '',
  iconClassName: '',
  to: ''
}

export default IconButton
