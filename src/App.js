import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { MainPage } from "./Pages";

function App() {
  return (
    <Route path="/" component={MainPage} />
    //adding 'exact' won't render sub routes
  );
}

export default App;
