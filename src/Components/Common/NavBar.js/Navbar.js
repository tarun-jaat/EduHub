import React,{useState} from 'react'
import "./Navbar.css"
import Button from '../Buttons/Button'
import LogoDark from "../../../Assests/Logos/LOGODark.svg"
import { Link } from 'react-router-dom'
import { HomeNavLinks } from '../../../Data/HomeNavLinks'
function Navbar() {
    const [activeLink, setActiveLink] = useState(0)
  return (
    <div className='Navbar'>
            <div className='Logo'>
                <Link  to="/">
                <img src={LogoDark} alt="logo"/>
                </Link>
            </div>
            <div class="vertical-line"></div>
            <div className='NavLinks'>
            {HomeNavLinks.map((link, index) => (
            <Link to={link.path} onClick={() => setActiveLink(index)}>
              <p className={`nav-link ${activeLink === index ? 'activeNav' : 'noneActiveNav'}`}> {link.title}  </p>
            </Link>
          ))}

            </div>
            <div class="vertical-line"></div>
            <div className='SignInOut'>
             <Button active={true} linkto={"/Signup"}> Signup </Button>          
            </div>
        </div>
  )
}

export default Navbar