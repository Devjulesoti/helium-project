import React from "react";
import "../../Styles/about/footer.css";

const Footer = () => {
  return (
   <div className="container-fluid foot-outer"id="footer">
     <div className="container pt-4 text-start footer-div d-none d-md-flex justify-content-around gap-5">
      <div className="first">
        <h6>OUR SOLUTIONS</h6>
        <p>For Providers</p>
        <p>For Payers</p>
        <p>For Patients</p>
        <p>For Partners</p>
        <p>For Developers</p>
      </div>
      <div className="second">
        <h6 className="">OUR PRODUCTS</h6>
        <p>EMR/HMIS</p>
        <p>Teleclinic</p>
        <p>HeliumPay</p>
        <p>HeliumCredit</p>
        <p>Emergency Response</p>
      </div>
      <div className="third">
        <h6>COMPANY</h6>
        <p>Blog</p>
        <p>Careers</p>
        <p>Terms of Use</p>
        <p>Privacy Policy</p>
        <p>Information Security Policy</p>
      </div>
      <div className="fourth w-25">
        <div className="">
          <h6>LAGOS</h6>
          <p>Block 22 Babatunde Anjous Avenue,Lekki Phase 1,Lagos,Nigeria </p>
        </div>
        <div className="pt-4">
          <h6>SAN FRANCISCO</h6>
          <p>981 Mission Street #10 San Francisco, CA 94103</p>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Footer;
