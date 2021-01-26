import React from "react";
import { Route, Link, Switch, NavLink, useLocation } from "react-router-dom";

const ItemCard = ({ slug, title, category, status}) => {
  
  //console.log(status)
  return (
    <Link to={`${category[0]}/${slug}`}>
      <div>{title}</div>
    </Link>
  )
  
};

export default ItemCard;
