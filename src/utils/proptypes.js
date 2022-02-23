import PropTypes from 'prop-types'

export const svgShape = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.shape({
    viewBox: PropTypes.string,
    id: PropTypes.string,
  }),
])

export const productShape = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.number,
  stock: PropTypes.number,
  image: PropTypes.string,
  quantity: PropTypes.number,
})

export const anyShape = PropTypes.shape({})
