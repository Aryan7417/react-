import React from 'react'
import HeroText from './heroText'
import RightCard from './RightCard'

const rightConent = (props) => {
  console.log(props.users)
  return (
    <div id="right" className='h-100 w-200  flex flex-nowrap gap-8 overflow-auto p-4  m-3 '>
      {props.users.map(function(elem ,idx){
        return<RightCard key={idx } id={idx} img={elem.img} tag={elem.tag} color={elem.color}/>
      })}
      
      
        
       
    </div>
  )
}

export default rightConent