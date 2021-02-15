import PropTypes from 'prop-types'
import React from 'react'
import { createUseStyles } from 'react-jss'
import { Col } from 'react-grid-system'
import { Link } from 'react-router-dom'
import Text from './Text'
import Chip from './Chip'
import clsx from 'clsx'


const useStyles = createUseStyles((theme) => ({
  text: {
    margin: '0.2rem',
  },
  container: {
    height: 100,
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
  link: {
    textDecoration: 'none',
    color: theme.color.secondary[900],
  },
  chip: {
    display: 'inline',
    padding: '2px 12px',
    backgroundColor: theme.color.system.locked,
    borderRadius: 10,
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}))

const ThoughtsCard = ({ data }) => {

  const classes = useStyles()
  const { title, date, slug, category, status } = data 
  const locked = status.includes('locked')
  console.log(status)
  return (
   
    <Col style={{ padding: 16 }} className={classes.container} sm={12}>
      <Link className={classes.link} to={locked ? '/thoughts' : `${category[0]}/${slug}`}>
        <div>
          <div className={classes.titleContainer}>
            <Text className={clsx([classes.text], [classes.date])} variant='body' typeface='Lato'>{date}</Text>
            {locked && <Chip label="🔒"/>}
          </div>
          <div>
            <Text className={classes.text} variant='subtitle'>{title}</Text>  
          </div>
        </div>
      </Link>
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
  onHover: PropTypes.func.isRequired,
}

export default ThoughtsCard
