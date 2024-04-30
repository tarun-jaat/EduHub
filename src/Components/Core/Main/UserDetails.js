import React,{ useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import lottie from 'lottie-web';

// import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import ProgressBar from "@ramonak/react-progress-bar";
import { FaRankingStar } from "react-icons/fa6";
import { GiProgression } from "react-icons/gi";
import { FaHotjar } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdAssignmentTurnedIn } from "react-icons/md";

function UserDetails() {
  const { user } = useSelector((state) => state.profile);
  const animationContainer = useRef(null);


  const OtherData = [
    {
      titleName: "Total Xp",
      icon:<GiProgression/>,
      data:"0"
    },
    {
      titleName: "Streak",
      icon:<FaHotjar/>,
      data:"0"

    },
    {
        titleName: "Course Completed",
        icon:<FaRegEdit/>,
        data:"0"
  
      },
      {
        titleName: "Assigment ",
        icon:<MdAssignmentTurnedIn/>,
        data:"0"
  
      },
  ]
  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../Animations/Background2.json'), 
    });
  }, [2000]);


  return (
    <div className="relative border-2 bg-secondary bg-opacity-50 mt-10 mr-6 w-[500px] rounded-xl border-richblue-700 px-2 py-4">
              {/* <div  className='absolute' ref={animationContainer}></div> */}

      <div className="flex justify-berween gap-5 items-center ">
        <img className="rounded-full h-16" src={user.image} alt={user.firstName} />
        <div className="">
          <p className="text-2xl text-richblue-600 font-bold ">{user.firstName}</p>
          <div className="flex justify-start gap-4 items-center">
            <FaRankingStar className="text-xl" />
            <p>Level 0</p>
            <ProgressBar height="10px" width="80px" completed={5} bgColor="#3AD3CD" labelColor="#e8090" />
          </div>
        </div>
      </div>
      <hr class="my-4 border-b border-richblack-300" />
      <div className="flex flex-wrap gap-1 justify-center items-center">
      {OtherData.map((link,index)=>(
        <div className="border flex flex-col justify-center items-center gap-2 rounded-md border-richblack-300 text-center w-[150px]" key={index}>
            <p className="text-4xl text-richblue-600 font-bold ">{link.data}</p>
            <p className="text-3xl border-2 border-pink-800 rounded-full text-pink-600 font-bold w-[50px] p-2">{link.icon}</p>

            <p className="text-md text-richblue-600 font-semibold ">{link.titleName}</p>
        </div>
      ))}
      </div>
    </div>
  );
}

export default UserDetails;
