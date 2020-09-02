import React from "react";
import styled from "styled-components";
import { WorkSection, SideProjectSection, ProjectPage } from "./index";
import { Route, Link, Switch, NavLink, useLocation } from "react-router-dom";
import linkedinIcon from "../Assets/Icons/linkedin.svg";
import githubIcon from "../Assets/Icons/github.svg";
import logo from "../Assets/Images/logo.png";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  root: {},
  header: {
    margin: "0px 8px",
    "& img": {
      width: 40,
      height: 40,
    },
  },
  container: {
    display: "flex",
    margin: "20px 16px",
  },
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
  footer: {
    margin: "32px 8px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    "& p": {
      ...theme.typography.caption,
      color: "rgba(0,0,0,0.6)",
    },
    "& .favicon": {
      marginLeft: 8,
    },
    "& .copyright": {
      marginRight: "auto",
    },
    "& img": {
      width: 32,
      height: 32,
      boxShadow: "0px 1px 4px rgba(12, 12, 13, 0.1)",
    },
  },
}));

const showNavbar = (pathname) => {
  const paths = ['/','/work','/side-project','/thoughts']
  return paths.includes(pathname);
}

const Main = () => {
  const classes = useStyles();
  const { pathname } = useLocation();
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.header}>
          <img src={logo} alt="logo" />
        </div>
      </div>
      {showNavbar(pathname) && 
        <div className={classes.container}>
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
        </div>
      }
      <div className={classes.container}>
        <Route path={["/", "/work"]} component={WorkSection} />
        <Route path="/side-project" component={SideProjectSection} />
        <Route path="/:project" component={ProjectPage}/>
      </div>
      <div className={classes.container}>
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
      </div>
    </div>
  );
};

export default Main;
