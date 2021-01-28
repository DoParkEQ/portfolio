import PropTypes from 'prop-types'
import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'


const useStyles = createUseStyles((theme) => ({
  root: (variant) => theme.typography[variant],
}))

const Text = ({ className, variant, children, ...rest }) => {
  const classes = useStyles(variant)
  return (
    <p className={clsx([classes.root], className)} {...rest}>
      {children}
    </p>
  )
}

Text.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.string,
}

Text.defaultProps = {
  variant: 'body',
}

export default Text
