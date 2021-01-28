import React, { useEffect, useState } from 'react'
import { Container } from 'react-grid-system'
import WorkCard from './WorkCard'
import SideProjectCard from './SideProjectCard'
import ThoughtsCard from './ThoughtsCard'

const duration = 0.3

const getCard = (type) => ({
  '/work': WorkCard, 
  '/side-project': SideProjectCard,
  '/thoughts': ThoughtsCard,    
}[type])


const Gallery = ({ posts, currentPath }) => {
    
  const [currentItem, setCurrentItem ] = useState(0)
  const [isTransition, setIsTransition] = useState(false)
  const filteredPosts = posts.filter(({ category }) => category[0] === currentPath)
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
    <Container fluid style={{ width: '100%', padding: 0 }}>
      {filteredPosts.map((data, index) => <div onMouseOver={() => onHover(index)}><Card key={index} isActive={index === currentItem ? true : false} duration={duration} data={data} /></div>)}
    </Container>
  )
}

export default Gallery
