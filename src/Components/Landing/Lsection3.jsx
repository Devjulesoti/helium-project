import React from "react";
import frame1 from "../../assets/images/landing/Frame1.png";
import frame2 from "../../assets/images/landing/Frame2.png";
import frame3 from "../../assets/images/landing/Frame3.png";
import frame4 from "../../assets/images/landing/Frame4.png";
import frame5 from "../../assets/images/landing/Frame5.png";
import frame6 from "../../assets/images/landing/Frame6.png";
import frame7 from "../../assets/images/landing/Frame7.png";
import frame8 from "../../assets/images/landing/Frame8.png";
import frame9 from "../../assets/images/landing/Frame9.png";
import "../../Styles/landing/Section3.css";

const Lsection3 = () => {
  return (
    <div className="section3">
      <div className="section3-text-wrap1">
        <h5 className="h5">TRUSTED BY MORE THAN</h5>
        <h3>300 provider</h3>
        <br />
        <h5>AND USED BY OVER</h5>
        <h3>5,000 health professionals</h3>
        <br />
        <h5>IN MANAGING OVER</h5>
        <h3>165,000 patients monthly</h3>
      </div>
      <div className="section3-wrap2">
        <p className="text-center">SPONSORS</p>
        <div className="section3-img-wrap2">
          <div>
          <img src={frame1} alt="" />
          </div>
          <div>
          <img src={frame2} alt="" />
          </div>
          <div>
          <img src={frame3} alt="" />
          </div>
          <div>
          <img src={frame4} alt="" />
          </div>
          <div>
          <img src={frame5} alt="" />
          </div>
          <div>
          <img src={frame6} alt="" />
          </div>
          <div>
          <img src={frame7} alt="" />
          </div>
          <div>
          <img src={frame8} alt="" />
          </div>
          <div>
          <img src={frame9} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lsection3;
