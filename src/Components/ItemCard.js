import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

const ItemCard = ({ slug, title, category, status }) => {
  
  //console.log(status)
  return (
    <Link to={`${category[0]}/${slug}`}>
      <div>{title}</div>
    </Link>
  )
  
}

ItemCard.propTypes = {
  category: PropTypes.array.isRequired,
  slug: PropTypes.string.isRequired,
  status: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
}

export default ItemCard
