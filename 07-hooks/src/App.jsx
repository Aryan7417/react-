import React from 'react'
import { useState } from 'react'

const App = () => {


  const [num, setnum] = useState(0)
  function Increasenum(){
    setnum(num+1)
  }
  function Decreasenum(){
    setnum(num-1)
    
  }
  function jum5(){
    setnum(num+5)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={Decreasenum}>Decrease</button>
      <button onClick={Increasenum}>Increase</button>
      <button onClick={jum5}>Increase 5</button>
    </div>
  )
}

export default App