import React from "react";
import first from "../../assets/images/solution/pics1.png";
import second from "../../assets/images/solution/pics2.png";
import third from "../../assets/images/solution/pics3.png";
import fourth from "../../assets/images/solution/pics4.png";
import fifth from "../../assets/images/solution/pics5.png";
import sixth from "../../assets/images/solution/pics6.png";
import phone from "../../assets/images/solution/hand-mobile.png.png";
import apple from "../../assets/images/solution/appstore.png.png";
import playstore from "../../assets/images/solution/gplay.png.png";
import "../../Styles/solution/Solution.css";

const Section3 = () => {
  return (
    <div className="d-flex justify-md-content-center sosection3  ">
      <div className="sfirst">
        <div className="img-text">
          <img src={first} alt="" />
          <p>Rich personal health records</p>
        </div>

        <div className="img-text">
          <img src={second} alt="" />
          <p>Lab and diagonist result update</p>
        </div>

        <div className="img-text">
          <img src={third} alt="" />
          <p>Lab and diagonist result update</p>
        </div>

        <div className="img-text">
          <img src={fourth} alt="" />
          <p>Lab and diagonist result update</p>
        </div>

        <div className="img-text">
          <img src={fifth} alt="" />
          <p>Lab and diagonist result update</p>
        </div>

        <div className="img-text">
          <img src={sixth} alt="" />
          <p>Lab and diagonist result update</p>
        </div>
      </div>

      <div className="hand-phone">
        <img src={phone} alt="" className="w-100" />
      </div>
      <div className="sthird">
        <h1>Personal Health Records</h1>
        <p>All your health records and more,in one place</p>
        <div className="d-flex justify content-around gap-3 ">
          <a href="www.apple.com">
            {" "}
            <img src={apple} alt="" />
          </a>
          <a href="www.apple.com">
            {" "}
            <img src={playstore} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section3;
