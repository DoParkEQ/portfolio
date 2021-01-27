import React, { useState } from 'react'
import { Container } from 'react-grid-system'
import WorkCard from './WorkCard'
import SideProjectCard from './SideProjectCard'
import ThoughtsCard from './ThoughtsCard'


const getCard = (type) => ({
  '/work': WorkCard, 
  '/side-project': SideProjectCard,
  '/thoughts': ThoughtsCard,    
}[type])


const Gallery = ({ posts, currentPath }) => {

  const [currentItem, setCurrentItem ] = useState(0)
  const filteredPosts = posts.filter(({ category }) => category[0] === currentPath)
  const Card = getCard(currentPath)
  const onHover = (num) => {
    setCurrentItem(num)
  }    

  return (
    <Container fluid style={{ width: '100%', padding: 0 }}>
      {filteredPosts.map((data, index) => <div onMouseOver={()=>onHover(index)}><Card key={index} isActive={index === currentItem ? true : false} data={data} /></div>)}
    </Container>
  )
}

export default Gallery
