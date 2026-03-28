import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div>
        <Link className='text-xl font-bold flex gap-10 py-4 justify-center' to='/Product/menCollection'>Mens's Collection</Link>
        <Link className='text-xl font-bold flex gap-10 py-4 justify-center' to='/Product/WomenCollection'>Women's Colection</Link>
        <Link className='text-xl font-bold flex gap-10 py-4 justify-center' to='/Product/kidsCollection'>kid's Colllection</Link>
      </div>
        
        <Outlet/>
    </div>
  )
}

export default Product