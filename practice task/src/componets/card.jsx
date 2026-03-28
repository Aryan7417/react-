import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { motion, scale } from "motion/react"




const card = ({data , reference}) => {
  return (
    <motion.div drag  dragConstraints={reference}
    whileDrag={{scale:1.2}}
    dragElastic={0.1}
    dragTransition={{bounceStiffness:100,bounceDamping:10}}
    
    
    className='relative w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white p-10 overflow-hidden'>
        <FaRegFileAlt/>
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.description}</p>
        <div className='footer absolute bottom-0  w-full  px-8 left-0'>
            <div className='flex items-center justify-between py-4 mb-5'>
                <h5>{data.fileSize}</h5>
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center py-3 mb-3 justify-center'>
                  {data.close ? <IoMdClose/>:<MdOutlineFileDownload size=".8em" color='#000'/>}
                
                </span>
                

            </div>
              {data.tag.isOpen && (
                <div className={`tag w-full py-4  ${data.tag.tagColor ==="blue" ? "bg-blue-400" : "bg-green-500"} rounded-[60px] flex items-center justify-center`}>
              <h3 className='tag text-sm font-semibold '>Download Now</h3>
            </div>
            )
          }
              
            
          
            
        </div>
    </motion.div>
  )
}

export default card