import React,{useState}  from "react";
import "./Home.css";
import Button from "../../Components/Common/Buttons/Button";
import LogoDark from "../../Assests/Logos/LOGODark.svg"
import RightImage from "../../Assests/Images/ManImg.svg";
import { LiaAwardSolid } from "react-icons/lia";
import { IoIosArrowRoundForward } from "react-icons/io";
import message from "../../Assests/Images/message.svg";
import Footer from "../../Components/Core/Home/Footer"
// import register from '../../Assests/Images/register.svg';
import { Link } from 'react-router-dom'
import Skills from "../../Components/Core/Home/Skills";
import Works from "../../Components/Core/Home/Works";
import Provide from "../../Components/Core/Home/Provide";
import Instructor from "../../Components/Core/Home/Instructor";
import Reviews from "../../Components/Core/Home/Reviews";
import Banner from "../../Components/Core/Home/Banner";
// import { Link } from 'react-router-dom'
import { HomeNavLinks } from "../../Data/HomeNavLinks";

// import {Navbar} from "../../Components/Common/NavBar.js"
function Home() {
  const [activeLink, setActiveLink] = useState(0)

  return (
    <>
    
      <div className="Home">
        
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
        <div className="Main">
          <div className="container">
            <div className="left-container">
              <p className="Heading">
                Discover best classes for the best learning
              </p>
              <p className="underHeading">
                We designed Connections Academy to give students all across the
                nation a tuition-free online public school that lets them learn.
              </p>
              <Button linkto={"/Signup"} active={true}>
                Get Started
              </Button>
              <p style={{ color: "#0a3442a6" }}>
                Not sure when to start?
                <a
                  href="/signup"
                  style={{ color: "#3ad3cd", cursor: "pointer" }}
                >
                  Learn More
                </a>
              </p>
            </div>
            <div className="right-container">
              <img src={RightImage} alt="right" />
              <div className="circle"></div>
              <div className="rewards">
                <LiaAwardSolid
                  style={{
                    fontSize: "3rem",
                    color: "#3ad3ceb0",
                    fontWeight: "800",
                  }}
                />
                <div className="item">
                  <h5>Rewards are Waiting for you</h5>
                  <a href="Signup" style={{ color: "#3ad3ceb0" }}>
                    Claim now{" "}
                    <IoIosArrowRoundForward style={{ fontSize: "2rem" }} />
                  </a>
                </div>
              </div>
              <img className="message-icon" src={message} alt="messageicon" />
              <Link className="register-icon" to="/signup">
              {/* <img  src={register} alt="registericon" /> */}
              </Link>
            </div>
          </div>
        </div>
        <Skills/>
        <Works/>
        <Banner/>

        <Provide/>
        <Instructor/>
        <Reviews/>
        <Footer/>
      </div>
    </>
  );
}
export default Home;
