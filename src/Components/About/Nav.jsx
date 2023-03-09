import React from 'react'
import '../../Styles/about/nav.css'
import people from '../../assets/images/about/intro-about.png.png'
import dropDown from "../../assets/images/landing//a.png";
import Navbar1 from "../../Components/Landing/Lnavbar1";

const Nav = () => {
  return (
    <div className="container navcon">
      <Navbar1/>
        <div className="ageneral-wrap">
          <div className="awrap1">
            <div className="atext1">
              <h1>AFRICA'S HEALTHTECH & DATA BACKBONE</h1>
            </div>
            <div className="aimage">
              <img src={people} alt="" />
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Et volutpat ultricies
                sed aliquam enim elit sagittis senectus. Enim sagittis fermentum
                eget justo pharetra neque pellentesque. Fringilla sed facilisi
                nec urna cursus. Gravida est suscipit nisi est ullamcorper
                placerat convallis.
              </p>
            </div>
          </div>
          <div className="awrap2">
            <div className="aimage2">
              <img src={people} alt="" />
            </div>
          </div>
        </div>
        <div>
          {/* <a href="#footer">
            <img src={dropDown} alt="img-dropdown" />
          </a> */}
        </div>
      </div>
  )
}

export default Nav