import React from 'react'

const Navbar = (props) => {
    console.log(props.theme)
  return (
    <div>
        
         <button onClick={()=>{
            props.setTheme('dark')

         }}>Change Change</button>
    </div>
  )
}

export default Navbar