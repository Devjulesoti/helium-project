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
      <div className="text-wrap1">
        <h5 className="h5">TRUSTED BY MORE THAN</h5>
        <h3>300 provider</h3>
        <br />
        <h5>AND USED BY OVER</h5>
        <h3>5,000 health professionals</h3>
        <br />
        <h5>IN MANAGING OVER</h5>
        <h3>165,000 patients monthly</h3>
      </div>
      <div>
        <p>SPONSORS</p>
        <div className="img-wrap2">
          <img src={frame1} alt="" />
          <img src={frame2} alt="" />
          <img src={frame3} alt="" />
          <img src={frame4} alt="" />
          <img src={frame5} alt="" />
          <img src={frame6} alt="" />
          <img src={frame7} alt="" />
          <img src={frame8} alt="" />
          <img src={frame9} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Lsection3;
