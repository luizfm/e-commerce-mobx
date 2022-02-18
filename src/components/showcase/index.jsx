import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import MissingPicturePlaceholder from '_assets/images/missing-picture.jpeg'

import styles from './styles.css'

const ShowCase = ({ to, name, image, price }) => (
  <article className={styles['show-case-container']}>
    <Link to={to} className={styles['product-link']} />
    <img
      className={styles['product-image']}
      src={image || MissingPicturePlaceholder}
      alt="test"
    />
    <div className={styles['show-case-details']}>
      <p>{name}</p>
      <p>{`$${price?.toFixed(2)}`}</p>
    </div>
  </article>
)

ShowCase.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
}

ShowCase.defaultProps = {
  image: '',
  name: '',
  price: null,
}

export default React.memo(ShowCase)
