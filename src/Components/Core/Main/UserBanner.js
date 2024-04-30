import React, { useEffect, useRef } from 'react';
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom"
// import IconBtn from "../../Common/IconBtn";
import Button from '../../Common/Buttons/Button';
// import Animation1 from "../../Animations/Animaton1.json"
import lottie from 'lottie-web';

const quotes = [
    { id: 1, text: 'The mind is not a vessel to be filled but a fire to be kindled', author: 'Plutarch' },
    { id: 2, text: 'Tell me and I forget. Teach me and I remember. Involve me and I learn', author: 'Xunzi' },
    { id: 3, text: 'The technology itself is not transformative. It’s the school, the pedagogy, that is transformative', author: 'Tanya Byron' },
  ];



function UserBanner() {
    const animationContainer = useRef(null);
    const backGroundAnimation = useRef(null);
    useEffect(() => {
        lottie.loadAnimation({
          container: animationContainer.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: require('../../Animations/Animaton1.json'), 
        });
      }, [2000]);
      useEffect(() => {
        lottie.loadAnimation({
          container: backGroundAnimation.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: require('../../Animations/BackgroundAnimations.json'), 
        });
      }, []);

  const { user } = useSelector((state) => state.profile);
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  // const navigate = useNavigate();

  return (
    <div className="relative border-2 border-richblue-500 bg-richblue-700 font-inter text-richblue-5 w-[95%] rounded-2xl h-[200px] px-6 py-5">
      <div  className='absolute  bg-richBlue-700  h-[200px] w-full  z-0' ref={backGroundAnimation}></div>
      <div className='z-100'>
        <p className="text-4xl font-bold ">
          Welcome Back <span className="text-4x text-caribbeangreen-50 font-bold">{user?.firstName} {user?.lastName}</span>{" "}
        </p>
        <p className="mt-5 mb-5 text-richblue-5  text-sm font-edu-sa">
          "{quote.text}"  {"  "} (Author - :"{quote.author}")
        </p>
        <Button>
            Explore Courses
        </Button>
      </div>
      <div  className='absolute h-[300px] top-[-50px] right-0 z-10' ref={animationContainer}></div>
    </div>
  );
}

export default UserBanner;
