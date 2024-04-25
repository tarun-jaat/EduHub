import React, { useState } from 'react'
import { PiStudent } from "react-icons/pi"
import { PiChalkboardTeacher } from "react-icons/pi"
import { IoBookSharp } from "react-icons/io5"
import { GiReceiveMoney } from "react-icons/gi"
import { MdOutlineComputer } from "react-icons/md"
import { RiFeedbackFill } from "react-icons/ri"

function SideNav() {
    const SideNavLinks = [
        {
            titleName: "Users",
            icon: <PiStudent />,
            // onClick:settingnavi
        },
        
        {
            titleName: "Courses",
            icon: <IoBookSharp />,
            // onClick:settingnavigate
        },
        {
            titleName: "Finance",
            icon: <GiReceiveMoney />,
            // onClick:handleLogout
        },
        {
            titleName: "Technical",
            icon: <MdOutlineComputer />,
            // onClick:settingnavigate
        },
        {
            titleName: "Reviews",
            icon: <RiFeedbackFill />,
            // onClick:handleLogout
        }
    ]

    return (
        <div className="fixed p-10 border-2 divide-y-[1px] divide-richblue-300 border-richblack-50 left-0 top-[20%] font-semibold h-fit w-fit bg-transparent text-white text-start rounded-xl ">
            {SideNavLinks.map((link, index) => (
                <div key={index} className="flex cursor-pointer flex-col items-start mb-6">
                    {/* <p className="text-3xl mb-2"><link.icon/></p> */}
                    <span className='hover:font-underline' >{link.titleName}</span>
                    <div className="w-full h-px bg-gray-600"></div>
                </div>
            ))}
        </div>
    )
}

export default SideNav