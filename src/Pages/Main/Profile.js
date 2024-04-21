import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { RiEditBoxLine } from "react-icons/ri"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { formattedDate } from "../../Services/formateDate"
import IconBtn from "../../Components/Common/IconBtn"
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom"
export default function MyProfile(){

  const { user } = useSelector((state) => state.profile)
  const navigate = useNavigate()
  const location = useLocation();
  const currentPath = location.pathname;


  return ( 

    <div className="w-full  bg-richblue-500" >
        <div className="w-full flex items-center h-16 bg-primary">
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
      <div className="flex ml-2 items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblue-700 p-8 ">
       
        <div className="flex items-center gap-x-4">
          <img src={user?.image} alt={`profile-${user?.firstName}`} className="aspect-square w-[78px] rounded-full object-cover"  />
          
          <div className="space-y-1">
            <p className="text-lg font-semibold text-richblack-5"> {user?.firstName + " " + user?.lastName} </p>
            <p className="text-sm text-richblack-300">{user?.email}</p>
          </div>
        </div>
        <IconBtn text="Edit" onclick={() => {navigate("/dashboard/settings")}} >
          <RiEditBoxLine />
        </IconBtn>

      </div>

      <div className="my-2 ml-2 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblue-700 p-8 px-12">
     
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-semibold text-richblack-5">About</p>
          <IconBtn text="Edit" onclick={() => {navigate("/dashboard/settings")}}>
            <RiEditBoxLine />
          </IconBtn>
        </div>
        <p className={`${user?.additionalDetails?.about ? "text-richblack-5" : "text-richblack-400"} text-sm font-medium`} >
          {user?.additionalDetails?.about ?? "Write Something About Yourself"}
        </p>

      </div>

      <div className="my-2 ml-2 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblue-700 p-8 px-12">
       
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-semibold text-richblack-5"> Personal Details </p>
          <IconBtn text="Edit" onclick={() => {navigate("/dashboard/settings")}} >
            <RiEditBoxLine />
          </IconBtn>
        </div>

        <div className="flex max-w-[500px] justify-between">

          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-sm text-richblack-300">First Name</p>
              <p className="text-sm font-medium text-richblack-5"> {user?.firstName} </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-300">Email</p>
              <p className="text-sm font-medium text-richblack-5"> {user?.email} </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-300">Gender</p>
              <p className="text-sm font-medium text-richblack-5"> {user?.additionalDetails?.gender ?? "Add Gender"} </p>
            </div>
          </div>

          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-sm text-richblack-300">Last Name</p>
              <p className="text-sm font-medium text-richblack-5"> {user?.lastName} </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-300">Phone Number</p>
              <p className="text-sm font-medium text-richblack-5"> {user?.additionalDetails?.contactNumber ?? "Add Contact Number"} </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-300">Date Of Birth</p>
              <p className="text-sm font-medium text-richblack-5">
                {formattedDate(user?.additionalDetails?.dateOfBirth) ??  "Add Date Of Birth"}   
              </p>
            </div>
          </div>
          
        </div>

      </div>

    </div>
  
)}