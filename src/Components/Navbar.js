import React from 'react'
import { createUseStyles } from 'react-jss'
import { NavLink } from 'react-router-dom'

const useStyles = createUseStyles((theme) => ({
  navlink: {
    margin: 0,
    padding: 0,
    fontFamily: 'Lato',
    fontSize: 14,
  },
  navigation: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    '& h3': {
      filter: 'hue-rotate(0%)',
      margin: '0px 0px',
      width: '100%',
      fontWeight: 900,
      background: `linear-gradient(
              217deg,
              rgba(255, 182, 139, 1.0),
              rgba(255, 0, 0, 0) 70.71%
            ),
            linear-gradient(
              127deg,
              rgba(167, 153, 255, 1.0),
              rgba(0, 255, 0, 0) 70.71%
            ),
            linear-gradient(
              336deg,
              rgba(73, 200, 207, 1.0),
              rgba(0, 0, 255, 0) 70.71%
            )`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      animation: '$hue-rotate 3s infinite',
      transitionTimingFunction: 'ease-in-out',
    },
    '& .navlinks': {
      display: 'flex',
      flexDirection: 'column',
      margin: 0,
      '& a': {
        ...theme.typography.body,
        marginBlockStart: '0.5em',
        marginBlockEnd: '0.5em',
        textAlign: 'right',
        color: 'rgba(0, 0, 0, 0.5)',
        textDecoration: 'none',
        '&:hover': {
          color: 'rgba(0, 0, 0, 0.7)',
        },
        '&.active': {
          color: theme.color.secondary[900],
        },
      },
    },
  },
  '@keyframes hue-rotate': {
    '0%': { filter: 'hue-rotate(360deg)' },
    '50%': { filter: 'hue-rotate(320deg)' },
    '100%': { filter: 'hue-rotate(360deg)' },
  },
}))



const Navbar = () => {
  const classes = useStyles()
  return (
    <div className={classes.navigation}>
      <div className="logo">
        <h3>Do Park.</h3>
      </div>
      <div className="navlinks">
        <NavLink
          className={classes.navlink}
          to="/work"
          activeClassName="active"
        >
                Work
        </NavLink>
        <NavLink
          className={classes.navlink}
          to="/side-project"
          activeClassName="active"
        >
                Side projects
        </NavLink>
        {/* <NavLink
          className={classes.navlink}
          to="/thoughts"
          activeClassName="active"
        >
                Thoughts
        </NavLink> */}
      </div>
    </div>
  )
}

export default Navbar
