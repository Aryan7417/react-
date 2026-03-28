import LeftConntent from './leftContent'
import RightConent from './rightConent'

const page1Content = (props) => {
  return (
    <div className='py-10 flex gap-10 items-center h-[80vh]'>
      <LeftConntent/>
      <RightConent users={props.users}/>
      
      
    </div>
  )
}

export default page1Content