import React, { useState } from "react";
import "../CSS/FunctionalSkills.css";
import { GroupOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import axios from "axios";
function FunctionalSkills() {
  const [name, setName] = useState("Name");
  const [email, setEmail] = useState("Email");
  const [subject, setSubject] = useState("Subject");
  const [message, setMessage] = useState("Message");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeSubject = (e) => {
    setSubject(e.target.value);
  };
  const changeMessage = (e) => {
    setMessage(e.target.value);
  };

  const admitMessage = async () => {
    setEmailError("");
    setNameError("");
    setSubjectError("");
    setMessageError("");
    if (name.trim().length === 0 || name.trim() === "Name") {
      setNameError("Please enter your name");
      return;
    }
    if (email.trim().length === 0 || email.trim() === "Email") {
      setEmailError("Please enter your email");
      return;
    }
    if (subject.trim().length === 0 || subject.trim() === "Subject") {
      setSubjectError("Please enter your subject");
      return;
    }
    if (message.trim().length === 0 || message.trim() === "Message") {
      setMessageError("Please enter your message");
      return;
    }
    try {
      let response = await axios.post(
        process.env.REACT_APP_API_URL + "api/FunctionalSkillsMessages",
        {
          id: 0,
          name: name,
          email: email,
          subject: subject,
          content: message,
        }
      );
      setEmail("Email");
      setName("Name");
      setSubject("Subject");
      setMessage("Message");
      alert("Success");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="fs-main">
        <div className="fs-1">
          <h2>Functional Skills Exams</h2>
        </div>
        <div className="fs-2">
          <div className="fs-2-1">
            <img src="/Images/girl.png" />
          </div>
          <div className="fs-2-2">
            <h6>
              Eureka Learning is excited to announce our functional skills
              courses for Maths and English, both as a 1-year course and
              intensive 3-month course.
              <br /> Functional skills are equivalent to GCSE, generally
              considered easier, focused on real life skills and accepted by
              many further education courses.
              <br /> Join our September to June course following the normal
              academic year schedule or alternatively join our 3 months
              intensive course.
            </h6>
          </div>
        </div>
        <div className="fs-3">
          <button>
            {" "}
            <a
              href="mailto:enquiries@eureka-learning.co.uk?subject=Enrolment form"
              target="_blank"
            >
              Contact us
            </a>
          </button>
        </div>
        <div className="fs-4">
          <div className="fs-4-1">
            <h6>
              What is the difference between level 1 and level 2?
              <br /> Level 2 is considered equivalent to GCSE and a great
              alternative for many. If however you feel you are not ready for
              level 2, you can start with level 1. We can help you decide.
            </h6>
          </div>
          <div className="fs-4-2">
            <h6>
              Our academic year runs from September to
              <br /> June with exams usually in June. We also run
              <br /> 3- months intensive classes, so you can
              <br />
              complete the course faster. In both cases you
              <br /> can sit exams when you feel ready, regardless
              <br /> of how long your course has been running.
            </h6>
          </div>
        </div>
        <div className="fs-5">
          <h2>Sit your exam online from the comfort of your own home!</h2>
        </div>
        <div className="fs-6">
          <div className="fs-66">
            <div className="fs-exam">
              <div className="fs-e-img">
                <img src="/Images/t1.png" alt="Picture" />
              </div>
              <div className="fs-e-title">
                <h2>Maths Level 1</h2>
              </div>
              <div className="fs-e-t">
                <p>Functional Skills</p>
              </div>
              <div className="fs-e-dsc">
                <p>
                  September to June course or
                  <br /> Intensive 3-months course anytime*
                  <br />
                  Weekly live lessons, start anytime
                  <br /> Includes Online exam (Paper based possible)
                </p>
              </div>
              <div className="fs-e-f">
                <p>From:</p>
              </div>
              <div className="fs-e-p">
                <p>£670</p>
              </div>
              <div className="fs-e-tt">
                <p>*Some students take longer and can extend their course</p>
              </div>
            </div>
            <div className="fs-exam">
              <div className="fs-e-img">
                <img src="/Images/t2.png" alt="Picture" />
              </div>
              <div className="fs-e-title">
                <h2>English Level 1</h2>
              </div>
              <div className="fs-e-t">
                <p>Functional Skills</p>
              </div>
              <div className="fs-e-dsc">
                <p>
                  September to June course or
                  <br /> Intensive 3-months course anytime*
                  <br />
                  Weekly live lessons, start anytime
                  <br /> Includes Online exam (Paper based possible)
                </p>
              </div>
              <div className="fs-e-f">
                <p>From:</p>
              </div>
              <div className="fs-e-p">
                <p>£670</p>
              </div>
              <div className="fs-e-tt">
                <p>*Some students take longer and can extend their course</p>
              </div>
            </div>
            <div className="fs-exam">
              <div className="fs-e-img">
                <img src="/Images/t3.png" alt="Picture" />
              </div>
              <div className="fs-e-title">
                <h2>Maths Level 2</h2>
              </div>
              <div className="fs-e-t">
                <p>Functional Skills</p>
              </div>
              <div className="fs-e-dsc">
                <p>
                  September to June course or
                  <br /> Intensive 3-months course anytime*
                  <br />
                  Weekly live lessons, start anytime
                  <br /> Includes Online exam (Paper based possible)
                </p>
              </div>
              <div className="fs-e-f">
                <p>From:</p>
              </div>
              <div className="fs-e-p">
                <p>£670</p>
              </div>
              <div className="fs-e-tt">
                <p>*Some students take longer and can extend their course</p>
              </div>
            </div>
            <div className="fs-exam">
              <div className="fs-e-img">
                <img src="/Images/t4.png" alt="Picture" />
              </div>
              <div className="fs-e-title">
                <h2>English Level 2</h2>
              </div>
              <div className="fs-e-t">
                <p>Functional Skills</p>
              </div>
              <div className="fs-e-dsc">
                <p>
                  September to June course or
                  <br /> Intensive 3-months course anytime*
                  <br />
                  Weekly live lessons, start anytime
                  <br /> Includes Online exam (Paper based possible)
                </p>
              </div>
              <div className="fs-e-f">
                <p>From:</p>
              </div>
              <div className="fs-e-p">
                <p>£670</p>
              </div>
              <div className="fs-e-tt">
                <p>*Some students take longer and can extend their course</p>
              </div>
            </div>
          </div>
        </div>
        <div className="fs-7">
          <Link to={"/appointments"}>Book a free consultation</Link>
        </div>
        <div className="fs-8">
          <h1>Contact us</h1>
        </div>
        <div className="fs-9">
          <div className="fs-9-1">
            <p>We are here to help to answer any of your questions.</p>
          </div>
          <div className="fs-9-2">
            <p>
              For all enquiries, please use the contact form or email us
              directly.
            </p>
          </div>
        </div>
        <div className="fs-10">
          <div className="fs-10-1">
            <form>
              <div className="form-name">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={changeName}
                />
                <span className="error-span">{nameError}</span>
              </div>

              <div className="form-email">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={changeEmail}
                />
                <span className="error-span">{emailError}</span>
              </div>

              <div className="form-subject">
                <input
                  type="text"
                  placeholder="Subject"
                  value={subject}
                  onChange={changeSubject}
                />
                <span className="error-span">{subjectError}</span>
              </div>

              <div className="form-message">
                <textarea
                  placeholder="Message"
                  value={message}
                  onChange={changeMessage}
                ></textarea>
                <span className="error-span">{messageError}</span>
              </div>
              <div className="form-submit">
                <button type="button" onClick={admitMessage}>
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="fs-10-2">
            <div className="fs-10-line"></div>
            <div className="fs-10-address">
              <div>
                <p>Building 1000</p>
              </div>
              <div>
                <p>Lakeside North Harbour</p>
              </div>
              <div>
                <p>Western Road</p>
              </div>
              <div>
                <p>Portsmouth</p>
              </div>
              <div>
                <p>PO6 3EZ</p>
              </div>
              <br />
              <br />
              <div>
                <p>Tel: +44 (0) 23 9206 6290</p>
              </div>
              <div>
                <p>
                  {" "}
                  <a
                    href="mailto:enquiries@eureka-learning.co.uk?subject=Enrolment form"
                    target="_blank"
                  >
                    enquiries@eureka-
                    <br />
                    learning.co.uk
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
export default FunctionalSkills;
