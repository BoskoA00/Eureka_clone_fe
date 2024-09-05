import React, { useState } from "react";
import "../CSS/Contacts.css";
import { Link } from "react-router-dom";
import axios from "axios";
function Contact() {
  const [email, setEmail] = useState("Email");
  const [name, setName] = useState("Name");
  const [message, setMessage] = useState(
    "What age / year group / subject are you interested in? Please as all the question here and we will reply as soon as we can"
  );
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [messageError, setMessageError] = useState("");
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeMessage = (e) => {
    setMessage(e.target.value);
  };

  const admitMessage = async () => {
    setEmailError("");
    setMessageError("");
    setNameError("");
    if (email.trim().length === 0 || email.trim() === "Email") {
      setEmail("Email is required");
      return;
    }
    if (name.trim().length === 0 || name.trim() === "Name") {
      setName("Name is required");
      return;
    }
    if (
      message.trim().length === 0 ||
      message.trim() ===
        "What age / year group / subject are you interested in? Please as all the question here and we will reply as soon as we can"
    ) {
      setMessage("Message is required");
      return;
    }
    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL + "api/ContactMessages",
        {
          id: 0,
          name: name,
          email: email,
          content: message,
        }
      );
      alert("Successfull!");
      setEmail("Email");
      setName("Name");
      setMessage(
        "What age / year group / subject are you interested in? Please as all the question here and we will reply as soon as we can"
      );
    } catch (error) {
      console.error(error);
    }
  };
  const ADDRESS =
    "Eureka Learning Centre, Building 1000, Lakeside North Harbour, Western Road, Portsmouth, PO6 3EZ";
  const ADDRESS1 = "Милована Глишића, Београд";
  return (
    <>
      <div className="c-main">
        <div className="c-1">
          <iframe
            src={`https://www.google.com/maps?q=${ADDRESS1}&output=embed&maptype=satelite`}
          ></iframe>
        </div>
        <div className="c-2">
          <div className="c-2-title">
            <h1>Contact us</h1>
          </div>
          <div className="c-2-button">
            <Link to={"/appointments"}>Book a free consultation</Link>
          </div>
        </div>
        <div className="c-3">
          <div className="c-3-1">
            <p>
              We are here to help to answer any of your questions.
              <br />
              We may not respond immediately if it is outside of the office
              hours (9am to 5pm UK time). Thank you for your understanding.
            </p>
          </div>
          <div className="c-3-2">
            <p>
              For all enquiries, please use the contact form or email us
              directly.
              <br />
              <br /> We are not looking to hire teachers at the moment so we ask
              that only those looking for further information, or to enrol, use
              this contact form please.
            </p>
          </div>
        </div>
        <div className="c-4">
          <div className="c-4-1">
            <form>
              <div className="c-f-name">
                <input type="text" value={name} onChange={changeName} />
                <span className="error-span">{nameError}</span>
              </div>
              <div className="c-f-email">
                <input type="email" value={email} onChange={changeEmail} />
                <span className="error-span">{emailError}</span>
              </div>
              <div className="c-f-text">
                <textarea value={message} onChange={changeMessage}></textarea>
                <span className="error-span">{messageError}</span>
              </div>
              <div className="c-4-f-submit">
                <button type="button" onClick={admitMessage}>
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="c-4-2">
            <div className="c-4-2-line"></div>
            <div className="c-4-2-address">
              <div className="c-4-2-a-div">
                <p>Building 1000</p>
              </div>
              <div className="c-4-2-a-div">
                <p>Lakeside North Harbour</p>
              </div>
              <div className="c-4-2-a-div">
                <p>Western Road</p>
              </div>
              <div className="c-4-2-a-div">
                <p>Portsmouth</p>
              </div>
              <div className="c-4-2-a-div">
                <p>PO6 3EZ</p>
              </div>
              <br />
              <br />
              <div className="c-4-2-a-div">
                <p>Tel: +44 (0) 23 9206 6290</p>
              </div>
              <div className="c-4-2-a-div">
                <p>
                  Email:{" "}
                  <a
                    href="mailto:enquiries@eureka-learning.co.uk?subject=Enrolment form"
                    target="_blank"
                  >
                    {" "}
                    enquiries@eureka-learning.co.uk
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
