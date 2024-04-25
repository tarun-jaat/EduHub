import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import Logo from "../../../Assests/Logos/LOGOLight.png"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useState } from "react"
import { login } from "../../../Services/Operations/authAPI"

function Signinform() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState(false);
  const { email, password } = formData;
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }
  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(login(email, password, navigate))
  }

  return (
    <form
      onSubmit={handleOnSubmit}
      className=" flex flex-col items-center p-8 w-[100%] bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border gap-8 border-hite"
    >
      <img  className='h-32 w-64' src={Logo} alt='logo'/>
      
      <label className="w-full">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5 focus:invalid:border-secondary focus:invalid:ring-secondary">
          Email Address <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="text"
          name="email"
          value={email}
          onChange={handleOnChange}
          placeholder="Enter email address"
          className="form-style w-full"
        />
      </label>
      <label className="w-full relative">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
          Password <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          onChange={handleOnChange}
          placeholder="Enter Password"
          className="form-style w-full !pr-10"
        />
        <span
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-[42px] z-[10] cursor-pointer"
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          )}
        </span>
        <Link to="/forgot-password">
          <p className="mt-1 ml-auto  w-fit text-xs text-blue-100">
            Forgot Password
          </p>
        </Link>
      </label>
      <p className="text-white">Don't Have An Account ? <Link className="text-secondary" to='/signup'>
          SignUp
        </Link></p>
      <button
        type="submit"
        className="w-full mt-6 rounded-[8px] bg-secondary py-[8px] px-[12px] font-bold text-white  hover:bg-transparent  border-2 border-secondary "
      >
        Sign In
      </button>
    </form>
  )
}

export default Signinform