import React from 'react'
import facebook from '../../assets/images/solution/ico-facebook-pink.svg (1).png'
import instagram from '../assets/Images/about/Combined Shape.png'
import twitter from '../assets/Images/about/Combined Shape (1).png'
import linkedin from '../assets/Images/about/Shape.png'
import '../../Styles/solution/Solution.css'

const Footer1 = () => {
  return (
    <div className="footer" id='Footer-head'>
          <div className="footer-wrap">
        <div>
          <h5>OUR SOLUTIONS</h5>
          <p>For Providers</p>
          <p>For Payers</p>
          <p>For Patients</p>
          <p>For Partners</p>
          <p>For Developers</p>
        </div>
        <div>
          <h5>OUR PRODUCTS</h5>
          <p>EMR/HMIS</p>
          <p>Teleclinic</p>
          <p>HeliumPay</p>
          <p>HeliumCredit</p>
          <p>Emergency Response</p>
        </div>
        <div>
          <h5>COMPANY</h5>
          <p>Blog</p>
          <p>Careers</p>
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Information Security Policy</p>
        </div>
        <div>
          <h5>LAGOS</h5>
          <p>Block 22, Babatunde Anjous Avenue, Lekki Phase 1, Lagos, Nigeria</p>
          <h5>SAN FRANCISCO</h5>
          <p>981 Mission Street #10 San Francisco, CA 94103</p>
        </div>
          </div>
          <div className="footer-wrap2">
              <div className="footer-image">
              <img src={facebook} alt="" />
              <img src={instagram} alt="" />
              <img src={twitter} alt="" />
              <img src={linkedin} alt="" />
              </div>
              <p>+234 018883344</p>
              <p>team@heliumhealth.com</p>
          </div>
      </div>
    );
  };
  


export default Footer1