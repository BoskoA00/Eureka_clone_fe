import React from "react";
import "../../src/CSS/Tutoring.css";
import { Link } from "react-router-dom";

function Tutoring() {
  return (
    <>
      <div className="tt-main">
        <div className="tt-1">
          <div className="tt-1-button">
            <Link to={"/appointments"}>Book a free consultation</Link>
          </div>
          <div className="tt-1-title">
            <h2>Online private tutoring</h2>
          </div>
        </div>
        <div className="tt-2">
          <h6>
            We cater for a large variety of needs at all ages, from primary to
            university, as well as learning in later life. Our most popular
            subjects are Mathematics, English, Foreign languages, Business
            studies and Sciences. We do however offer online lessons for other
            subjects too. Get in contact if you have any questions.
          </h6>
        </div>
        <div className="tt-3">
          <div className="tt-3-div">
            <img src="/Images/Working at home.png" alt="Picture" />
          </div>
          <div className="tt-3-div">
            <img src="/Images/Studying on a Computer.png" alt="Picture" />
          </div>
        </div>
        <div className="tt-4">
          <button>
            {" "}
            <Link to={"/contactonlineschool"}>Enquire now</Link>
          </button>
          <button>
            {" "}
            <Link to={"/aboutouronlineschool"}>View our teachers</Link>
          </button>
          <button>
            <Link to={"/onlineprivatetutoring"}>Subjects</Link>
          </button>
        </div>
        <div className="tt-5">
          <div className="tt-5-title">
            <h2>Book an online sesion</h2>
          </div>
          <div className="tt-5-texts">
            <h6>
              Book an online lesson If you would like to book a virtual private
              lesson, please contact us through our email, phone, or chat box.
              We are happy to answer any questions you may have before applying
              for online tutoring.
              <br />
              <br />
              Please provide us with any details we may need to know (e.g. year
              group, subjects) and we will aim to match you with a tutor within
              24 hours.
            </h6>
          </div>
        </div>
        <div className="tt-6">
          <div className="tt-6-title">
            <h2>Pricing</h2>
          </div>
          <div className="tt-6-texts">
            <h6>
              Primary School: 30 minute lessons (£21 per lesson)
              <br />
              Secondary School & Sixth Form: 55 minute lessons (£39 per lesson)
              <br />
              <br />
              10 lesson package: £189 for primary students, and £351 for
              secondary & sixth form students. Students attending our online
              school can also receive an additional 10% off on this package.
            </h6>
          </div>
          <div className="tt-7">
            <div className="tt-7-divs">
              <div className="tt-7-subject">
                <div className="tt-7-s-i">
                  <img src="/Images/tt1.png" />
                </div>
                <div className="tt-7-s-inf">
                  <div>
                    <h4>
                      <Link>Maths</Link>
                    </h4>
                  </div>
                  <div>
                    <p>£21/£39</p>
                  </div>
                </div>
              </div>
              <div className="tt-7-subject">
                <div className="tt-7-s-i">
                  <img src="/Images/tt2.png" />
                </div>
                <div className="tt-7-s-inf">
                  <div>
                    <h4>
                      <Link>English</Link>
                    </h4>
                  </div>
                  <div>
                    <p>£21/£39</p>
                  </div>
                </div>
              </div>
              <div className="tt-7-subject">
                <div className="tt-7-s-i">
                  <img src="/Images/tt3.png" />
                </div>
                <div className="tt-7-s-inf">
                  <div>
                    <h4>
                      <Link>English Lanugage</Link>
                    </h4>
                  </div>
                  <div>
                    <p>£21/£39</p>
                  </div>
                </div>
              </div>
              <div className="tt-7-subject">
                <div className="tt-7-s-i">
                  <img src="/Images/tt4.png" />
                </div>
                <div className="tt-7-s-inf">
                  <div>
                    <h4>
                      <Link>English Literature</Link>
                    </h4>
                  </div>
                  <div>
                    <p>£21/£39</p>
                  </div>
                </div>
              </div>
              <div className="tt-7-subject">
                <div className="tt-7-s-i">
                  <img src="/Images/tt5.png" />
                </div>
                <div className="tt-7-s-inf">
                  <div>
                    <h4>
                      <Link>Compputer Science</Link>
                    </h4>
                  </div>
                  <div>
                    <p>£21/£39</p>
                  </div>
                </div>
              </div>
              <div className="tt-7-subject">
                <div className="tt-7-s-i">
                  <img src="/Images/tt6.png" />
                </div>
                <div className="tt-7-s-inf">
                  <div>
                    <h4>
                      <Link>Biology</Link>
                    </h4>
                  </div>
                  <div>
                    <p>£21/£39</p>
                  </div>
                </div>
              </div>
              <div className="tt-7-subject">
                <div className="tt-7-s-i">
                  <img src="/Images/tt7.png" />
                </div>
                <div className="tt-7-s-inf">
                  <div>
                    <h4>
                      <Link>Physics</Link>
                    </h4>
                  </div>
                  <div>
                    <p>£21/£39</p>
                  </div>
                </div>
              </div>
              <div className="tt-7-subject">
                <div className="tt-7-s-i">
                  <img src="/Images/tt8.png" />
                </div>
                <div className="tt-7-s-inf">
                  <div>
                    <h4>
                      <Link>Chemistry</Link>
                    </h4>
                  </div>
                  <div>
                    <p>£21/£39</p>
                  </div>
                </div>
              </div>
              <div className="tt-7-subject">
                <div className="tt-7-s-i">
                  <img src="/Images/tt9.png" />
                </div>
                <div className="tt-7-s-inf">
                  <div>
                    <h4>
                      <Link>History</Link>
                    </h4>
                  </div>
                  <div>
                    <p>£21/£39</p>
                  </div>
                </div>
              </div>
              <div className="tt-7-subject">
                <div className="tt-7-s-i">
                  <img src="/Images/tt10.png" />
                </div>
                <div className="tt-7-s-inf">
                  <div>
                    <h4>
                      <Link>Geography</Link>
                    </h4>
                  </div>
                  <div>
                    <p>£21/£39</p>
                  </div>
                </div>
              </div>
              <div className="tt-7-subject">
                <div className="tt-7-s-i">
                  <img src="/Images/tt11.png" />
                </div>
                <div className="tt-7-s-inf">
                  <div>
                    <h4>
                      <Link>Buisness studies</Link>
                    </h4>
                  </div>
                  <div>
                    <p>£21/£39</p>
                  </div>
                </div>
              </div>
              <div className="tt-7-subject">
                <div className="tt-7-s-i">
                  <img src="/Images/tt12.png" />
                </div>
                <div className="tt-7-s-inf">
                  <div>
                    <h4>
                      <Link>Accounting</Link>
                    </h4>
                  </div>
                  <div>
                    <p>£21/£39</p>
                  </div>
                </div>
              </div>
              <div className="tt-7-subject">
                <div className="tt-7-s-i">
                  <img src="/Images/tt13.png" />
                </div>
                <div className="tt-7-s-inf">
                  <div>
                    <h4>
                      <Link>Economics</Link>
                    </h4>
                  </div>
                  <div>
                    <p>£21/£39</p>
                  </div>
                </div>
              </div>
              <div className="tt-7-subject">
                <div className="tt-7-s-i">
                  <img src="/Images/tt14.png" />
                </div>
                <div className="tt-7-s-inf">
                  <div>
                    <h4>
                      <Link>Additional Maths</Link>
                    </h4>
                  </div>
                  <div>
                    <p>£21/£39</p>
                  </div>
                </div>
              </div>
              <div className="tt-7-subject">
                <div className="tt-7-s-i">
                  <img src="/Images/tt15.png" />
                </div>
                <div className="tt-7-s-inf">
                  <div>
                    <h4>
                      <Link>Spanish</Link>
                    </h4>
                  </div>
                  <div>
                    <p>£21/£39</p>
                  </div>
                </div>
              </div>
              <div className="tt-7-subject">
                <div className="tt-7-s-i">
                  <img src="/Images/tt16.png" />
                </div>
                <div className="tt-7-s-inf">
                  <div>
                    <h4>
                      <Link>French</Link>
                    </h4>
                  </div>
                  <div>
                    <p>£21/£39</p>
                  </div>
                </div>
              </div>
              <div className="tt-7-subject">
                <div className="tt-7-s-i">
                  <img src="/Images/tt17.png" />
                </div>
                <div className="tt-7-s-inf">
                  <div>
                    <h4>
                      <Link>German</Link>
                    </h4>
                  </div>
                  <div>
                    <p>£21/£39</p>
                  </div>
                </div>
              </div>
              <div className="tt-7-subject">
                <div className="tt-7-s-i">
                  <img src="/Images/tt18.png" />
                </div>
                <div className="tt-7-s-inf">
                  <div>
                    <h4>
                      <Link>Arabic</Link>
                    </h4>
                  </div>
                  <div>
                    <p>£21/£39</p>
                  </div>
                </div>
              </div>
              <div className="tt-7-subject">
                <div className="tt-7-s-i">
                  <img src="/Images/tt19.png" />
                </div>
                <div className="tt-7-s-inf">
                  <div>
                    <h4>
                      <Link>Computer Science</Link>
                    </h4>
                  </div>
                  <div>
                    <p>£21/£39</p>
                  </div>
                </div>
              </div>
              <div className="tt-7-subject">
                <div className="tt-7-s-i">
                  <img src="/Images/tt20.png" />
                </div>
                <div className="tt-7-s-inf">
                  <div>
                    <h4>
                      <Link>ICT</Link>
                    </h4>
                  </div>
                  <div>
                    <p>£21/£39</p>
                  </div>
                </div>
              </div>
              <div className="tt-7-subject">
                <div className="tt-7-s-i">
                  <img src="/Images/tt21.png" />
                </div>
                <div className="tt-7-s-inf">
                  <div>
                    <h4>
                      <Link>Law</Link>
                    </h4>
                  </div>
                  <div>
                    <p>£21/£39</p>
                  </div>
                </div>
              </div>
              <div className="tt-7-subject">
                <div className="tt-7-s-i">
                  <img src="/Images/tt1.png" />
                </div>
                <div className="tt-7-s-inf">
                  <div>
                    <h4>
                      <Link>Statistics</Link>
                    </h4>
                  </div>
                  <div>
                    <p>£21/£39</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Tutoring;
