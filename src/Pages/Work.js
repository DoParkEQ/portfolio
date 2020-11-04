import React from "react";
import { createUseStyles } from "react-jss";
import { Route, Link, useHistory, useLocation } from "react-router-dom";
import { ProjectPage } from "./index";

const useStyles = createUseStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    "& .itemContainer": {
      boxSizing: "border-box",
      height: 500,
      flex: 1,
      padding: "8px 8px",
      "& .item": {
        width: "auto",
        height: "100%",
        borderRadius: 10,
        background: theme.color.secondary[100],
        boxShadow: theme.shadow[10],
        transition: "all 0.4s",
        "&:hover": {
          boxShadow: theme.shadow[30],
          background: theme.color.secondary[50],
        },
      },
    },
    "@media screen and (max-width: 768px)": {
      "& .itemContainer": {
        flex: "0 0 100%",
      },
    },
  },
}));


const showGallery = (pathname) => {
  const paths = ['/','/work','/side-project','/thoughts']
  return paths.includes(pathname);
}

const Work = ({location}) => {
  const classes = useStyles();
  const history = useHistory();
  const { pathname } = location;
  
  const gotoPage = (pagelink) => {
    history.push(`/work${pagelink}`);
  }
  return (
    pathname === '/work' && (
      <>
      <div className={classes.root}>
        <div className="itemContainer" onClick={()=>gotoPage('/item1')}>
          <div className="item"></div>
        </div>

        <div className="itemContainer">
          <div className="item"></div>
        </div>

        <div className="itemContainer">
          <div className="item"></div>
        </div>
      </div>
      </>
    )
  );
};

export default Work;
