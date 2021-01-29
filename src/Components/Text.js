import PropTypes from 'prop-types'
import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'


const useStyles = createUseStyles((theme) => ({
  root: ({ variant, typeface }) => ({
    ...theme.typography[variant],
    fontFamily: typeface,
  }),
}))

const Text = ({ className, variant, typeface, children, ...rest }) => {
  const classes = useStyles({ variant, typeface })
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
