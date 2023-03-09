import React, { useState } from "react";
import Navbar1 from "../Components/Landing/Lnavbar1";
import "../Styles/landing/Form.css";

const Form = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleEmail = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValid(validateEmail(newEmail));
  };

  return (
    <div className="form ">
      <Navbar1 />
      <h1>INTERESTED IN HELIUM? GET IN TOUCH WITH OUR TEAM.</h1>
      <p>
        Call us on +234 018883344 or send us an email at team@heliumhealth.com .
        You can also contact us by filling out this form and we’ll get back to
        you within a few hours.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(`Email submitted: ${email}`);
          alert(`Email submitted: ${email}`);
        }}
        action=""
      >
        <div className="input1">
          <div>
            <label htmlFor="">First Name</label>
            <input
              onChange={(e) => {
                console.log(e.target.value);
              }}
              type="text"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label htmlFor="">Last Name</label>
            <input
              onChange={(e) => {
                console.log(e.target.value);
              }}
              type="text"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        <div className="hospital-wrap">
          <label htmlFor="">Hospital Name</label>
          <input
            className="hospital"
            onChange={(e) => {
              console.log(e.target.value);
            }}
            type="text"
            placeholder="Enter hospital name"
          />
        </div>

        <div className="hospital-wrap">
          <label htmlFor="">Location</label>
          <input
            className="hospital"
            onChange={(e) => {
              console.log(e.target.value);
            }}
            type="text"
            placeholder="Enter your location"
          />
        </div>

        <div className="input1 ">
          <div>
            <label htmlFor="">Email</label>
            <input
              type="email"
              value={email}
              onChange={handleEmail}
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="">Phone Number</label>
            <input type="number" placeholder="Enter your phone number" />
          </div>
        </div>

        <div className="hospital-wrap">
          <label htmlFor="">Estimated Patients Seen Annually</label>
          <input
            className="hospital"
            type="text"
            placeholder="Enter patients seen Annually"
          />
        </div>

        <div className="hospital-wrap">
          <label htmlFor="">Your Message</label>
          <textarea
            className="hospital"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Enter Your Message"
          ></textarea>
        </div>
        <button>SUBMIT MESSAGE</button>
      </form>
    </div>
  );
};

export default Form;
