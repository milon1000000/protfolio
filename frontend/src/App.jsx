import React from 'react'
// import { Route, Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'

function App() {
  return (
    <div>
      <Nav/>
       <Routes>
      <Route path='/' element={<Home/>}/>
     </Routes>
    </div>
   
  )
}

export default App
