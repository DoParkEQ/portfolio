import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { MainPage } from './pages'

function App() {
  return (
    <>
      <Route path="/" component={MainPage} />
      <Redirect to="/work" />
    </>
    //adding 'exact' won't render sub routes
  )
}

export default App
