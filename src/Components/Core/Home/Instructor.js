import React from 'react'
import { PiChalkboardTeacherLight } from "react-icons/pi";
import InstructorImg from "../../../Assests/Images/Instructor.png"
import "./Instructor.css"
import Button from "../../Common/Buttons/Button"
function Instructor() {
  return (
    <div className='Instructor'>
        <div>
            <img src={InstructorImg} alt='instructor'/>

        </div>
        <div className='Instructor-Text'>
            <p className='Heading1'>Become an Instructor</p>
            <p style={{color:"rgb(99, 99, 99)",fontFamily:"sans-serif"}}>Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</p>
            <Button className="button1" active={true} linkto={"/Signup"}> Start Teaching Today </Button>          
        </div>
    </div>
  )
}

export default Instructor