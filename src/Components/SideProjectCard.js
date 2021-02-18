import PropTypes from 'prop-types'
import React from 'react'
import { createUseStyles } from 'react-jss'
import { Col } from 'react-grid-system'
import { Link } from 'react-router-dom'
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
  container: {
    filter: 'grayscale(100%)',
    width: '100%',
    height: 250,
    borderRadius: 10,
    boxShadow: theme.shadow[10],
    '&:hover': {
      boxShadow: theme.shadow[30],
      filter: 'grayscale(0%)',
    },
    transition: 'all 0.2s linear',
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

const SideProjectCard = ({ isActive, data, noPadding }) => {

  const { category, slug, image } = data
  const [isLoading, imgUrl] = useImage(image)
  const classes = useStyles(isActive)
  const colSize = doubleSized.includes(slug) ? 6 : 3
  return (
    <Col style={{ padding: noPadding ? '12px 0px' : '12px' }} sm={colSize}>
      {isLoading ? <div className={classes.skeleton} /> :
        <Link to={`${category[0]}/${slug}`}>
          <img className={classes.container} src={imgUrl} />
        </Link>}
    </Col>
  )
}

SideProjectCard.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.array.isRequired,
    image: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }),
  isActive: PropTypes.bool.isRequired,
  onHover: PropTypes.func.isRequired,
  noPadding: PropTypes.bool.isRequired,
}

export default SideProjectCard
