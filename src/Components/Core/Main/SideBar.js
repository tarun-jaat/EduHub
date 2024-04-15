import React, { useState } from 'react'
import { SideBarLinks } from '../../../Data/HomeNavLinks'
import { Link } from 'react-router-dom'
import Logo from "../../../Assests/Logos/LOGOLight.png"
import "./Sidebar.css"
function SideBar() {
    const [sidebarLink,setSideBarLink]=useState(0);

    const handleLogout = () => {
      localStorage.removeItem('token');
      window.location.href = '/login';
  };

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
            icon:"https://svgshare.com/i/14i3.svg"
        },
        {
            titleName:"Log out",
            icon:"https://svgshare.com/i/14i4.svg"
        }
    ]
  return (
    <div className='flex flex-col justify-center gap-5 bg-Voilet h-[100vh] '>
        <img src={Logo} alt="logo" />
        <div className='horizontal-line'></div>

        <div className=''>
        {SideBarLinks.map((link,index)=>(
            <Link className={`sidebar-link ${sidebarLink===index ? 'Side-bar-Link':'non'}`} to={link.path} onClick={()=>setSideBarLink(index)}>
                <img className='h-7' alt={link.title} src={link.icon}/>
                <p className='text-white font-inter text-[14px] font-medium leading-5' >{link.title}</p>
            </Link>
        ))}
        </div>
        <div className='horizontal-line'></div>
        <div>
        {OtherData.map((link,index)=>(
            <Link className='flex gap-3 items-center justify-start pl-16'>
            <p className='text-white font-inter font-medium text-[14px] leading-9 '>{link.titleName}</p>
            <img className='h-7 hover:rotate-90 transition-transform duration-200' alt={link.title} src={link.icon}/>
            </Link>
            ))}
        </div>
        
        <div className='horizontal-line'></div>

        <div className='pl-10 bg-primary '>
        {bottomData.map((link,index)=>(
            <Link className='flex justify-start items-center gap-8'>
            <img src={link.icon} alt={link.titleName}/>
            <p className='text-white font-inter font-medium text-[14px] leading-9'>{link.titleName}</p>
            </Link> 
        ))}
        </div> 
        <button onClick={handleLogout}>Logout</button>
        
    </div>
  )
}

export default SideBar