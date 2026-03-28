import { useState } from 'react'
import React from 'react'
import Navbar from './component/Navbar'

const App = () => {
  const [theme, setTheme] = useState('light')
  return (
    <div>
      <h1>Theme is {theme} </h1>
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App