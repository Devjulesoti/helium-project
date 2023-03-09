import React from "react";
import "../../Styles/landing/Section6.css";
import laptop from "../../assets/images/landing/laptop1@2x.png.png";

const Lsection6 = () => {
  return (
    <div className="section6">
      <div className="section6-wrap">
        <p className="pp">INTERESTED IN HELIUM?</p>
        <p>Take your hospital digital in record time</p>
        <div className="btn1">
          <button>SCHEDULE A DEMO</button>
        </div>
      </div>
      <div>
        <img src={laptop} alt="" />
      </div>
    </div>
  );
};

export default Lsection6;
