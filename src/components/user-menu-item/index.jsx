import React from 'react'
import PropTypes from 'prop-types'
import { MenuItem } from 'react-aria-menubutton'

import styles from './styles.css'

const UserMenuItem = ({ text, to }) => (
  <li className={styles['user-menu-item-container']}>
    <MenuItem data-to={to}>{text}</MenuItem>
  </li>
)

UserMenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string,
}

UserMenuItem.defaultProps = {
  to: '',
}

export default React.memo(UserMenuItem)
