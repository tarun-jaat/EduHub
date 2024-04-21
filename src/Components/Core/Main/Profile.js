import { useRef, useState } from "react"
import { AiOutlineCaretDown } from "react-icons/ai"
import { VscDashboard, VscSignOut } from "react-icons/vsc"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

// import useOnClickOutside from "../../../hooks/useOnClickOutside"
// import { logout } from "../../../Services/Operations/authAPI"
import { ProfileDropDown } from "../../../Data/ProfileDropDown"

export default function Profile() {
  const { user } = useSelector((state) => state.profile)
  // console.log(user.accountType)
  // const dispatch = useDispatch()
  // const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  // useOnClickOutside(ref, () => setOpen(false))
  // if(!user) return null

  const toggleOpen = () => {
    setOpen(!open);
}
  return (
    <button className="relative border-2 p-[3px] rounded-full bg-richblue-5 border-white" onClick={toggleOpen}>
      <div className="flex items-center gap-x-1">
        <img src={user?.image} alt={`profile-${user?.firstName}`}  className="aspect-square w-[30px] rounded-full object-cover" />
        <AiOutlineCaretDown className={`text-sm text-richblack-900 ${open? 'rotate-180' : ''}`} />
      </div>
      {open && (
        <div onClick={(e) => e.stopPropagation()}  ref = {ref}  className="px-16 py-4 absolute top-[118%] right-0 z-[1000] divide-y-[1px] divide-richblack-700 text-richblack-100 overflow-hidden rounded-md border-[1px] border-richblack-700 bg-richblack-800 " >
          {ProfileDropDown.map((link,index) => {
            if (link.type && user?.accountType !== link.type) return null
            return (
              <Link key={index} className="flex flex-col gap-[50px] hover:text-richblack-5 hover:underline" to={link.path}>
                {link.title}
              </Link>
            )
          })}
        </div>
      )}
    </button>
  

)}