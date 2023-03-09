import React from "react";
import image1 from "../../assets/images/landing/ico-info.svg.png";
import image2 from "../../assets/images/landing/Group1.png";
import image3 from "../../assets/images/landing/Group.png";
import "../../Styles/landing/Section5.css";

const Lsection5 = () => {
  return (
    <div className="section5">
      <h4>Our Customer Service Is Unparalled</h4>
      <div className="section5-wrap">
        <div>
          <div>
            <img src={image1} alt="" />
          </div>
          <h5>WORLD-CLASS 24/7 SUPPORT</h5>
          <p>
            Our friendly experts are available via email and chat, all day,
            everyday.
          </p>
        </div>

        <div>
          <div>
            <img src={image2} alt="" />
          </div>
          <h5>TRAINING & RESOURCES</h5>
          <p>
            Find information on any topic in our Knowledge Base, and receive
            instructions on how to get the most out of Helium via our periodic
            trainings
          </p>
        </div>

        <div>
          <div>
            <img src={image3} alt="" />
          </div>
          <h5>99% UPTIME ASSURANCE</h5>
          <p>
            Our top-notch infrastructure and redundancy plan all but eliminate
            your chances of experiencing a downtime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lsection5;
