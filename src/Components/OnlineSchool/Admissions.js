import React, { useContext } from "react";
import "../../CSS/OnlineSchool/Admissions.css";
import { Link } from "react-router-dom";
import { MyContext } from "../HomeComponents/Context";
function Admissions() {
  const { feeCalculator, changeFeeCalculator } = useContext(MyContext);
  const clickDugmet = () => {
    changeFeeCalculator(true);
  };
  return (
    <>
      <div className="adm-main">
        <div className="adm-1">
          <h1>Our Admissions</h1>
        </div>
        <div className="adm-2">
          <h6>
            Signing up for our online school is easy. Contact us first for a
            free consulation and
            <br /> we can have a friendly chat, or send us a message through our
            contact form or <br /> chat.
            <br />
            If you like what we offer, you can sign up.
          </h6>
        </div>
        <div className="adm-3">
          <div className="adm-3-1">
            <div className="adm-3-1-1">
              <p>01.</p>
            </div>
            <div className="adm-3-1-2">
              <p>
                Book a free
                <br /> consultation{" "}
                <a
                  target="_blank"
                  href="https://app.acuityscheduling.com/schedule/93db48e3/appointment/13726365/calendar/8416902?appointmentTypeIds%5B%5D=13726365"
                >
                  here
                </a>{" "}
                or get in
                <br /> <Link to={"/contactonlineschool"}>contact</Link>. We will
                answer all
                <br /> your questions.
              </p>
            </div>
          </div>
          <div className="adm-3-1">
            <div className="adm-3-1-1">
              <p>02.</p>
            </div>
            <div className="adm-3-1-2-2">
              <p>
                Choose your subjects and
                <br /> ask for a fee quote or use our
                <br /> fee calculator.
              </p>
            </div>
          </div>
          <div className="adm-3-1">
            <div className="adm-3-1-1">
              <p>03.</p>
            </div>
            <div className="adm-3-1-2-3">
              <p>
                Fill in our{" "}
                <a href="/Images/EurekaFiles.pdf" target="_blank">
                  enrolment form
                </a>{" "}
                <br />
                and send it to us by{" "}
                <a
                  href="mailto:enquiries@eureka-learning.co.uk?subject=Enrolment form"
                  target="_blank"
                >
                  email
                </a>
                .
                <br />
                We will get you all set up
                <br /> from there.
              </p>
            </div>
          </div>
        </div>
        <div className="adm-4">
          <button onClick={clickDugmet}>Use the fee calculator</button>
        </div>
        <div className="adm-4-line"></div>
        <div className="adm-5">
          <h6>
            Our online classes can be joined at any time. We aim to keep virtual
            classes small. Should the online class size grow too much (above
            10), we split the class into smaller groups (timetable may change as
            a result) or create a waiting list. Places can be limited, so get in
            contact as soon as possible.
            <br />{" "}
            <span>
              Live online classes require a min of 3 students. Should there be
              less, a waiting list will be created. It normally does not take
              longer than a few weeks for a new group to come together.
            </span>
          </h6>
        </div>
      </div>
    </>
  );
}
export default Admissions;
