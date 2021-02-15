import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import { NotionRenderer } from 'react-notion'
import axios from 'axios'
import '../styles/notion.css'


const ProjectNotion = ({ match }) => {

  const { slug } = match.params 
  const [blockMap, setBlockMap] = useState(null)
  const [blogId, setBlogId] = useState(null)
    
  axios.get(
    `https://notion-api.splitbee.io/v1/table/${process.env.REACT_APP_NOTION_ID}`,
  ).then(res => {
    const blogList = res.data
    const blog = blogList.find(list => list.slug === slug)
    setBlogId(blog.id)
  })
  
  
  useEffect(() => {
    if (blogId !== null) {
      axios.get(
        `https://notion-api.splitbee.io/v1/page/${blogId}`,
      ).then(res => {
        console.log(res.data)
        setBlockMap(res.data)
      })
    }
  },[blogId])
  
  useEffect(() => {
    if (blockMap!==null) {
      const videos = document.body.querySelectorAll('.notion-text')
      // .forEach(item => 
      //   console.log(item.contentWindow.document.body.querySelectorAll('video'))
      //   )
      console.log(videos)
    }
  },[blockMap])
  
  return !!blockMap && (
    <div>
      <NotionRenderer fullPage blockMap={blockMap} />
    </div>
  )
}

ProjectNotion.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
  }).isRequired,
}

export default ProjectNotion
