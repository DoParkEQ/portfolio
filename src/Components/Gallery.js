import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { Container,Row } from 'react-grid-system'
import WorkCard from './WorkCard'
import SideProjectCard from './SideProjectCard'
import ThoughtsCard from './ThoughtsCard'
import { useWindowDimensions } from './hooks'

const duration = {
  '/work': 0.3,
  '/side-project': 0,
  '/thoughts': 0.3,
}

const getCard = (type) => ({
  '/work': WorkCard, 
  '/side-project': SideProjectCard,
  '/thoughts': ThoughtsCard,    
}[type])

const gridNum = {
  '/work': 12, 
  '/side-project': 4,
  '/thoughts': 12,
}

const formatPosts = (arr, dividend) => {
  const divisor = 12 / dividend
  const f = []
  for (let i = 0; i < dividend; i++) {
    const range = divisor * i
    if (range < arr.length) { 
      const sliced = arr.slice(range, range + divisor)
      f.push(sliced)
    } else {
      break
    }
  }
  return f
}

const Gallery = ({ posts, currentPath }) => {

  const [currentItem, setCurrentItem ] = useState('work-1')
  const [isTransition, setIsTransition] = useState(false)
  const filteredPosts = posts.filter(({ category, status }) => category.includes(currentPath) && status.includes('live'))
  const formattedPosts = formatPosts(filteredPosts, gridNum[currentPath])
  const { width } = useWindowDimensions()
  const minWidth = 576
  const noPadding = width < minWidth
  const Card = getCard(currentPath)
  
  const onHover = (slug) => {
    if(!isTransition && currentItem !== slug){
      setCurrentItem(slug)
      setIsTransition(true)
    }  
  }    

  useEffect(() => {
    if (isTransition) { 
      const timer = setTimeout(() => setIsTransition(false), duration[currentPath] * 1000)
      return () => clearTimeout(timer)    
    }
  },[isTransition])

  return (
    <Container fluid style={{ width: '100%', padding: noPadding ? 0 : 16 }}>
      {formattedPosts.map((post, index) =>
        <Row key={index} style={{ width: '100%', margin: 0, boxSizing: 'border-box' }}>
          {post.map((data, index) =>
            <Card
              key={index}
              index={index}
              isActive={data.slug === currentItem ? true : false}
              duration={duration[currentPath]}
              data={data}
              noPadding={noPadding}
              onHover={onHover}/>,
          )}
        </Row>,
      )}

    </Container>
  )
}

Gallery.propTypes = {
  currentPath: PropTypes.string,
  posts: PropTypes.array,
}

export default Gallery
