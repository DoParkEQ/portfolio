import React from 'react'
import { createUseStyles } from 'react-jss'
import { Col, Row } from 'react-grid-system'
import Text from './Text'

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
  container: {
    borderRadius: 10,
    border: `solid 1px ${theme.color.secondary[200]}`,
    boxShadow: theme.shadow[10],
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      boxShadow: theme.shadow[30],
    },
  },
}))
  
const ThoughtsCard = ({ isActive, data }) => {

  const { title, date, slug, status, category, tagline } = data 
  const classes = useStyles(isActive)
  return (
    <div>
      <Row nogutter className={classes.root}>
         {/*Inline styling for overriding padding prop of <Col> */}
        <Col style={{padding: 16}} className={classes.container} sm={12}>
          <Text className={classes.text} variant='subtitle'>{date}</Text>
          <Text className={classes.text} variant='h6'>{title}</Text>
          <Text className={classes.text} variant='body'>{tagline}</Text>
          <Text className={classes.text} variant='body'>Read more</Text>
        </Col>
      </Row>
    </div>
  )
}

export default ThoughtsCard
