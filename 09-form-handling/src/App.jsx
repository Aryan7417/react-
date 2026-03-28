import React from 'react'
import { useState } from 'react'
const App = () => {
  const [tital , setTital] = useState('')
  const submit=(e)=>{
    e.preventDefault()
    console.log('form submi by ',tital)
    setTital('')
  }
  


  return (
    <div>
      <form onSubmit={(e)=>{
      submit(e)
      }}>

      <input
       type="text"
       placeholder='enter your name' 
       value={tital}
       onChange={(e)=>{
        setTital(e.target.value)
       }}
      
       >
      </input>
      <button>Submit</button>
      </form>
    </div>
  )
}

export default App    