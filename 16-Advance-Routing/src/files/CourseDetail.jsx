import React from 'react'
import { useParams } from 'react-router-dom'

const courseDetail = () => {
    const parms= useParams()
    console.log(parms)
  return (
    <div>
        <h1>{parms.CourseId}</h1>
    </div>
  )
}

export default courseDetail