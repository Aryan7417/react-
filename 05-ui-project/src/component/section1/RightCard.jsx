import React from 'react'
import RightCardContent from './rightCardContent'

const RightCard = (props) => {
  return (
      <div className='h-full w-50 shrink-0 relative overflow-hidden rounded-4xl '>
        <img className='h-full w-full object-cover' src={props.img} alt=""/>

        <RightCardContent   id={props.id} tag={props.tag} color={props.color}/>
    </div>
  )
}

export default RightCard