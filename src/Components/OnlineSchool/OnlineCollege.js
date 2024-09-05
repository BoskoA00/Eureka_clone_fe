import React, { useContext } from "react";
import "../../CSS/OnlineSchool/OurOnlineCollege.css";
import { MyContext } from "../HomeComponents/Context";
import { Link } from "react-router-dom";

function OnlineCollege() {
  const { feeCalculator, changeFeeCalculator } = useContext(MyContext);
  return (
    <div className="oc-main">
      <div className="oc-1">
        <h2>Our Online College</h2>
      </div>
      <div className="oc-2">
        <div className="oc-2-1">
          <img src="/Images/College Students.png" alt="Picture" />
        </div>
        <div className="oc-2-2">
          <h6>
            Our online college, similar to a face-to-face college, offers a
            range of courses. There are several subjects taught at AS and
            A-Level, as well as courses for GCSE for retakers or anyone post 18
            wishing to do a GCSE. On top of this, there are courses for
            functional skills in maths and English.
            <br /> Each individual can tailor their subject combination to their
            requirements.
            <br /> On top of our homeschool package, each student has the
            opportunity to take private lessons.
            <br /> We provide students with a broad and creative curriculum,
            following the UK National and Cambridge curriculums.
            <br />
            <br />
          </h6>
        </div>
      </div>
      <div className="oc-3">
        <div className="oc-3-1">
          <div>
            <h6>
              Our online college/sixth form provides online education to
              students aged 16 to 18 years old, Year 12 to Year 13. In the UK,
              college is presented at a Key Stage 5 (KS5) and A-Level grade. If
              you have any enquiries about our online college or Key Stages, you
              are welcome to contact us via our email:
              <br />
              <a
                href="mailto:enquiries@eureka-learning.co.uk?subject=Enrolment form"
                target="_blank"
              >
                enquiries@eureka-learning.co.uk
              </a>
            </h6>
          </div>
          <div className="oc-3-1-button">
            <button>
              <Link to={"/appointments"}>
                Book A Free Appointment With An Advisor
              </Link>
            </button>
          </div>
        </div>
        <div className="oc-3-2">
          <h6>
            Our online college provides outstanding British education online
            through our highly qualified, expert teachers. We have virtual
            morning lessons through to virtual evening classes. This is so our
            online students have flexible online learning around their
            activities, schedules, and time zones. Our virtual college also
            supplies a broad and creative online curriculum in highly engaging
            and interactive live online classes. We take pride in helping our
            students achieve their goals and excel in their online studies.
          </h6>
        </div>
      </div>
      <div className="oc-4">
        <div className="oc-4-titles">
          <div>
            <h2>Class catalog</h2>
          </div>
          <div>
            <h2>
              AS and A-level <br /> (Fees are annual)
            </h2>
          </div>
        </div>
        <div className="oc-4-button">
          <button onClick={() => changeFeeCalculator(true)}>
            Fee calculator
          </button>
        </div>
      </div>
      <div className="oc-5">
        <div className="oc-55">
          <div className="oc-5-subject">
            <div className="oc-5-s-img">
              <img src="/Images/c1.png" alt="Picture" />
              <div className="oc-5-s-t">
                <h4>Maths</h4>
              </div>
            </div>
            <div className="oc-5-s-i">
              <div className="oc-5-s-d">
                <p>September - June</p>
              </div>
              <div className="oc-5-s-dsc">
                <p>Cambridge AS and A-level curriculum, 3-4 hours per week.</p>
              </div>
              <div className="oc-5-s-pai">
                <div className="oc-5-s-p">
                  <div className="oc-5-s-p1">
                    <p>From:</p>
                  </div>
                  <div className="oc-5-s-p2">£1,685</div>
                </div>
                <div className="oc-5-s-inf">
                  <Link to={"/contactonlineschool"}>
                    <button>Enquire now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="oc-5-subject">
            <div className="oc-5-s-img">
              <img src="/Images/c2.png" alt="Picture" />
              <div className="oc-5-s-t">
                <h4>English Language</h4>
              </div>
            </div>
            <div className="oc-5-s-i">
              <div className="oc-5-s-d">
                <p>September - June</p>
              </div>
              <div className="oc-5-s-dsc">
                <p>Cambridge AS and A-level curriculum, 3-4 hours per week.</p>
              </div>
              <div className="oc-5-s-pai">
                <div className="oc-5-s-p">
                  <div className="oc-5-s-p1">
                    <p>From:</p>
                  </div>
                  <div className="oc-5-s-p2">£1,685</div>
                </div>
                <div className="oc-5-s-inf">
                  <Link to={"/contactonlineschool"}>
                    <button>Enquire now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="oc-5-subject">
            <div className="oc-5-s-img">
              <img src="/Images/c3.png" alt="Picture" />
              <div className="oc-5-s-t">
                <h4>English Literature</h4>
              </div>
            </div>
            <div className="oc-5-s-i">
              <div className="oc-5-s-d">
                <p>September - June</p>
              </div>
              <div className="oc-5-s-dsc">
                <p>Cambridge AS and A-level curriculum, 3-4 hours per week.</p>
              </div>
              <div className="oc-5-s-pai">
                <div className="oc-5-s-p">
                  <div className="oc-5-s-p1">
                    <p>From:</p>
                  </div>
                  <div className="oc-5-s-p2">£1,685</div>
                </div>
                <div className="oc-5-s-inf">
                  <Link to={"/contactonlineschool"}>
                    <button>Enquire now</button>
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="oc-5-subject">
            <div className="oc-5-s-img">
              <img src="/Images/c4.png" alt="Picture" />
              <div className="oc-5-s-t">
                <h4>Biology</h4>
              </div>
            </div>
            <div className="oc-5-s-i">
              <div className="oc-5-s-d">
                <p>September - June</p>
              </div>
              <div className="oc-5-s-dsc">
                <p>Cambridge AS and A-level curriculum, 3-4 hours per week.</p>
              </div>
              <div className="oc-5-s-pai">
                <div className="oc-5-s-p">
                  <div className="oc-5-s-p1">
                    <p>From:</p>
                  </div>
                  <div className="oc-5-s-p2">£1,685</div>
                </div>
                <div className="oc-5-s-inf">
                  <Link to={"/contactonlineschool"}>
                    <button>Enquire now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="oc-5-subject">
            <div className="oc-5-s-img">
              <img src="/Images/c5.png" alt="Picture" />
              <div className="oc-5-s-t">
                <h4>Chemistry</h4>
              </div>
            </div>
            <div className="oc-5-s-i">
              <div className="oc-5-s-d">
                <p>September - June</p>
              </div>
              <div className="oc-5-s-dsc">
                <p>Cambridge AS and A-level curriculum, 3-4 hours per week.</p>
              </div>
              <div className="oc-5-s-pai">
                <div className="oc-5-s-p">
                  <div className="oc-5-s-p1">
                    <p>From:</p>
                  </div>
                  <div className="oc-5-s-p2">£1,685</div>
                </div>
                <div className="oc-5-s-inf">
                  <Link to={"/contactonlineschool"}>
                    <button>Enquire now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="oc-5-subject">
            <div className="oc-5-s-img">
              <img src="/Images/c6.png" alt="Picture" />
              <div className="oc-5-s-t">
                <h4>Physics</h4>
              </div>
            </div>
            <div className="oc-5-s-i">
              <div className="oc-5-s-d">
                <p>September - June</p>
              </div>
              <div className="oc-5-s-dsc">
                <p>Cambridge AS and A-level curriculum, 3-4 hours per week.</p>
              </div>
              <div className="oc-5-s-pai">
                <div className="oc-5-s-p">
                  <div className="oc-5-s-p1">
                    <p>From:</p>
                  </div>
                  <div className="oc-5-s-p2">£1,685</div>
                </div>
                <div className="oc-5-s-inf">
                  <Link to={"/contactonlineschool"}>
                    <button>Enquire now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="oc-5-subject">
            <div className="oc-5-s-img">
              <img src="/Images/c7.png" alt="Picture" />
              <div className="oc-5-s-t">
                <h4>History</h4>
              </div>
            </div>
            <div className="oc-5-s-i">
              <div className="oc-5-s-d">
                <p>September - June</p>
              </div>
              <div className="oc-5-s-dsc">
                <p>Cambridge AS and A-level curriculum, 3-4 hours per week.</p>
              </div>
              <div className="oc-5-s-pai">
                <div className="oc-5-s-p">
                  <div className="oc-5-s-p1">
                    <p>From:</p>
                  </div>
                  <div className="oc-5-s-p2">£1,685</div>
                </div>
                <div className="oc-5-s-inf">
                  <Link to={"/contactonlineschool"}>
                    <button>Enquire now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="oc-5-subject">
            <div className="oc-5-s-img">
              <img src="/Images/c8.png" alt="Picture" />
              <div className="oc-5-s-t">
                <h4>Geography</h4>
              </div>
            </div>
            <div className="oc-5-s-i">
              <div className="oc-5-s-d">
                <p>September - June</p>
              </div>
              <div className="oc-5-s-dsc">
                <p>Cambridge AS and A-level curriculum, 3-4 hours per week.</p>
              </div>
              <div className="oc-5-s-pai">
                <div className="oc-5-s-p">
                  <div className="oc-5-s-p1">
                    <p>From:</p>
                  </div>
                  <div className="oc-5-s-p2">£1,685</div>
                </div>
                <div className="oc-5-s-inf">
                  <Link to={"/contactonlineschool"}>
                    <button>Enquire now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="oc-5-subject">
            <div className="oc-5-s-img">
              <img src="/Images/c9.png" alt="Picture" />
              <div className="oc-5-s-t">
                <h4>Business</h4>
              </div>
            </div>
            <div className="oc-5-s-i">
              <div className="oc-5-s-d">
                <p>September - June</p>
              </div>
              <div className="oc-5-s-dsc">
                <p>Cambridge AS and A-level curriculum, 3-4 hours per week.</p>
              </div>
              <div className="oc-5-s-pai">
                <div className="oc-5-s-p">
                  <div className="oc-5-s-p1">
                    <p>From:</p>
                  </div>
                  <div className="oc-5-s-p2">£1,685</div>
                </div>
                <div className="oc-5-s-inf">
                  <Link to={"/contactonlineschool"}>
                    <button>Enquire now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="oc-5-subject">
            <div className="oc-5-s-img">
              <img src="/Images/c10.png" alt="Picture" />
              <div className="oc-5-s-t">
                <h4>Economics</h4>
              </div>
            </div>
            <div className="oc-5-s-i">
              <div className="oc-5-s-d">
                <p>September - June</p>
              </div>
              <div className="oc-5-s-dsc">
                <p>Cambridge AS and A-level curriculum, 3-4 hours per week.</p>
              </div>
              <div className="oc-5-s-pai">
                <div className="oc-5-s-p">
                  <div className="oc-5-s-p1">
                    <p>From:</p>
                  </div>
                  <div className="oc-5-s-p2">£1,685</div>
                </div>
                <div className="oc-5-s-inf">
                  <Link to={"/contactonlineschool"}>
                    <button>Enquire now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="oc-5-subject">
            <div className="oc-5-s-img">
              <img src="/Images/c11.png" alt="Picture" />
              <div className="oc-5-s-t">
                <h4>Accounting</h4>
              </div>
            </div>
            <div className="oc-5-s-i">
              <div className="oc-5-s-d">
                <p>September - June</p>
              </div>
              <div className="oc-5-s-dsc">
                <p>Cambridge AS and A-level curriculum, 3-4 hours per week.</p>
              </div>
              <div className="oc-5-s-pai">
                <div className="oc-5-s-p">
                  <div className="oc-5-s-p1">
                    <p>From:</p>
                  </div>
                  <div className="oc-5-s-p2">£1,685</div>
                </div>
                <div className="oc-5-s-inf">
                  <Link to={"/contactonlineschool"}>
                    <button>Enquire now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="oc-5-subject">
            <div className="oc-5-s-img">
              <img src="/Images/c12.png" alt="Picture" />
              <div className="oc-5-s-t">
                <h4>Law</h4>
              </div>
            </div>
            <div className="oc-5-s-i">
              <div className="oc-5-s-d">
                <p>September - June</p>
              </div>
              <div className="oc-5-s-dsc">
                <p>Cambridge AS and A-level curriculum, 3-4 hours per week.</p>
              </div>
              <div className="oc-5-s-pai">
                <div className="oc-5-s-p">
                  <div className="oc-5-s-p1">
                    <p>From:</p>
                  </div>
                  <div className="oc-5-s-p2">£1,685</div>
                </div>
                <div className="oc-5-s-inf">
                  <Link to={"/contactonlineschool"}>
                    <button>Enquire now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="oc-5-subject">
            <div className="oc-5-s-img">
              <img src="/Images/c13.png" alt="Picture" />
              <div className="oc-5-s-t">
                <h4>Further Maths</h4>
              </div>
            </div>
            <div className="oc-5-s-i">
              <div className="oc-5-s-d">
                <p>September - June</p>
              </div>
              <div className="oc-5-s-dsc">
                <p>Cambridge AS and A-level curriculum, 3-4 hours per week.</p>
              </div>
              <div className="oc-5-s-pai">
                <div className="oc-5-s-p">
                  <div className="oc-5-s-p1">
                    <p>From:</p>
                  </div>
                  <div className="oc-5-s-p2">£1,685</div>
                </div>
                <div className="oc-5-s-inf">
                  <Link to={"/contactonlineschool"}>
                    <button>Enquire now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="oc-5-subject">
            <div className="oc-5-s-img">
              <img src="/Images/c14.png" alt="Picture" />
              <div className="oc-5-s-t">
                <h4>Information Technology</h4>
              </div>
            </div>
            <div className="oc-5-s-i">
              <div className="oc-5-s-d">
                <p>September - June</p>
              </div>
              <div className="oc-5-s-dsc">
                <p>Cambridge AS and A-level curriculum, 3-4 hours per week.</p>
              </div>
              <div className="oc-5-s-pai">
                <div className="oc-5-s-p">
                  <div className="oc-5-s-p1">
                    <p>From:</p>
                  </div>
                  <div className="oc-5-s-p2">£1,685</div>
                </div>
                <div className="oc-5-s-inf">
                  <Link to={"/contactonlineschool"}>
                    <button>Enquire now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="oc-5-subject">
            <div className="oc-5-s-img">
              <img src="/Images/c15.png" alt="Picture" />
              <div className="oc-5-s-t">
                <h4>Computer Science</h4>
              </div>
            </div>
            <div className="oc-5-s-i">
              <div className="oc-5-s-d">
                <p>September - June</p>
              </div>
              <div className="oc-5-s-dsc">
                <p>Cambridge AS and A-level curriculum, 3-4 hours per week.</p>
              </div>
              <div className="oc-5-s-pai">
                <div className="oc-5-s-p">
                  <div className="oc-5-s-p1">
                    <p>From:</p>
                  </div>
                  <div className="oc-5-s-p2">£1,685</div>
                </div>
                <div className="oc-5-s-inf">
                  <Link to={"/contactonlineschool"}>
                    <button>Enquire now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="oc-5-subject">
            <div className="oc-5-s-img">
              <img src="/Images/c16.png" alt="Picture" />
              <div className="oc-5-s-t">
                <h4>Travel & Tourism</h4>
              </div>
            </div>
            <div className="oc-5-s-i">
              <div className="oc-5-s-d">
                <p>September - June</p>
              </div>
              <div className="oc-5-s-dsc">
                <p>Cambridge AS and A-level curriculum, 3-4 hours per week.</p>
              </div>
              <div className="oc-5-s-pai">
                <div className="oc-5-s-p">
                  <div className="oc-5-s-p1">
                    <p>From:</p>
                  </div>
                  <div className="oc-5-s-p2">£1,685</div>
                </div>
                <div className="oc-5-s-inf">
                  <Link to={"/contactonlineschool"}>
                    <button>Enquire now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="oc-5-subject">
            <div className="oc-5-s-img">
              <img src="/Images/c17.png" alt="Picture" />
              <div className="oc-5-s-t">
                <h4>Psychology</h4>
              </div>
            </div>
            <div className="oc-5-s-i">
              <div className="oc-5-s-d">
                <p>September - June</p>
              </div>
              <div className="oc-5-s-dsc">
                <p>Cambridge AS and A-level curriculum, 3-4 hours per week.</p>
              </div>
              <div className="oc-5-s-pai">
                <div className="oc-5-s-p">
                  <div className="oc-5-s-p1">
                    <p>From:</p>
                  </div>
                  <div className="oc-5-s-p2">£1,685</div>
                </div>
                <div className="oc-5-s-inf">
                  <Link to={"/contactonlineschool"}>
                    <button>Enquire now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="oc-5-subject">
            <div className="oc-5-s-img">
              <img src="/Images/c18.png" alt="Picture" />
              <div className="oc-5-s-t">
                <h4>Sociology</h4>
              </div>
            </div>
            <div className="oc-5-s-i">
              <div className="oc-5-s-d">
                <p>September - June</p>
              </div>
              <div className="oc-5-s-dsc">
                <p>Cambridge AS and A-level curriculum, 3-4 hours per week.</p>
              </div>
              <div className="oc-5-s-pai">
                <div className="oc-5-s-p">
                  <div className="oc-5-s-p1">
                    <p>From:</p>
                  </div>
                  <div className="oc-5-s-p2">£1,685</div>
                </div>
                <div className="oc-5-s-inf">
                  <Link to={"/contactonlineschool"}>
                    <button>Enquire now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="oc-5-subject">
            <div className="oc-5-s-img">
              <img src="/Images/c19.png" alt="Picture" />
              <div className="oc-5-s-t">
                <h4>Spanish</h4>
              </div>
            </div>
            <div className="oc-5-s-i">
              <div className="oc-5-s-d">
                <p>September - June</p>
              </div>
              <div className="oc-5-s-dsc">
                <p>Cambridge AS and A-level curriculum, 3-4 hours per week.</p>
              </div>
              <div className="oc-5-s-pai">
                <div className="oc-5-s-p">
                  <div className="oc-5-s-p1">
                    <p>From:</p>
                  </div>
                  <div className="oc-5-s-p2">£1,685</div>
                </div>
                <div className="oc-5-s-inf">
                  <Link to={"/contactonlineschool"}>
                    <button>Enquire now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="oc-5-subject">
            <div className="oc-5-s-img">
              <img src="/Images/c20.png" alt="Picture" />
              <div className="oc-5-s-t">
                <h4>French</h4>
              </div>
            </div>
            <div className="oc-5-s-i">
              <div className="oc-5-s-d">
                <p>September - June</p>
              </div>
              <div className="oc-5-s-dsc">
                <p>Cambridge AS and A-level curriculum, 3-4 hours per week.</p>
              </div>
              <div className="oc-5-s-pai">
                <div className="oc-5-s-p">
                  <div className="oc-5-s-p1">
                    <p>From:</p>
                  </div>
                  <div className="oc-5-s-p2">£1,685</div>
                </div>
                <div className="oc-5-s-inf">
                  <Link to={"/contactonlineschool"}>
                    <button>Enquire now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="oc-5-subject">
            <div className="oc-5-s-img">
              <img src="/Images/c21.png" alt="Picture" />
              <div className="oc-5-s-t">
                <h4>German</h4>
              </div>
            </div>
            <div className="oc-5-s-i">
              <div className="oc-5-s-d">
                <p>September - June</p>
              </div>
              <div className="oc-5-s-dsc">
                <p>Cambridge AS and A-level curriculum, 3-4 hours per week.</p>
              </div>
              <div className="oc-5-s-pai">
                <div className="oc-5-s-p">
                  <div className="oc-5-s-p1">
                    <p>From:</p>
                  </div>
                  <div className="oc-5-s-p2">£1,685</div>
                </div>
                <div className="oc-5-s-inf">
                  <Link to={"/contactonlineschool"}>
                    <button>Enquire now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="oc-5-subject">
            <div className="oc-5-s-img">
              <img src="/Images/c22.png" alt="Picture" />
              <div className="oc-5-s-t">
                <h4>Arabic</h4>
              </div>
            </div>
            <div className="oc-5-s-i">
              <div className="oc-5-s-d">
                <p>September - June</p>
              </div>
              <div className="oc-5-s-dsc">
                <p>Cambridge AS and A-level curriculum, 3-4 hours per week.</p>
              </div>
              <div className="oc-5-s-pai">
                <div className="oc-5-s-p">
                  <div className="oc-5-s-p1">
                    <p>From:</p>
                  </div>
                  <div className="oc-5-s-p2">£1,685</div>
                </div>
                <div className="oc-5-s-inf">
                  <Link to={"/contactonlineschool"}>
                    <button>Enquire now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="oc-5-subject">
            <div className="oc-5-s-img">
              <img src="/Images/c23.png" alt="Picture" />
              <div className="oc-5-s-t">
                <h4>Portugese</h4>
              </div>
            </div>
            <div className="oc-5-s-i">
              <div className="oc-5-s-d">
                <p>September - June</p>
              </div>
              <div className="oc-5-s-dsc">
                <p>Cambridge AS and A-level curriculum, 3-4 hours per week.</p>
              </div>
              <div className="oc-5-s-pai">
                <div className="oc-5-s-p">
                  <div className="oc-5-s-p1">
                    <p>From:</p>
                  </div>
                  <div className="oc-5-s-p2">£1,685</div>
                </div>
                <div className="oc-5-s-inf">
                  <Link to={"/contactonlineschool"}>
                    <button>Enquire now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="oc-5-subject">
            <div className="oc-5-s-img">
              <img src="/Images/c24.png" alt="Picture" />
              <div className="oc-5-s-t">
                <h4>Religious Studies</h4>
              </div>
            </div>
            <div className="oc-5-s-i">
              <div className="oc-5-s-d">
                <p>September - June</p>
              </div>
              <div className="oc-5-s-dsc">
                <p>Cambridge AS and A-level curriculum, 3-4 hours per week.</p>
              </div>
              <div className="oc-5-s-pai">
                <div className="oc-5-s-p">
                  <div className="oc-5-s-p1">
                    <p>From:</p>
                  </div>
                  <div className="oc-5-s-p2">£1,685</div>
                </div>
                <div className="oc-5-s-inf">
                  <Link to={"/contactonlineschool"}>
                    <button>Enquire now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="oc-5-subject">
            <div className="oc-5-s-img">
              <img src="/Images/c25.png" alt="Picture" />
              <div className="oc-5-s-t">
                <h4>Marine Science</h4>
              </div>
            </div>
            <div className="oc-5-s-i">
              <div className="oc-5-s-d">
                <p>September - June</p>
              </div>
              <div className="oc-5-s-dsc">
                <p>Cambridge AS and A-level curriculum, 3-4 hours per week.</p>
              </div>
              <div className="oc-5-s-pai">
                <div className="oc-5-s-p">
                  <div className="oc-5-s-p1">
                    <p>From:</p>
                  </div>
                  <div className="oc-5-s-p2">£1,685</div>
                </div>
                <div className="oc-5-s-inf">
                  <Link to={"/contactonlineschool"}>
                    <button>Enquire now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnlineCollege;
