import React from "react";
import "../../CSS/AboutOS/OnlineTD.css";
import { Link } from "react-router-dom";
function OnlineTD() {
  return (
    <>
      <div className="td-main">
        <div className="td-1">
          <h2>Our Online School Term Dates</h2>
        </div>
        <div className="td-1">
          <h2>2023 to 2024</h2>
        </div>
        <div className="td-2">
          <img src="/Images/AutumnTerm.png" />
        </div>
        <div className="td-3">
          <h2>2024 - 2025</h2>
        </div>
        <div className="td-4">
          <img src="/Images/Autumn Term-4.png" />
        </div>
        <div className="td-5">
          <h6>
            Our Online School Term Dates 2023 to 2024 2024 - 2025 In the UK,
            students usually start at the age of 5 and enter the first year of
            school. Primary school is made up of 6 years. Students then follow
            on to secondary school, which they end with their GCSE exams. Each
            subject is assessed seperately by a series of exams leading to GCSEs
            or international GCSEs.
            <br /> Students can then choose to go on to college, where they
            choose 3 subjects (sometimes 4), which are also assessed seperately
            and form the basis of entry to university and other courses.
            <br /> Colleges often also offer other qualifications, leading to
            students gaining employment and apprenticeships.{" "}
          </h6>
          <h6>
            If you have any enquiries or questions about joining our online
            school community, you are welcome to contact us via our email:
            <a
              data-auto-recognition="true"
              href="mailto:enquiries@eureka-learning.co.uk"
            >
              enquiries@eureka-learning.co.uk
            </a>
            or you can book an appointment with an advisor:
          </h6>
        </div>
        <div className="td-6">
          <button>
            <Link to="/appointments">Book a free consultation</Link>
          </button>
        </div>
      </div>
    </>
  );
}
export default OnlineTD;
