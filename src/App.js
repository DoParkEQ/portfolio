import React from 'react'
import { Route } from 'react-router-dom'
import { MainPage } from './pages'

function App() {
  return (
    <Route path="/" component={MainPage} />
    //adding 'exact' won't render sub routes
  )
}

export default App
