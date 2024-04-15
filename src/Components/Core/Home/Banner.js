import React from "react";
import { BannerItems } from "../../../Data/BannerItems";
// import NumberCounter from 'number-counter'
import  "./Banner.css"
import CountUp from "react-countup";
function Banner() {
  return (
    <div>
      <div className="Banner">
        {BannerItems.map((item, index) => (
          <div className="banner-inner" key={index}>
            <img src={item.icon} alt={item.title} />
            <div className="banner-Upper-items">
              {/* <p className="num">{item.num}</p> */}
             <CountUp className="num" end={item.Number} start={100} delay='1s' suffix="+"/>
              <p className="Banner-title">{item.title}</p>
            </div>
            

          </div>

        ))}
      </div>
    </div>
  );
}

export default Banner;
