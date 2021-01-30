import React, { useState, useEffect } from 'react'
import { ProjectPage } from './index'
import { Route, useLocation } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import { createUseStyles } from 'react-jss'
import Footer from './footer'
import Navbar from '../components/Navbar'
import axios from 'axios'
import Gallery from '../components/Gallery'



const useStyles = createUseStyles(() => ({
  root: {
    maxWidth: 1280,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  content: {
    flex: '1 0 auto',
  },
  header: {
    margin: '0px 8px',
    '& img': {
      width: 40,
      height: 40,
    },
  },
  container: {
    display: 'flex',
    padding: '20px 16px',
  },
  footerContainer: {
    flexShrink: 0,
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
    <>
      <div className={classes.root}>
        <div className={classes.content}>
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
            <Gallery posts={posts} currentPath={pathname}/>
          </div>
        </div>
        <Route path={['/work/:slug', '/side-projects/:slug', '/thoughts/:slug']} component={ProjectPage} />
        
        <div className={classes.footerContainer}>
          <div className={classes.footer}>
            <div className={classes.container}>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}



export default Main
