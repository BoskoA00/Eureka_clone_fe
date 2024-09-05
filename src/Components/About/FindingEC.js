import React from "react";
import "../../CSS/AboutOS/FindingEC.css";
import { Link } from "react-router-dom";
function FindingEC() {
  return (
    <>
      <div className="ec-main">
        <div className="ec-1">
          <h4>Our Online School - Exam Centres Near You</h4>
        </div>
        <div className="ec-2">
          <h6>
            Eureka Learning does not provide an exam centre, as it would be
            inconvenient for international students to access. We do however
            provide information about how to find an exam centre that is closer
            to your location.
          </h6>
          <h6>​Make sure the centre you choose accepts private candidates!</h6>
        </div>
        <div className="ec-3">
          <iframe
            src="https://www.cambridgeinternational.org/"
            frameborder="0"
          ></iframe>
        </div>
        <div className="ec-4">
          <h6>
            After loading the results you will find what exam centres are close
            to your location. You can then choose the most convenient exam
            centre for you.
          </h6>
          <h6>
            Our online school provides high quality, world class online
            education that prepares our students to excel in their exams. We
            take pride in our online tutoring and private lessons, as they have
            proved to have been highly beneficial for our online students.
          </h6>
          <h6>
            More information about how online schooling works can be found on
            our <Link to={"/aboutouronlineschool"}>'About'</Link> page.
          </h6>
        </div>
      </div>
    </>
  );
}
export default FindingEC;
