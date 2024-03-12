import React from 'react'
import "./Skills.css"
import react from "../../../Assests/Images/ri_reactjs-line.svg";
import express from "../../../Assests/Images/skill-icons_expressjs-light.svg";
import angular from "../../../Assests/Images/mdi_angular.svg";
import html from "../../../Assests/Images/akar-icons_html-fill.svg";
import css from "../../../Assests/Images/akar-icons_css-fill.svg";
import javascript from "../../../Assests/Images/ri_javascript-fill.svg";
import node from "../../../Assests/Images/logos_nodejs.svg";
import mongodb from "../../../Assests/Images/teenyicons_mongodb-solid.svg";
import vue from "../../../Assests/Images/mingcute_vue-fill.svg";
import { LiaJava } from 'react-icons/lia';
import { TbBrandCpp } from "react-icons/tb";


function Skills() {
  return (
    <div className='skills'>
        <div className='right-skills'>
            <p className="Heading1">Technologies  you will learn</p>
        </div>
        <div className='left-skills'>
            <img className='skills-img img1' src={html} alt='html'title='HTML5'/>
            <img className='skills-img img2' src={css} alt='css' title='CSS'/>
            <img className='skills-img img3' src={javascript} alt='javascript' title='JavaScript' />
            <img className='skills-img img4' src={mongodb} alt='mongodb'title='MongoDB'/>
            <img className='skills-img img5' src={express} alt='express'  title='ExpressJS' />
            <img className='skills-img img6' src={react} alt='react'  title='ReactJS' />
            <img className='skills-img img8' src={vue} alt='vue'  title='VueJS' />
            <img className='skills-img img9' src={angular} alt='angular ' title='AngularJS' />
            <p style={{fontFamily:"sans-serif",fontWeight:"700" ,fontSize:"32px", color:"#0a3442"}} title='Data structure and algorithm'>DSA</p>
            <LiaJava style={{fontSize:"64px", color:"#0a3442"}} title='JAVA'/>
            <TbBrandCpp style={{fontSize:"64px", color:"#0a3442"}} title='C++'/>
            <img className='skills-img img7' src={node} alt='node' title='NodeJS'/>
       </div>
    </div>
  )
}

export default Skills