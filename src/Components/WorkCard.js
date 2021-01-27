import PropTypes from 'prop-types'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Hidden } from 'react-grid-system'
import Text from './Text'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'


const useStyles = createUseStyles((theme) => ({
  root: {
    padding: 0,
    margin: mouseHover => mouseHover ? '24px 0px' : '16px 0px',
    height: mouseHover => mouseHover ? 300 : 80,
    transition: 'all 0.4s ease-in-out',
  },
  text: {
    margin: 0,
  },
  textContainer: {
    opacity: mouseHover => mouseHover ? 1.0 : 0.2,
    transition: 'all 0.4s ease-in-out'
  },
  hiddenText: {
    opacity: mouseHover => mouseHover ? 1 : 0,
    transition: 'all 0.4s ease-in-out'
  },
  image: {
    width: '100%',
    height: mouseHover => mouseHover ? 300 : 80,
    backgroundColor: '#cdcdcd',
    borderRadius: 10,
    transition: 'all 0.4s ease-in-out'
  }

}))

const ItemCard = (data) => {
  const { title, date, client, tagline, slug, status, category } = data
  const [mouseHover, setMouseHover] = useState(false);
  const classes = useStyles(mouseHover);
  return (
    
    <Row className={classes.root} onMouseOver={()=>setMouseHover(true)} onMouseOut={()=>setMouseHover(false)}>
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
