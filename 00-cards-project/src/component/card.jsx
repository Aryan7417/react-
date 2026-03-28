import React from 'react'
import {Bookmark} from 'lucide-react'

const card = (props) => {

    console.log(props.tag2)
    console.log(props.pay)

  
  return (
    

      <div className="card">
       
        <div className="top">
          <img src={props.brandLogo}></img>
          <button>Save <Bookmark /></button> 
        </div>
        
        <div className='center'>
          <h3> {props.compney} <span>  {props.datePosted} </span></h3>
          <h2> {props.post} </h2>
          <div className='tag'>
            <h4>{props.tag2}</h4>
            <h4>{props.tag}</h4>
            </div>

        </div>
        
        <div className="bottom">
          <div>
            
              <h3>${props.pay}/per month</h3>
              <p>{props.location}</p>
            
          </div>
          <button>Apply Now</button>

        </div>
      
      
      </div>
    
    






  )
}

export default card