import React from 'react';
import { Container } from 'react-grid-system';
import WorkCard from './WorkCard';
import SideProjectCard from './SideProjectCard'
import ThoughtsCard from './ThoughtsCard';


const getCard = (type) => ({
    '/work': WorkCard, 
    '/side-project': SideProjectCard,
    '/thoughts': ThoughtsCard,    
}[type])


const Gallery = ({ posts, currentPath }) => {

    const filteredPosts = posts.filter(({ category }) => category[0] === currentPath)
    const Card = getCard(currentPath)
    return (
        <Container fluid style={{ width: '100%', padding: 0 }}>
            {filteredPosts.map((data, index) => <Card key={index} {...data} />)}
        </Container>
    );
};

export default Gallery;