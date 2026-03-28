import React,{useEffect, useState} from 'react'
import axios from 'axios'

const App = () => {
 
  const [userdata, setUserdata] = useState([])

  const [index, setIndex] = useState(1)
  
  const getData=async()=>{
    const responce=await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`)
    setUserdata(responce.data);
    console.log(responce.data)

  }

  let printuserData=<h3>No User Availabale</h3>

  if(userdata.length>0){
    printuserData=userdata.map(function(elem,idx){
      return <div>
        <a href={elem.url}>
        <div className='h-40 w-44 bg-yellow-100 object-cover rounded-4xl'>
        <img className='h-full w-full object-cover ' src={elem.download_url} alt />
      </div>
      <h1 className='font-bold text-xl'>{elem.author}</h1>
      </a>
      </div>
    })

  }
  useEffect(function(){
    getData()
  },[index])

  return (
    <div >


     <div className='flex flex-wrap gap-4 object-cover '>

     {printuserData}

     <div>
      <button className='p-5 m-10 bg-amber-600 text-center font-bold cursor-pointer active:scale-95 text-black'
      onClick={()=>{
        if(index>1){
          setIndex(index-1)
        }
      }}
      >previos
      </button>

      <h3>Page {index}</h3>
      <button className='p-5 m-10 bg-amber-600 text-center font-bold cursor-pointer active:scale-95 text-black '
      onClick={()=>{
        setIndex(index+1)
      }}
      >Next
      </button>
     </div>

      <h1 className='bg-red-600  object-cover fixed '>{index}</h1>
     </div >


    </div>
  )
}

export default App