import React from 'react'

const App = () => {
  // localStorage.setItem('aryan' , '23')
  // // localStorage.setItem('age','19')
  // const age=localStorage.getItem('age')
  // const user=localStorage.getItem('aryan')
  // console.log(age,aryan)

  // const user={
  //   username:'ARyan Yadav',
  //   age:20,
  //   city:'Mainpuri'
  // }

  // localStorage.setItem('user',JSON.stringify(user))

  // const user=JSON.parse(localStorage.getItem('user'))
  // console.log(user)

  localStorage.clear()



  localStorage.removeItem('aryan')
  


  return (
    <div>
      App
    </div>
  )
}

export default App