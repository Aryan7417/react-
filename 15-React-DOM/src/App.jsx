import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Files/Home'
import About from './Files/About'
import Contact from './Files/Contact'

import Navbar from './components/Navbar'

const App = () => {
  return (
    <div >
      <Navbar/>  
      <Routes class='bsdk'>
        <Route path='/' element={<Home/>}  />
        <Route path='/About' element={<About/>} />
        <Route path='/Contact' element={<Contact/>}  />
       
      </Routes>
      
      
    </div>
  )
}

export default App