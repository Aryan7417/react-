import React from 'react'
import headers from "./header.module.css";


const header = () => {
  return (
    <div className={headers.header}>
        <h1>this is header</h1>
        <button>login</button>
    </div>
  )
}

export default header