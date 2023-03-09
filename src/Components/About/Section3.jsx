import React from "react";
import icon1 from "../../assets/images/about/i (1).png";
import icon2 from "../../assets/images/about/i (2).png";
import icon3 from "../../assets/images/about/i (3).png";
import icon4 from "../../assets/images/about/i (4).png";
import icon5 from "../../assets/images/about/i (5).png";
import icon6 from "../../assets/images/about/i (6).png";
import icon7 from "../../assets/images/about/i (7).png";
import icon8 from "../../assets/images/about/i (8).png";
import icon9 from "../../assets/images/about/i (9).png";
import icon10 from "../../assets/images/about/i (10).png";
import icon11 from "../../assets/images/about/i (11).png";
import icon12 from "../../assets/images/about/i.png";
import "../../Styles/about/section3.css";
import { isMobile } from "react-device-detect";

const Section3 = () => {

    const data = [
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
      ];
      const data1 = [
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
     



    if(isMobile){
        return(
            <div>
            <h2 className="mt-5 text-center ">Our Journey</h2>
            <div className="container d-flex justify-content-around gap-1 asection3">
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
          <div className="asecond">
          
          {data3.map((each) => {
            return (
              <div className=" ">
                <p className="date">{each.detail2}</p>
              </div>
            );
          })}
        </div>
          <div className="athird">
          
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
        )
    }
      



 

  


  return (
    <div className="container d-flex justify-content-center gap-1 asection3  ">
      <div className="aleft">
        {data.map((each) => {
          return (
            <div className=" each-write1 d-flex gap-3  justify-content-center align-items-center">
              <p className="alorem">{each.detail1}</p>
              <p className="date1">{each.detail2}</p>
            </div>
          );
        })}
      </div>
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
      <div className="aright">
      
        {data1.map((each) => {
          return (
            <div className=" each-write1 d-flex gap-3  justify-content-center align-items-center">
              <p className="date1">{each.detail2}</p>
              <p className="alorem">{each.detail1}</p>
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default Section3;
