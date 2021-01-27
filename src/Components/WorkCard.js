import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Hidden } from 'react-grid-system'
import Text from './Text'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'


const useStyles = createUseStyles((theme) => ({
  root: {
    padding: 0,
    margin: isActive => isActive ? '24px 0px' : '16px 0px',
    height: isActive => isActive ? 300 : 80,
    transition: 'all 0.4s ease-in-out',
  },
  text: {
    margin: 0,
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

}))

const ItemCard = ({ isActive, data }) => {
  const { title, date, client, tagline, slug, status, category } = data

  const classes = useStyles(isActive)
 
  return (   
    <Row className={classes.root} >
      <Col className={classes.textContainer} sm={4}>
        <Text className={classes.text} variant='subtitle'>{client}</Text>
        <Text className={classes.text} variant='h4'>{title}</Text>
        <Text className={clsx([classes.text],[classes.hiddenText])} variant='body'>{tagline}</Text>
        <Text className={clsx([classes.text],[classes.hiddenText])} variant='body'>{date}</Text>
      </Col>
      <Col sm={8}>
        <Link to={`${category[0]}/${slug}`}>
          <div className={classes.image}/>
        </Link>
      </Col>
    </Row>
    
    
  )
  
}

ItemCard.propTypes = {
  category: PropTypes.array.isRequired,
  slug: PropTypes.string.isRequired,
  status: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
}

export default ItemCard
