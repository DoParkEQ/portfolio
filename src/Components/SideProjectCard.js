import PropTypes from 'prop-types'
import React from 'react'
import { createUseStyles } from 'react-jss'
import { Col, Row } from 'react-grid-system'
import Text from './Text'
import clsx from 'clsx'
import { useImage } from './hooks'

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
    opacity: ({ isActive }) => isActive ? 1.0 : 0.2,
    transition: 'all 0.4s ease-in-out',
  },
  hiddenText: {
    opacity: ({ isActive }) => isActive ? 1 : 0,
    transition: 'all 0.4s ease-in-out',
  },
  container: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    boxShadow: theme.shadow[10],
    '&:hover': {
      boxShadow: theme.shadow[30],
      transform: 'scale(1.01)',
    },
    transition: 'all 0.2s ease-in-out',
  },
  skeleton: {
    backgroundColor: theme.color.secondary[400],
    width: '100%',
    height: 250,
    borderRadius: 10,
    boxShadow: theme.shadow[10],
    animation: '$shine 1.6s infinite',
    transitionTimingFunction: 'ease-in-out',
  },
  '@keyframes shine': {
    '0%': { backgroundColor: theme.color.secondary[400] },
    '50%': { backgroundColor: theme.color.secondary[300] },
    '100%': { backgroundColor: theme.color.secondary[400] },
  },
  date: {
    color: theme.color.secondary[500],
  },
}))

const doubleSized = ['side-project-1','side-project-6']

const SideProjectCard = ({ isActive, data }) => {

  const { title, date, slug, status, image } = data
  const [isLoading, imgUrl] = useImage(image)
  const classes = useStyles({ isActive, image })
  const colSize = doubleSized.includes(slug) ? 6 : 3

  return (
    <Link to={`${category[0]}/${slug}`}>
      <Col style={{ padding: 12 }} sm={colSize}>
        {isLoading ? <div className={classes.skeleton} /> :  <img className={classes.container} src={imgUrl}/>}
      </Col>
    </Link>

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
