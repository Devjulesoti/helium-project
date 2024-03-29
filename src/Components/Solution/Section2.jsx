import React from "react";
import girl from "../../assets/images/solution/intro-patients.png.png";
import fine from "../../assets/images/solution/a (2).png";
import "../../Styles/solution/Solution.css";
import Navbar1 from "../../Components/Landing/Lnavbar1";
const Section2 = () => {
  return (
    <div className="lsection2">
      <Navbar1 />
      <div className="img-picture">
        <div className="text-code">
          <h2 className="care">
            <strong>YOUR CARE, ON YOUR TERMS</strong>
          </h2>
          <h4 className="take ">
            Take control of your health with our wealth of patient resources.
          </h4>
        </div>

        <img src={girl} alt="" />
      </div>
      <div className="arrow text-center pt-3 pb-3">
        <a href="#footer">
          <img src={fine} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Section2;
