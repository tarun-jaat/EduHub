import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Insights() {
    const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className='w-full'>
        <div className="w-full flex items-center  px-6 h-16 bg-primary gap-7">
        <Link
          className="border-2 border-white  rounded-full p-2 text-white"
          to={"/dashboard"}
        >
          <IoMdArrowRoundBack fontSize="18px" />
        </Link>
        <p className="text-white font-semibold uppercase">
          . . . {currentPath}
        </p>
      </div>
    </div>
  )
}

export default Insights