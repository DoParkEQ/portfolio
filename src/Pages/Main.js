import React, { useState, useEffect } from 'react'
import { ProjectPage } from './index'
import { Route, useLocation } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import { createUseStyles } from 'react-jss'
import Footer from './footer'
import Navbar from '../components/Navbar'
import axios from 'axios'
import ItemCard from '../components/ItemCard'
const useStyles = createUseStyles((theme) => ({
  root: {},
  header: {
    margin: '0px 8px',
    '& img': {
      width: 40,
      height: 40,
    },
  },
  container: {
    display: 'flex',
    margin: '20px 16px',
  },
  footer: {
    margin: '32px 8px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    '& p': {
      ...theme.typography.caption,
      color: 'rgba(0,0,0,0.6)',
    },
    '& .favicon': {
      marginLeft: 8,
    },
    '& .copyright': {
      marginRight: 'auto',
    },
    '& img': {
      width: 32,
      height: 32,
      boxShadow: '0px 1px 4px rgba(12, 12, 13, 0.1)',
    },
  },
}))

const showNavbar = (pathname) => {
  const paths = ['/','/work','/side-project','/thoughts']
  return paths.includes(pathname)
}

const Main = () => {
  const classes = useStyles()
  const { pathname } = useLocation()
  const [posts, setPosts] = useState(null)
  
  useEffect(() => {
    axios.get(
      `https://notion-api.splitbee.io/v1/table/${process.env.REACT_APP_NOTION_ID}`,
    ).then(res => setPosts(res.data))    
  },[])
  
  return posts && (
    <div>
      <div className={classes.container}>
        <div className={classes.header}>
          <img src={logo} alt="logo" />
        </div>
      </div>
      {showNavbar(pathname) && 
        <div className={classes.container}>
          <Navbar/>
        </div>
      }
      <div className={classes.container}>
        {console.log(posts)}
        {posts.filter(({ category }) => category[0] === pathname).map((data, index) => <ItemCard key={index} {...data}/>)}
        <Route path={['/work/:slug', '/side-projects/:slug', '/thoughts/:slug']} component={ProjectPage}/>
      </div>
      <div className={classes.container}>
        <Footer />
      </div>
    </div>
  )
}

export default Main
