import React from 'react'
import "./Works.css"
import Man2 from '../../../Assests/Images/ManImg2.png';
import VL from '../../../Assests/Images/eos-icons_virtual-guest.png';
import ME from '../../../Assests/Images/icomoon-free_tree.png';
import OC from '../../../Assests/Images/ion_book.png';
import SE from '../../../Assests/Images/uil_notes.png'

function Works() {
  return (
    <div  className="works">
        <div  class="container1">
            <img src={Man2}  alt="man2" />
        </div>
        <div className='container2'>
            <div>
                <p className='Heading1' style={{width:"600px",fontSize:"42px"}}>HOW OUR ONLINE SCHOOL WORKS</p>
            </div>
            <div  className='content'>
                <div  className='card card1'>
                    <img src={VL} alt="Virtual Learning"/>
                    <h3>Virtual Learning</h3>
                    <p>The only cost of standard school supplies an voluntary field trips</p>
                </div>
                <div className='card card2'>
                    <img src={ME} alt="Meaningful Education"/>
                    <h3>Meaningful Education</h3>
                    <p>Many of our connections Academy Schools have additional Accreditations</p>
                </div>
                <div className='card card3'>
                <img src={OC} alt="Online Curriculum"/>
                    <h3>Online Curriculum</h3>
                    <p>Our curriculum  prepares students to go further in life by giving them support</p>
                </div>
                <div className='card card4'>
                    <img src={SE} alt='Social Intraction'/>
                    <h3>Social Interaction </h3>
                    <p>Students at connection academy collaborates on project together</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Works