import React from "react";
import img1 from "../../assets/images/landing/div.png";
import "../../Styles/landing/Section4.css";

const Lsection4 = () => {
  return (
    <div className="section4">
      <div className="Limage">
        <img src={img1} alt="" />
      </div>

      <div className="section4-text">
        <p style={{ color: "#454545" }}>
          Lorem ipsum dolor sit amet consectetur. Feugiat pretium libero
          accumsan congue ullamcorper. Nam massa cmmodo gravida lectus.
          Phasellus commodo quis eleifend nulla.egestas sollicitudin at
          risus aliquet libero nullam. Lorem nunc eros proin.
        </p>
        <h6>DR. AMUNIKE, ORTHOPAEDIC SURGEON</h6>
        <p className="p1" style={{ color: "#D14C45" }}>
          Centre For Advanced Specialty Surgery
        </p>
      </div>
    </div>
  );
};

export default Lsection4;
