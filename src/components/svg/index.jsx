import React from 'react'
import PropTypes from 'prop-types'

import { svgShape } from '_utils/proptypes'

const Svg = ({ icon, className, ...svgProps }) => (
  <svg viewBox={icon.viewBox} {...svgProps} className={className}>
    <use xlinkHref={`#${icon.id}`} />
  </svg>
)

Svg.propTypes = {
  icon: svgShape.isRequired,
  className: PropTypes.string,
}

Svg.defaultProps = {
  className: '',
}

export default Svg
