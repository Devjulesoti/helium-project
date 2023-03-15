import React from "react";
import "../../Styles/about/footer.css";
import facebook from "../../assets/images/about/ico-facebook-pink.svg.png";
import instagram from "../../assets/images/about/ico-instagram-pink.svg.png";
import linkedin from "../../assets/images/about/ico-linkedin-pink.svg (1).png";
import twitter from "../../assets/images/about/ico-twitter-pink.svg.png";

const footer1 = () => {
  return (
    <div className=" container pb-4 footer1">
      <div className="icons d-flex justify-content-center gap-2 py-4">
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={twitter} alt="" />
        <img src={linkedin} alt="" />
      </div>
      <div className="m-auto text-center">
      <p className="p-0 m-0">+2348156410362</p>
      <p className="p-0 m-0">team@techstudioheliumhealth.com</p>
      </div>
    </div>
  );
};

export default footer1;
