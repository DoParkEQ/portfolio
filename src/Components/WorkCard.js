import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-grid-system'
import Text from './Text'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'
import { useImage, useWindowDimensions } from './hooks'
import Chip from './Chip'


const minWidth = 576

const useStyles = createUseStyles((theme) => ({
  root: ({ isActive, duration }) => ({
    width: '100%',
    padding: 0,
    height: isActive ? 311 : 91,
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
    objectFit: 'cover',
    opacity: isActive ? 1.0 : 0.2,
    height: isActive ? 300 : 80,
    width: '100%',
    backgroundColor: theme.color.secondary[400],
    borderRadius: 10,
    transition: `all ${duration}s ease-in-out`,
    boxShadow: theme.shadow[20],
  }),
  skeleton: ({ isActive }) => ({
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
  test: {
    border: 'solid 1px black',
  },
  rootMobile: {
    width: '100%',
    padding: 0,
  },
  imageMobile: ({ duration }) => ({
    objectFit: 'cover',
    height: 200,
    width: '100%',
    backgroundColor: theme.color.secondary[400],
    borderRadius: 10,
    transition: `all ${duration}s ease-in-out`,
    boxShadow: theme.shadow[20],
  }),
  skeletonMobile: {
    backgroundColor: theme.color.secondary[100],
    width: '100%',
    height: 200,
    borderRadius: 10,
    boxShadow: theme.shadow[20],
    animation: '$shine 1.6s infinite',
    transitionTimingFunction: 'ease-in-out',
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}))

const WorkCard = ({ duration, isActive, data, onHover }) => {

  const { title, date, client, tagline, slug, status, category, id, image } = data
  const [isLoading, imgUrl] = useImage(image)
  const { width } = useWindowDimensions()
  const locked = status.includes('locked')
  const classes = useStyles({ isActive, duration })

  return width > minWidth ? (   
    <Row style={{ margin: '12px 0px' }} className={classes.root} onMouseOver={() => onHover(slug)}>
      <Col style={{ padding: 0 }} className={classes.textContainer} sm={4} md={4}>
        <Text className={classes.text} style={{ color: '#898989' }} variant='subtitle'>{client}</Text>
        <Text className={classes.text} variant='h4'>{title}</Text>
        <div className={classes.subContainer}>
          <Text className={classes.hiddenText} variant='subtitle' typeface='Lato'>{tagline}</Text>
          <Text className={clsx([classes.hiddenText],[classes.date])} variant='body' typeface='Lato'>{date}</Text>
          {locked && <Chip className={classes.hiddenText} label="🔒"/>}
        </div>
      </Col>
      <Col style={{ padding: 0 }} sm={8} md={8}>
        <Link to={locked ? '/work' : `${category[0]}/${slug}`}>
          {isLoading ? <div className={classes.skeleton} /> : <img className={classes.image} src={imgUrl} />}
        </Link> 
      </Col>
    </Row>)
    : (
      <Row style={{ margin: '12px 0px' }} className={classes.rootMobile} onMouseOver={()=>onHover(id)}>
        <Col style={{ padding: 0 }} sm={12}>
          <div className={classes.titleContainer}>
            <Text variant='h6' className={classes.text}>{title}</Text>
            {locked && <Chip label="🔒" />}
          </div>
          <Text variant='subtitle' typeface='Lato'>{tagline}</Text>
          <Link to={locked ? '/work' : `${category[0]}/${slug}`}>
            {isLoading ? <div className={classes.skeletonMobile} /> : <img className={classes.imageMobile} src={imgUrl} />}
          </Link> 
        </Col>  
        <Col style={{ padding: 0 }} sm={12}>
          <div >
          </div>
        </Col>
      </Row> 
    )
}

WorkCard.propTypes = {
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
