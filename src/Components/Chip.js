import PropTypes from 'prop-types'
import React from 'react'
import { createUseStyles } from 'react-jss'
import Text from './Text'
import clsx from 'clsx'


const useStyles = createUseStyles((theme) => ({
  chip: {
    display: 'inline-block',
    padding: '2px 12px',
    backgroundColor: theme.color.system.locked,
    borderRadius: 10,
  },
  text: {
    margin: '0.2rem',
  },
}))
const Chip = ({ className }) => {
  const classes = useStyles()
  return (
    <div className={clsx([classes.chip],className)}>
      <Text className={classes.text} typeface='Lato' variant='body'>locked 🔒</Text>
    </div>
  )
}


Chip.propTypes = {
  className: PropTypes.object,
}

export default Chip
