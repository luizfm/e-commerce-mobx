import PropTypes from 'prop-types'

export const svgShape = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.shape({
    viewBox: PropTypes.string,
    id: PropTypes.string,
  }),
])

export const anyShape = PropTypes.shape({})
