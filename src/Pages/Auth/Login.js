import React from 'react'
import signinanimation from "../../Assests/Videos/signin3.gif"
import Signinform  from "../../Components/Core/Auth/Signinform"
function Login() {
  return (
    
        <div className='bg-primary w-full h-screen flex  justify-between  items-center p-32'>
      <div className='w-[50%] relative z-10 '>
      <img
        src={signinanimation}
        alt='animation'
      />
      </div>
      <div className='w-[50%] relative'>
        <Signinform/>
      </div>
    </div>

  )
}

export default Login