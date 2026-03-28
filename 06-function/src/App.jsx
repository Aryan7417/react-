import React from 'react'

const App = () => {

  const scroling=(elem)=>{

    if(elem>0){
      console.log("scrollin is bottion")
    }
    else{
      console.log("Scrolling is top")
    }
  }



  return (
    <div onWheel={(elem)=>{
      scroling(elem.deltaY)
    }}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  )
}

export default App