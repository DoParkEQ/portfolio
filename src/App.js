import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route } from 'react-router-dom';
import MainPage from './Pages/Main';


function App() {
  return (
    <Route exact path='/' component={MainPage}/>
  );
}

export default App;
