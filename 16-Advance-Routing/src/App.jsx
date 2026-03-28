import React from 'react'
import Footer from './componet/Footer'
import Navbar from './componet/Navbar'
import Home from './files/Home'
import About from './files/About'
import Product from './files/Product'
import Contact from './files/Contact'
import { Route, Routes } from 'react-router-dom'
import NOTfount from './files/NotFount'
import Men from './files/Men'
import Women from './files/Women'
import Kids from './files/Kids'
import Course from './files/Course'
import CourseDetail from './files/CourseDetail'
const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Course' element={<Course />} />
        <Route path='/Course/: ' element={<CourseDetail/>}/>
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Product' element={<Product />}>
        <Route path='menCollection' element={<Men />} />
          <Route path='womenCollection' element={<Women />} />
          <Route path='KidsCollection' element={<Kids />} />
        </Route>

        <Route path='*' element={<NOTfount />} />
      </Routes>




      <Footer />
    </div>
  )
}

export default App