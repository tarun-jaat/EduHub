import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ChangeProfile from './ProfileComponent/ChangeProfile'
import DeleteAccount from "./ProfileComponent/DeleteAccount";
import EditProfile from "./ProfileComponent/EditProfile";
import UpdatePassword from "./ProfileComponent/UpdatePassword";
function Setting() {
    const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className="w-full bg-Voilet">
        <div className="w-full flex items-center h-16 bg-primary gap-7">
        <Link
          className="border-2 border-white rounded-full p-2 text-white"
          to={"/dashboard"}
        >
          <IoMdArrowRoundBack fontSize="18px" />
        </Link>
        <p className="ml-2 text-white font-semibold uppercase">
          . . . {currentPath}
        </p>
      </div>
      <div>
      <ChangeProfile />            {/* Change Profile Picture */}
      <EditProfile />                     {/* Profile */}
      <UpdatePassword />                  {/* Password */}
      <DeleteAccount />     

      </div>
    </div>
  )
}

export default Setting