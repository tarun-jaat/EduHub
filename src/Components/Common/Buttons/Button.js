import React from "react";
import { Link } from "react-router-dom";
import "./Buttons.css"

const Button = ({ children, active, linkto }) => {
  return (
    <div className="MainButton">
      <Link to = {linkto} className={active ? "Button active" : "Button"}>     
         {children}
    </Link>
    </div>
    
)};


export default Button;