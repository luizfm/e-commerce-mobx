import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Button from '_components/button'
import { svgShape } from '_utils/proptypes'
import Svg from '_components/svg'
import IconButton from '_components/icon-button'

import styles from './styles.css'

const SidebarItem = ({
  className,
  icon,
  text,
  isOpen,
  ...restSidebarProps
}) => {
  const handleOpenState = useMemo(() => ({ sidebarOpen: isOpen }), [isOpen])

  if (isOpen) {
    return (
      <Button
        className={classnames(
          styles['sidebar-item-button'],
          styles['button-open'],
          className
        )}
        state={handleOpenState}
        {...restSidebarProps}
      >
        <Svg icon={icon} className={styles.icon} />
        {text}
      </Button>
    )
  }

  return (
    <IconButton
      className={classnames(styles['sidebar-item-button'], className)}
      icon={icon}
      iconClassName={styles.icon}
      state={handleOpenState}
      {...restSidebarProps}
    />
  )
}

SidebarItem.propTypes = {
  className: PropTypes.string,
  icon: svgShape.isRequired,
  text: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
}

SidebarItem.defaultProps = {
  className: '',
  isOpen: false,
}

export default React.memo(SidebarItem)
