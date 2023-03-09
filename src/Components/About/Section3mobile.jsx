import React from "react";
import "../styles/section3.css";
import icon1 from "../Assets/images/i (1).png";
import icon2 from "../Assets/images/i (2).png";
import icon3 from "../Assets/images/i (3).png";
import icon4 from "../Assets/images/i (4).png";
import icon5 from "../Assets/images/i (5).png";
import icon6 from "../Assets/images/i (6).png";
import icon7 from "../Assets/images/i (7).png";
import icon8 from "../Assets/images/i (8).png";
import icon9 from "../Assets/images/i (9).png";
import icon10 from "../Assets/images/i (10).png";
import icon11 from "../Assets/images/i (11).png";
import icon12 from "../Assets/images/i.png";

const Section3mobile = () => {
  const data3 = [
    {
      detail1: "lorem Lorem ipsum dolor sit.",
      detail2: "Apr 2016",
    },
    {
      detail1: "lorem Lorem ipsum dolor sit.",
      detail2: "Dec 2016",
    },
    {
      detail1: "lorem Lorem ipsum dolor sit.",
      detail2: "Sep 2017",
    },
    {
      detail1: "lorem Lorem ipsum dolor sit.",
      detail2: "June 2018",
    },
    {
      detail1: "lorem Lorem ipsum dolor sit.",
      detail2: "Mar 2019",
    },
    {
      detail1: "Lorem lorem ipsum dolor sit.",
      detail2: "May 2020",
    },
    {
        detail1: "lorem Lorem ipsum dolor sit.",
        detail2: "Jan 2016",
      },
      {
        detail1: "lorem Lorem ipsum dolor sit.",
        detail2: "Aug 2016",
      },
      {
        detail1: "lorem Lorem ipsum dolor sit.",
        detail2: "May 2017",
      },
      {
        detail1: "lorem Lorem ipsum dolor sit.",
        detail2: "Jan 2018",
      },
      {
        detail1: "lorem Lorem ipsum dolor sit.",
        detail2: "Oct 2018",
      },
      {
        detail1: "Lorem Lorem ipsum dolor sit.",
        detail2: "May 2019",
      },
  ];
 

  return (
    
    <div>
        <h2 className="mt-5 text-center ">Our Journey</h2>
        <div className="container d-flex justify-content-around gap-1 section3">
      <div className="middle">
        <div className="each">
          <img src={icon1} alt="" />
        </div>
        <div className="line"></div>
        <div className="each">
          <img src={icon2} alt="" />
        </div>
        <div className="line"></div>
        <div className="each">
          <img src={icon3} alt="" />
        </div>
        <div className="line"></div>
        <div className="each">
          <img src={icon4} alt="" />
        </div>
        <div className="line"></div>
        <div className="each">
          <img src={icon5} alt="" />
        </div>
        <div className="line"></div>
        <div className="each">
          <img src={icon6} alt="" />
        </div>
        <div className="line"></div>
        <div className="each">
          <img src={icon7} alt="" />
        </div>
        <div className="line"></div>
        <div className="each">
          <img src={icon8} alt="" />
        </div>
        <div className="line"></div>
        <div className="each">
          <img src={icon9} alt="" />
        </div>
        <div className="line"></div>
        <div className="each">
          <img src={icon10} alt="" />
        </div>
        <div className="line"></div>
        <div className="each">
          <img src={icon11} alt="" />
        </div>
        <div className="line"></div>
        <div className="each">
          <img src={icon12} alt="" />
        </div>
      </div>
      <div className="second">
      
      {data3.map((each) => {
        return (
          <div className=" ">
            <p className="date">{each.detail2}</p>
          </div>
        );
      })}
    </div>
      <div className="third">
      
      {data3.map((each) => {
        return (
          <div className="">
            <p className="lorem writeup2">{each.detail1}</p>
          </div>
        );
      })}
    </div>

    </div>
    </div>
  );
};

export default Section3mobile;
