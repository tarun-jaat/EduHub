import React from 'react'
import signupanimation from "../../Assests/Videos/signup2.gif"
import Signupform from '../../Components/Core/Auth/Signupform'
// import Loading from '../../Components/Common/Loading'
function Signup() {
  return (
    <div>
      {/* {Loading?(<Loading/>):( */}
    <div className='bg-primary w-full h-screen flex  justify-between  items-center p-32'>
      <div className=''>
      <img
        src={signupanimation}
        alt='animation'
      />
      </div>
      <div className=''>
        <Signupform/>
      </div>
    </div>
    </div>
  )
}

export default Signup