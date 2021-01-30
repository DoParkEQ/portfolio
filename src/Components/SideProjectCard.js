import PropTypes from 'prop-types'
import React from 'react'
import { createUseStyles } from 'react-jss'
import { Col, Row } from 'react-grid-system'
import Text from './Text'
import clsx from 'clsx'


const useStyles = createUseStyles((theme) => ({
  root: {
    padding: 0,
    margin: '24px 0px',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      // padding: 8,
      transform: 'scale(1.01)',
    },
  },
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
  image: {
    width: '100%',
    height: isActive => isActive ? 300 : 80,
    backgroundColor: '#cdcdcd',
    borderRadius: 10,
    transition: 'all 0.4s ease-in-out',
  },
  container: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    border: `solid 1px ${theme.color.secondary[200]}`,
    boxShadow: theme.shadow[10],
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      boxShadow: theme.shadow[30],
    },
  },
  date: {
    color: theme.color.secondary[500],
  },
}))

const doubleSized = ['side-project-1','side-project-6']

const SideProjectCard = ({ isActive, data }) => {

  const { title, date, slug, status, category, tagline } = data 
  const classes = useStyles(isActive)
  const colSize = doubleSized.includes(slug) ? 6 : 3

  return (

    <Col style={{ padding: 12 }} sm={colSize}>
      <div className={classes.container}>
        <Text className={clsx([classes.text],[classes.date])} variant='body' typeface='Open Sans'>{date}</Text>
        <Text className={classes.text} variant='subtitle'>{title}</Text>
        {/* <Text className={classes.text} variant='body' typeface='Open Sans'>{tagline}</Text> */}
        {/* <Text className={classes.text} variant='button' typeface='Open Sans'>Read more</Text> */}
      </div>
    </Col>

  )
}

SideProjectCard.propTypes = {
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
  isActive: PropTypes.bool,
}

export default SideProjectCard
