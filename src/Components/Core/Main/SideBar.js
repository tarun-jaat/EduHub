import React, { useEffect } from 'react';
import { toast } from "react-hot-toast"
import { setToken } from "../../../Slice/authSlice"
import { setUser } from "../../../Slice/profileSlice"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { SideBarLinks } from '../../../Data/HomeNavLinks'
import { Link } from 'react-router-dom'
import Logo from "../../../Assests/Logos/LOGOLight.png"
import "./Sidebar.css"
import { useLocation } from 'react-router-dom';
// import { logout  } from '../../../Services/Operations/authAPI'



function SideBar() {
    const handleBeforeUnload = (event) => {
      // Perform some cleanup tasks here
      console.log('Performing cleanup tasks...');
    };



  const dispatch = useDispatch();
  const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;
    const handleLogout = () => {
      handleBeforeUnload()
      dispatch(setToken(null))
    dispatch(setUser(null))
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    toast.success("Logged Out")
    navigate("/")
  };

  const settingnavigate=()=>{
    window.location.href="/dashboard/settings"
  }

    const OtherData = [
        {
          titleName: "Your Courses",
          icon:"https://svgshare.com/i/14gg.svg"
        },
        {
          titleName: "Insights",
          icon:"https://svgshare.com/i/14gg.svg"

        },
      ]
    const bottomData=[
        {
            titleName:"Setting",
            icon:"https://svgshare.com/i/14i3.svg",
            onClick:settingnavigate

        },
        {
            titleName:"Log out",
            icon:"https://svgshare.com/i/14i4.svg",
            onClick:handleLogout
        }
    ]
  return (
    <div className='flex flex-col justify-center gap-5 bg-primary h-[100vh] w-[300px] '>
        <img src={Logo} alt="logo" />
        <div className='horizontal-line'></div>

        <div className=''>
        {SideBarLinks.map((link,index)=>(
            <Link key={index} className={`sidebar-link ${currentPath === link.path? 'Side-bar-Link':'non'}`} to={link.path} >
                <img className='h-7' alt={link.title} src={link.icon}/>
                <p className='text-white font-inter text-[14px] font-medium leading-5' >{link.title}</p>
            </Link>
        ))}
        </div>
        <div className='horizontal-line'></div>
        <div>
        {OtherData.map((link,index)=>(
            <Link key={index} className='flex gap-3 items-center justify-start pl-16'>
            <p className='text-white font-inter font-medium text-[14px] leading-9 '>{link.titleName}</p>
            <img className='h-7 hover:rotate-90 transition-transform duration-200' alt={link.title} src={link.icon}/>
            </Link>
            ))}
        </div>
        
        <div className='horizontal-line'></div>

        <div className='pl-10 bg-Voilet '>
        {bottomData.map((link,index)=>(
            <Link key={index}  onClick={() => link.onClick()} className='flex justify-start items-center gap-8'>
            <img src={link.icon} alt={link.titleName}/>
            <p className='text-white font-inter font-medium text-[14px] leading-9'>{link.titleName}</p>
            </Link> 
        ))}
        </div> 
        
    </div>
  )
}

export default SideBar