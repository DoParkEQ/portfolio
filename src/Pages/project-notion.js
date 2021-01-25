import React, {useState, useEffect} from 'react';
import { NotionRenderer } from 'react-notion'
import axios from 'axios'
import "react-notion/src/styles.css";


const ProjectNotion = ({ match }) => {

    const { slug } = match.params 

    const [blockMap, setBlockMap] = useState(null)
    const [blogId, setBlogId] = useState(null)
    
    axios.get(
      "https://notion-api.splitbee.io/v1/table/4a900f47ce9143b59695cf25d8461893"
        ).then(res => {
          const blogList = res.data
          const blog = blogList.find(list => list.slug === slug)
          setBlogId(blog.id)
        })
  
  
    useEffect(() => {
      if (blogId !== null) {
        axios.get(
          `https://notion-api.splitbee.io/v1/page/${blogId}`
      ).then(res => {
        setBlockMap(res.data)
      })
      }
    },[blogId])
  
  
    return blockMap !== null && (
        <div>
           <NotionRenderer fullPage blockMap={blockMap} />
      </div>
    )
};

export default ProjectNotion;