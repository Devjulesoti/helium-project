import React from "react";
import "../../Styles/landing/Section2.css";
import A1 from "../../assets/images/landing/a1.png.png";
import A2 from "../../assets/images/landing/a2.png.png";
import A3 from "../../assets/images/landing/a3.png.png";
import A4 from "../../assets/images/landing/a4.png.png";
import arrowIcon1 from "../../assets/images/landing/ico-arrow1.png";
import arrowIcon3 from "../../assets/images/landing/ico-arrow3.png";
import arrowIcon2 from "../../assets/images/landing/ico-arrow2.png";
import arrowIcon4 from "../../assets/images/landing/ico-arrow4.png";

const Lsection2 = () => {
  return (
    <div className="section2">
      <div className="section2-wrap1">
        <div className="section2-img1">
          <img src={A1} alt="" />
        </div>
        <div className="section2-text1">
          <h3 style={{ color: " #FF8C8C" }}>FOR PAYERS</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. At et congue odio nisi augue
            fermentum quam amet quis. In convallis elit consectetur convallis in
            aliquam orci leo. Id pharetra proin.
          </p>
          <p>
            Learn More
            <span>
              <img src={arrowIcon1} alt="" />
            </span>
          </p>
        </div>
      </div>

      <div className="section2-wrap2">
        <div className="section2-img2">
          <img src={A2} alt="" />
        </div>
        <div className="section2-text2">
          <h3 style={{ color: "#F59D3E" }}>FOR PROVIDERS</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. At et congue odio nisi augue
            fermentum quam amet quis. In convallis elit consectetur convallis in
            aliquam orci leo. Id pharetra proin.
          </p>
          <p>
            Learn More
            <span>
              <img src={arrowIcon4} alt="" />
            </span>
          </p>
        </div>
      </div>

      <div className="section2-wrap1">
        <div className="section2-img1">
          <img src={A3} alt="" />
        </div>
        <div className="section2-text1">
          <h3 style={{ color: " #1DA9E6" }}>FOR PATIENTS</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. At et congue odio nisi augue
            fermentum quam amet quis. In convallis elit consectetur convallis in
            aliquam orci leo. Id pharetra proin.
          </p>
          <p>
            Learn More
            <span>
              <img src={arrowIcon2} alt="" />
            </span>
          </p>
        </div>
      </div>

      <div className="section2-wrap2">
        <div className="section2-img2">
          <img src={A4} alt="" />
        </div>
        <div className="section2-text2">
          <h3 style={{ color: " #7A6FE7" }}>FOR PARTNERS</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. At et congue odio nisi augue
            fermentum quam amet quis. In convallis elit consectetur convallis in
            aliquam orci leo. Id pharetra proin.
          </p>
          <p className="p1">
            Learn More
            <span>
              <img src={arrowIcon3} alt="" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lsection2;
