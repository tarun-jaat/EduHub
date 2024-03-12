import React from 'react'
import { FaArrowAltCircleRight ,FaArrowAltCircleLeft} from "react-icons/fa";
import "./Provide.css"
function Provide() {
  return (
    <div>
        <div className='container-provide-upper'>
            <p className='Heading1'>What we will provide</p>
            <div className='provide-buttons'>
                <FaArrowAltCircleLeft  style={{color:"#0a3442",fontSize:"4rem",cursor:"pointer"}}/>
                <FaArrowAltCircleRight style={{color:"#0a3442",fontSize:"4rem",cursor:"pointer"}}/>
            </div>

        </div>
        <div className='container-provide-bottom'>
            <div className="course_card"></div>
            <div className="course_card"></div>
            <div className="course_card"></div>
            <div className="course_card"></div>
        </div>
    </div>
  )
}

export default Provide