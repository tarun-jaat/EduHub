import React from "react";
import SearchBar from "../../Components/Core/Main/SearchBar";
import Cart from "../../Components/Core/Main/Cart";
import Notifications from "../../Components/Core/Main/Notifications";
import Profile from "../../Components/Core/Main/Profile";
function Dashboard() {
  return (
    <div className="flex w-[100%] bg-richblue-5">
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
    </div>
  );
}

export default Dashboard;
