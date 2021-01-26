import React from 'react'
import { createUseStyles } from 'react-jss'
import linkedinIcon from '../assets/icons/linkedin.svg'
import githubIcon from '../assets/icons/github.svg'

const useStyles = createUseStyles((theme) => ({
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
const Footer = () => {
  const classes = useStyles()
  return (
    <div className={classes.footer}>
      <div className="copyright">
        <p>
            🖍️ and 👨‍💻 by Do Park
          <br />© 2020
        </p>
      </div>
      <a href="https://www.linkedin.com/in/do-park/">
        <div className="favicon">
          <img src={linkedinIcon} alt="linkedin" />
        </div>
      </a>
      <a href="https://github.com/DoParkEQ">
        <div className="favicon">
          <img src={githubIcon} alt="github" />
        </div>
      </a>
    </div>
  )
}

export default Footer
