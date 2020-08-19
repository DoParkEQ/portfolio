import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",

    "& .itemContainer": {
      boxSizing: "border-box",
      height: 250,
      flex: "1 1 32%",
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

const SideProjects = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className="itemContainer">
        <div className="item"></div>
      </div>
      <div className="itemContainer">
        <div className="item"></div>
      </div>
      <div className="itemContainer">
        <div className="item"></div>
      </div>
      <div className="itemContainer">
        <div className="item"></div>
      </div>
      <div className="itemContainer">
        <div className="item"></div>
      </div>
    </div>
  );
};

export default SideProjects;
