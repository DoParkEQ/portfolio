import PropTypes from 'prop-types'
import React from 'react'
import { createUseStyles } from 'react-jss'
import { Col, Row } from 'react-grid-system'
import Text from './Text'
import clsx from 'clsx'


const useStyles = createUseStyles((theme) => ({
  text: {
    margin: '0.5rem',
  },
  textContainer: {
    opacity: isActive => isActive ? 1.0 : 0.2,
    transition: 'all 0.4s ease-in-out',
  },
  hiddenText: {
    opacity: isActive => isActive ? 1 : 0,
    transition: 'all 0.4s ease-in-out',
  },
  container: {
    margin: '12px 0px',
    borderRadius: 10,
    border: `solid 1px ${theme.color.secondary[200]}`,
    boxShadow: theme.shadow[10],
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      boxShadow: theme.shadow[30],
      transform: 'scale(1.01)',
    },
  },
  date: {
    color: theme.color.secondary[500],
  },
}))
  
const ThoughtsCard = ({ isActive, data }) => {

  const { title, date, slug, status, category, tagline } = data 
  const classes = useStyles(isActive)
  return (
   
    <Col style={{ padding: 16 }} className={classes.container} sm={12}>
      <Text className={clsx([classes.text],[classes.date])} variant='body' typeface='Open Sans'>{date}</Text>
      <Text className={classes.text} variant='subtitle'>{title}</Text>
      {/* <Text className={classes.text} variant='body' typeface='Open Sans'>{tagline}</Text> */}
      {/* <Text className={classes.text} variant='button' typeface='Open Sans'>Read more</Text> */}
    </Col>
   
  )
}

ThoughtsCard.propTypes = {
  category: PropTypes.array.isRequired,
  data: PropTypes.shape({
    category: PropTypes.array,
    client: PropTypes.string,
    date: PropTypes.string,
    id: PropTypes.string,
    image: PropTypes.string,
    slug: PropTypes.string,
    status: PropTypes.array,
    tagline: PropTypes.string,
    title: PropTypes.string,
  }),
  duration: PropTypes.number,
  isActive: PropTypes.bool,
  onHover: PropTypes.func,
  slug: PropTypes.string.isRequired,
  status: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
}

export default ThoughtsCard
