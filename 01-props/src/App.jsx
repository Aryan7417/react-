import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>
    
     <Card user='Aryan' age={19} img='https://images.unsplash.com/photo-1771276152054-5aef40807513?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
     <Card user='Radhika' age={18} img='https://images.unsplash.com/photo-1771387454781-e8c0c7eed825?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
     <Card user='Khushi' age ={19 } img='https://plus.unsplash.com/premium_photo-1770246101715-d173eb120dbf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>            
      
    </div>
  )
}

export default App