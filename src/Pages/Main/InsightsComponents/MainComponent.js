import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import ReactSelect from "react-select";
import { toast } from "react-hot-toast";
function MainComponent() {
  const [users, setUsers] = useState([]);
  const [selectedAccountType, setSelectedAccountType] = useState("Student");

  const accountTypeOptions = [
    { value: "Student", label: "Student" },
    { value: "Instructor", label: "Instructor" },
  ];

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/api/v1/allUsers/users"
        );
        const data = await response.json();
        const studentUsers = data.filter(
          (user) => user.accountType === selectedAccountType
        );
        setUsers(studentUsers);
        console.log(studentUsers);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, [selectedAccountType]);

  const handleDeleteUser = async (userId) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/v1/allUsers/users/${userId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete user");
        
        
      }

      const updatedUsers = users.filter((user) => user._id !== userId);
      setUsers(updatedUsers);
    } catch (error) {
        toast.dismiss("Failed to delete user")
      console.error("Error deleting user:", error);
    }
  };
  return (
    <div className="flex  flex-col justify-center items-center w-full top-9">
      <div className="flex w-full justify-center items-center">
        <input
          type="search"
          className="w-[40%] bg-secondary mt-10 bg-opacity-15 text-white border-2 border-secondary px-6 py-3 rounded-full"
          placeholder="Type to find user...."
        />
        <ReactSelect
          className="w-[200px] bg-transparent"
          options={accountTypeOptions}
          value={accountTypeOptions.find(
            (option) => option.value === selectedAccountType
          )}
          onChange={(e) => setSelectedAccountType(e.value)}
        />
      </div>

      <ul className="flex justify-between w-[80%] mt-[100px] border-2 p-3  border-richblack-200  text-richblack-50 rounded-xl">
        <li className="w-[200px] text-center">User ID</li>
        <li className="w-[45px] text-center">Image</li>
        <li className=" ">Name</li>
        <li className="text-center w-[200px] ">Email</li>

        <li className="ml-[35px] ">Join_Date</li>

        <li className="ml-[35px] ">Status</li>
        <li className="ml-[35px] ">Action</li>

        <li></li>
      </ul>
      {users.map((user) => (
        <li
          key={user._id}
          className="flex cursor-pointer items-center justify-between mt-[20px] text-left border-2 py-3 px-7 w-[1180px] border-richblack-200  text-richblack-5 gap-12 rounded-xl hover:bg-secondary hover:bg-opacity-15"
        >
          <span className="w-[200px]">{user._id}</span>
          <span className="w-[40px]">
            <img className="h-9  rounded-full" src={user.image} />
          </span>

          <span className="w-[100px]">{user.firstName}</span>
          <span>{user.email}</span>

          <span title={user.active}>{user.createdAt.slice(0, 10)}</span>
          <span className="w-[70px] text-start ml-12">
            {user.active ? (
              <span className="text-caribbeangreen-200 shadow-3xl">●</span>
            ) : (
              <span className="text-pink-500">●</span>
            )}
          </span>
          <span className="w-[50px] mr-[20px] text-white   text-center rounded-full">
            <MdDelete
              className="rounded-full p-2 bg-pink-400  text-[42px] hover:scale-90 hover:-rotate-12 "
              onClick={() => handleDeleteUser(user._id)}
            />
          </span>
        </li>
      ))}
    </div>
  );
}

export default MainComponent;
