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

const initId = '2bd3482024ac4198a19af7babe7590a7'

const Gallery = ({ posts, currentPath }) => {
    
  const [currentItem, setCurrentItem ] = useState(initId)
  const [isTransition, setIsTransition] = useState(false)
  const filteredPosts = posts.filter(({ category, status }) => category[0] === currentPath && status.includes('live'))
  const formattedPosts = formatPosts(filteredPosts, gridNum[currentPath])
  const { width } = useWindowDimensions()
  const minWidth = 576
  const noPadding = width < minWidth
  console.log(noPadding)
  const Card = getCard(currentPath)
  
  const onHover = (id) => {
    if(!isTransition && currentItem !== id){
      setCurrentItem(id)
      setIsTransition(true)
    }  
  }    

  useEffect(() => {
    if (isTransition) { 
      console.log(duration[currentPath])
      const timer = setTimeout(() => setIsTransition(false), duration[currentPath] * 1000)
      return () => clearTimeout(timer)    
    }
  },[isTransition])

  return (
    <Container fluid style={{ width: '100%', padding: noPadding ? 0 : 16 }}>
      {formattedPosts.map(post => 
        <Row style={{ width: '100%', margin: 0, boxSizing: 'border-box' }}>
          {post.map((data, index) =>
            <Card
              key={index}
              index={index}
              isActive={data.id === currentItem ? true : false}
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
