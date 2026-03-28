import React from 'react'
import axios from 'axios'
import {useState} from 'react'

const App = () => {
  
  //------method1
  // async function getdata(){    
  //   const responce=await fetch('https:jsonplaceholder.typicode.com/todos/1')
  //   console.log(responce);
  // }
  // ----------method2---------
  // const getdata=async()=>{
  //   const responce=await fetch('https://jsonplaceholder.typicode.com/todos')
  //   const json=await responce.json()

  //   console.log(json)
  // }
//-----------------AXIOS     METHOD-----------------


  const [data, setData] = useState([])

   const getdata=async ()=>{

    const responce=await axios.get('https://picsum.photos/v2/list')

    setData(responce.data)
  }
  
  return (
    <div>
      <button onClick={getdata}>GET DATA </button>
      <div>
        {data.map(function(elem,idx){
          return <h3>hello,{elem.author}{idx}</h3>
        })}
        </div>
    </div>
  )
}

export default App