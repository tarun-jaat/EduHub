import React from "react";
import { useSelector } from 'react-redux';

import SearchBar from "../../Components/Core/Main/SearchBar";
import Cart from "../../Components/Core/Main/Cart";
import Notifications from "../../Components/Core/Main/Notifications";
import Profile from "../../Components/Core/Main/Profile";
import UserBanner from "../../Components/Core/Main/UserBanner";
import ActiveCourses from "../../Components/Core/Main/ActiveCourses";
import UserDetails from "../../Components/Core/Main/UserDetails";
function Dashboard() {
  const { user } = useSelector((state) => state.profile)

  return (
    <div className=" w-[100%] bg-richblue-5">
      {/* <div className="w-[20%]">
        <SideBar />
      </div> */}
      <div className="w-[100%] pt-2 bg-primary h-16">
        <div className="flex justify-around">
          <SearchBar />
          <div className="w-[10%] flex justify-between items-center">
            <Cart />
            <Notifications />
          </div>
          <Profile/>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-8 w-[100%]">
        <UserBanner/>
      </div>
      <div className="details flex justify-between w-full">
      {user?.accountType === 'Student' &&(
    <>
      <ActiveCourses/>
      <UserDetails/>
    </>
  )}
      </div>
    </div>
  );
}

export default Dashboard;
