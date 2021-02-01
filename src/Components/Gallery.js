import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { Container,Row } from 'react-grid-system'
import WorkCard from './WorkCard'
import SideProjectCard from './SideProjectCard'
import ThoughtsCard from './ThoughtsCard'

const duration = 0.3

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
  console.log(filteredPosts,formattedPosts)

  const Card = getCard(currentPath)
  
  const onHover = (num) => {
    if(!isTransition && currentItem !== num){
      setCurrentItem(num)
      setIsTransition(true)
    }  
  }    

  useEffect(() => {
    if (isTransition) { 
      const timer = setTimeout(() => setIsTransition(false), duration * 1000)
      return () => clearTimeout(timer)    
    }
  },[isTransition])

  return (
    <Container fluid style={{ width: '100%', padding: 16 }}>
      {/* {formattedPosts.map(post => 
        post.map((data, index) =>
          <div onMouseOver={() => onHover(index)}>
            <Card key={index}
              isActive={index === currentItem ? true : false}
              duration={duration}
              data={data} />
          </div>)
      )} */}
      {formattedPosts.map(post => 
        <Row style={{ width: '100%', margin: 0, boxSizing: 'border-box' }}>
          {post.map((data, index) =>
            <Card
              index={index}
              isActive={data.id === currentItem ? true : false}
              duration={duration}
              data={data}
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
