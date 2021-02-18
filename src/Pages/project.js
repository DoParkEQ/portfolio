import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import { NotionRenderer } from 'react-notion'
import axios from 'axios'
import '../styles/notion.css'
import Loader from '../components/Loader'
import { createUseStyles } from 'react-jss'
import Modal from 'react-modal'
import { isMobile } from 'react-device-detect'


const useStyles = createUseStyles(() => ({
  root: {
    width: '100%',
    height: 'calc(100vh - 129px - 95px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'baseline',
  },
  button: {
    fontSize: 14,
    padding: 4,
    borderRadius: 4,
    border: 'none',
    marginBottom: 8,
    background: 'none',
    color: '#fff',
    fontWeight: 500,
  },
}))


const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    
  },
  content: {
    top: '50%',
    right: 'auto',
    bottom: 'auto',
    left: '50%',
    border: 'none',
    padding: 0,
    overflow: 'hidden',
    background: 'rgba(0,0,0,0)',
    borderRadius: 0,
    transform: 'translate(-50%, -50%)',
  },
}

const ProjectNotion = ({ match }) => {
  const classes = useStyles()
  const { slug } = match.params 
  const [blockMap, setBlockMap] = useState(null)
  const [blogId, setBlogId] = useState(null)
  const [openModal, setOpenModal] = useState(false)
  const [imgSrc, setImgSrc] = useState('')
  
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
        setBlockMap(res.data)
      })
    }
  }, [blogId])

  const getElement = e => {
    const x = e.clientX
    const y = e.clientY
    const element = document.elementFromPoint(x, y)
    if (element.tagName === 'IMG' && !isMobile) {
      setOpenModal(true)
      setImgSrc(element.src)
    }
  }
  const handleCloseModal = () => {
    setOpenModal(false)
  }
  return blockMap ? (
    <div onClick={e => getElement(e)} >
      <Modal
        isOpen={openModal}
        onRequestClose={handleCloseModal}
        style={customStyles}
      >
        <div className={classes.modalContainer}>
          <button className={classes.button} onClick={handleCloseModal}>close</button>
          <img style={{ borderRadius: 10, maxWidth: '80vw' }} src={imgSrc} />
        </div>
      </Modal>
      <NotionRenderer fullPage blockMap={blockMap}/>
    </div>
  ) : (
    <div className={classes.root}>
      <Loader/>
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
