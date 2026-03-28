import React from 'react'
import { useEffect } from 'react'
import {useState} from 'react'

const App = () => {

  const [num, setnum] = useState(0)
  const [num2, setnum2] = useState(190)

  useEffect(function(){
    console.log("USeeffecct is runniong ")
  },[num])
  return (
    <div>
      <h1>th is num :{num}</h1>
      <h2>Thi is num2 :{num2}</h2>
      <button onMouseEnter={()=>{
        setnum(num+1)
      }}

      onMouseLeave={()=>{
        setnum2(num2+10)
      }}
      >Click</button>
    </div>
  )
}

export default App