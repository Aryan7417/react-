import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex py-4 px-8 bg-amber-600 justify-between'>
      <h2 className='text-xl font-bold'>Aryan</h2>
      <div className='flex gap-8'>
        <Link className='text-xl font-bold' to='/'>Home</Link>
        <Link className='text-xl font-bold' to='/About'>About</Link>
        <Link className='text-xl font-bold' to='/Contact'>Contact</Link>
         <Link className='text-xl font-bold' to='/Product'>Product</Link>
         <Link className='text-xl font-bold' to='Course'>Courses</Link>
      </div>
    </div>
  )
}

export default Navbar