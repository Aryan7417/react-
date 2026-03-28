import React from 'react'
import Card from './card'
import { useRef } from 'react';

const forground = () => {
const ref=useRef(null);


  const data = [
  {
    description: "Using context for the description",
    fileSize: "9.6 MB",
    close: true,
    tag: {
      isOpen: false,
      tagTitle: "Download Now",
      tagColor: "green",
    },
  },
  {
    description: "React project source files",
    fileSize: "5.2 MB",
    close: false,
    tag: {
      isOpen: true,
      tagTitle: "Download",
      tagColor: "blue",
    },
  },
  {
    description: "Presentation slides for hackathon",
    fileSize: "2.1 MB",
    close: true,
    tag: {
      isOpen: false,
      tagTitle: "Closed",
      tagColor: "green",
    },
  },
  {
    description: "Images and assets pack",
    fileSize: "7.4 MB",
    close: false,
    tag: {
      isOpen: true,
      tagTitle: "Get Files",
      tagColor: "blue",
    },
  },
];
 
  return (
    <div ref={ref} className='fixed top-0 left-0 z-3 w-full h-full flex gap-5 flex-wrap '>
        {data.map((item,index)=>(
          <Card data={item} reference={ref}  />
        ))}
        
        

      </div>
  )
}

export default forground