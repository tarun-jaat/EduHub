import React, { useState, useEffect } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import Webcam from "react-webcam";
// import LobbyScreen from "../../Components/Core/LiveClasses/LobbyScreen";

function LiveClasses() {
  const location = useLocation();
  const currentPath = location.pathname;
  const videoConstraints = {
    width: 320,
    height: 320,
    facingMode: "user",
  };

  return (
    <div className="w-full ">
      <div className="w-full flex items-center h-16 bg-primary gap-7">
        <Link
          className="border-2 border-white rounded-full p-2 text-white"
          to={"/dashboard"}
        >
          <IoMdArrowRoundBack fontSize="18px" />
        </Link>
        <p className="text-white font-semibold uppercase">
          . . . {currentPath}
        </p>
      </div>
      <div className="">
        <div className="ml-[120px] mt-8">
        {/* <Webcam
            audio={true}
            height={320}
            width={320}
            videoConstraints={videoConstraints}
            
          ></Webcam> */}
          {/* <LobbyScreen/> */}
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default LiveClasses;
