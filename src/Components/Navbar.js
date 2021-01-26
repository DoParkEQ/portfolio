import React from 'react';
import { createUseStyles } from 'react-jss'
import { Route, Link, Switch, NavLink, useLocation } from "react-router-dom";

const useStyles = createUseStyles((theme) => ({
    navigation: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        margin: "32px 8px",
        "& h3": {
          margin: "0px 0px",
          width: "100%",
          fontWeight: 800,
          background: `linear-gradient(
              217deg,
              rgba(255, 214, 166, 0.8),
              rgba(255, 0, 0, 0) 70.71%
            ),
            linear-gradient(
              127deg,
              rgba(167, 153, 255, 0.8),
              rgba(0, 255, 0, 0) 70.71%
            ),
            linear-gradient(
              336deg,
              rgba(152, 218, 255, 0.8),
              rgba(0, 0, 255, 0) 70.71%
            )`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        },
        "& .navlinks": {
          "& a": {
            ...theme.typography.subtitle,
            display: "block",
            textAlign: "right",
            color: "rgba(0, 0, 0, 0.5)",
            textDecoration: "none",
            "&:hover": {
              color: "rgba(0, 0, 0, 0.7)",
            },
            "&.active": {
              fontWeight: 600,
              color: "rgba(0, 94, 128, 0.8)",
            },
          },
        },
      },
}))
const Navbar = () => {
    const classes = useStyles();
    return (
        <div className={classes.navigation}>
            <div className="logo">
              <h3>Do Park.</h3>
            </div>
            <div className="navlinks">
              <NavLink
                className="navlink"
                to="/work"
                activeClassName="active"
              >
                Work
              </NavLink>
              <NavLink
                className="navlink"
                to="/side-project"
                activeClassName="active"
              >
                Side projects
              </NavLink>
              <NavLink
                className="navlink"
                to="/thoughts"
                activeClassName="active"
              >
                Thoughts
              </NavLink>
            </div>
          </div>
    );
};

export default Navbar;