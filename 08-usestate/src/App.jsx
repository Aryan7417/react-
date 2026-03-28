import React, { useState } from 'react'

const App = () => {

  const [num ,setnum]=useState({user:'Sarthak',age:32})
  const BtnClicked=()=>{
    
    
  }
  return (
    <div>
      <h1>this is a heqdibng {num.user},{num.age}</h1>

      <button onClick={BtnClicked}>click</button>
    </div>
  )
}

export default App

44