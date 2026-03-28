import React from 'react'
import Section1 from './component/section1/section1'
import Section2 from'./component/section2/section2'

const App = () => {

  const users=[

    {
      img:'https://images.unsplash.com/photo-1507206130118-b5907f817163?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmtpbmclMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D',
      intro:'',
      tag:'Satisfied',
      color:'gray'
    },
    {
        img:'https://images.unsplash.com/photo-1573495782715-34f01d853a77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8',
        intro:'',
        tag:'underserved',
        color:'green'
    },
    {
        img:'https://images.unsplash.com/photo-1598987829514-8076f2f562bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
        intro:'',
        tag:'undercover',
        color:'blue'
    }
    ,{
      img:'https://images.unsplash.com/photo-1573703748442-3ba6f4203172?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D',
      intro:'',
      tag:'compariability',
      color:'pink'
    }
    ,{
      img:'https://plus.unsplash.com/premium_photo-1661405673177-580243935891?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8',
      intro:'',
      tag:'userinterface',
      color:'red'
    }
  ]  


  return (
    <div>
      <Section1 users={users}/>
      <Section2/>


    </div>
  )
}

export default App