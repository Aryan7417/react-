import React from 'react'

const card = (props) => {
    console.log(props)
  return (

    <div>
          <div className='cards'>
                        <img src={props.img}></img>
                        <h1>{props.user},{props.age}</h1>
                        <h5>introduction</h5>
                        <p>hii i am aryan yadav of the interent in robotixce and web development</p>
                        <button>view Pofile</button>  
            </div>
    </div>
  )
}

export default card