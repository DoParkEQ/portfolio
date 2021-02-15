import { useEffect, useState } from 'react'

export const useImage = (url) => {
    
  const [imgURL, setImgURL] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadImage = (url) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image()
        loadImg.src = url
        loadImg.onload = () => resolve(url)
        loadImg.onerror = (err) => reject(err)
      })
    }
    
    loadImage(url)
      .then((res) => {
        setIsLoading(false)
        setImgURL(res)
      })
      .catch((err) => console.log('Failed to load images', err))
  }, [])
    
  return [isLoading, imgURL] 
}

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())
  
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }
  
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  return windowDimensions
}
  
const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}
