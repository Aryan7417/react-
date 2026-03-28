import React from 'react'
import {Link} from 'react-router-dom'

const navbar = () => {
  return (
   
         <div class='nav'>
        <h3>Aryan</h3>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Contact'>Contact</Link>
        
      </div>
      </div>
    
  )
}

export default navbar