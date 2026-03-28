import React from 'react'

const rightCardContent = (props) => {
    console.log(props.tag)
  return (
    <div>
        <div className='absolute top-0 left-0 h-full w-full bg-a p-6 flex flex-col justify-between'>
            <h2 className='bg-white rounded-full h-7 w-7 flex justify-center items-center text-2xl t'>{props.id+1}</h2>
            <div>
                <p className=' leading-normal text-yellow-600 text-xs '>Lorem, ipsum dolor sit amet consectetur  elit. Odit molestias culpa nisi ea.
                </p>
                                <div className='flex justify-between'>
                    <button style={{background:props.color}} className=' font-semibold px-8 py-3 rounded-full'>{props.tag}</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default rightCardContent

