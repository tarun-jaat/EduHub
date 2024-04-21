import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import MessageContainer from "../../Components/MessageFrontend/Messagecontainer/MessageContainer";
import Sidebar from "../../Components/MessageFrontend/SIdebarmsg/Sidebar";
function Chat() {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className="w-full">
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
      <div>
      <section className="flex h-screen md:h-[550px] rounded-lg bg-white shadow-lg overflow-hidden">
    <Sidebar/>
    <MessageContainer/>
  </section>

      </div>
    </div>
  );
}

export default Chat;
