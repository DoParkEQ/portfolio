import PropTypes from 'prop-types'
import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme) => ({
  root: (variant) => theme.typography[variant],
}))

const Text = ({ variant, children, ...rest }) => {
  const classes = useStyles(variant)
  return (
    <p className={classes.root} {...rest}>
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
