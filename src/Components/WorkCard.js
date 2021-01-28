import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Hidden } from 'react-grid-system'
import Text from './Text'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'


const useStyles = createUseStyles((theme) =>  ({
  root: ({ isActive, duration }) => ({
    padding: 0,
    margin: '24px 0px',
    height: isActive ? 300 : 80,
    transition: `all ${duration}s ease-in-out`,
  }),
  text: {
    margin: 0,
  },
  textContainer: ({ isActive, duration }) => ({
    opacity: isActive ? 1.0 : 0.2,
    transition: `all ${duration}s ease-in-out`,
  
  }),
  hiddenText: ({ isActive, duration }) => ({
    opacity: isActive ? 1 : 0,
    transition: `all ${duration}s ease-in-out`,
  }),
  image: ({ isActive, duration }) => ({
    width: '100%',
    height: isActive ? 300 : 80,
    backgroundColor: '#cdcdcd',
    borderRadius: 10,
    transition: `all ${duration}s ease-in-out`,
  }),

}))

const ItemCard = ({ duration, isActive, data }) => {
  const { title, date, client, tagline, slug, status, category } = data

  const classes = useStyles({ isActive, duration })
 
  return (   
    <Row nogutter className={clsx([classes.root])} >
      <Col className={clsx([classes.textContainer])} sm={4}>
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
