import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-grid-system'
import Text from './Text'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'
import { useImage } from './hooks'

const useStyles = createUseStyles((theme) =>  ({
  root: ({ isActive, duration }) => ({
    width: '100%',
    padding: 0,
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
    // backgroundImage: `url(${image})`,
    // backgroundSize: 'cover',
    objectFit: 'cover',
    opacity: isActive ? 1.0 : 0.2,
    width: '100%',
    height: isActive ? 300 : 80,
    backgroundColor: theme.color.secondary[400],
    borderRadius: 10,
    transition: `all ${duration}s ease-in-out`,
    boxShadow: theme.shadow[20],
  }),
  skeleton: ({ isActive, duration }) => ({
    backgroundColor: theme.color.secondary[100],
    opacity: isActive ? 1.0 : 0.2,
    width: '100%',
    height: isActive ? 300 : 80,
    borderRadius: 10,
    boxShadow: theme.shadow[20],
    animation: '$shine 1.6s infinite',
    transitionTimingFunction: 'ease-in-out',
  }),
  date: {
    color: theme.color.secondary[500],
  },
  subContainer: {
    marginTop: 32,
  },
  '@keyframes shine': {
    '0%': { backgroundColor: theme.color.secondary[400] },
    '50%': { backgroundColor: theme.color.secondary[300] },
    '100%': { backgroundColor: theme.color.secondary[400] },
  },
}))

const WorkCard = ({ duration, isActive, data, onHover }) => {

  const { title, date, client, tagline, slug, status, category, id, image } = data
  const [isLoading, imgUrl] = useImage(image)
  console.log(isLoading, imgUrl)
  const locked = status.includes('locked')
  const classes = useStyles({ isActive, duration })
  
  // useEffect(() => {
  //   const loadImage = (url) => {
  //     return new Promise((resolve, reject) => {
  //       const loadImg = new Image();
  //       loadImg.src = url;
  //       loadImg.onload = () => resolve(url);
  //       loadImg.onerror = (err) => reject(err);
  //     });
  //   };

  //   loadImage(image)
  //     .then((res) => {
  //       setImgURL(res);
  //     })
  //     .catch((err) => console.log("Failed to load images", err));
  // }, []);

  return (   
    <Row style={{ margin: '12px 0px' }} className={classes.root} onMouseOver={()=>onHover(id)}>
      <Col style={{ padding: 0 }} className={classes.textContainer} sm={4}>
        <Text className={classes.text} variant='subtitle'>{client}</Text>
        <Text className={classes.text} variant='h4'>{title}</Text>
        <div className={classes.subContainer}>
          <Text className={classes.hiddenText} variant='body' typeface='Open Sans'>{tagline}</Text>
          <Text className={clsx([classes.hiddenText],[classes.date])} variant='body' typeface='Open Sans'>{date}</Text>
          {locked && <Text className={classes.hiddenText} style={{ color: '#0075EE' }} typeface='Open Sans'>This post is currently locked 🔒</Text>}
        </div>
      </Col>
      <Col style={{ padding: 0 }} sm={8}>
        <Link to={locked ? '/work' : `${category[0]}/${slug}`}>
          { isLoading ? <div className={classes.skeleton} /> : <img className={classes.image} src={imgUrl} />}
        </Link> 
      </Col>
    </Row>
    
    
  )
  
}

WorkCard.propTypes = {
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

export default WorkCard
