import React, { useContext } from "react";
import "../../CSS/OnlineSchool/OurSecondarySchool.css";
import { MyContext } from "../HomeComponents/Context.js";
import { Link } from "react-router-dom";
function SecondarySchool() {
  const { feeCalculator, changeFeeCalculator } = useContext(MyContext);
  return (
    <>
      <div className="ss-main">
        <div className="ss-1">
          <h2>Our Online Secondary School</h2>
        </div>
        <div className="ss-2">
          <div className="ss-2-1">
            <img src="/Images/LibraryReading.png" alt="Picture" />
          </div>
          <div className="ss-2-2">
            <h6>
              We provide support and guidance to students from year 7 up to GCSE
              for many subjects. We understand that every student is unique and
              can find certain parts of the curriculum challenging. Our team of
              highly skilled teachers, tailor each lesson to unlock the
              student's potential and give them the confidence they need to
              succeed.
              <br /> We also offer for them to learn a new language, regardless
              of whether they would like to take it as a GCSE.
              <br /> On top of our homeschool package, each student has the
              opportunity to take private lessons.
            </h6>
          </div>
        </div>
        <div className="ss-3">
          <div className="ss-3-1">
            <div>
              <h6>
                Our online secondary school provides education for students aged
                11 to 16 years old, Year 7 to Year 11. Key Stage 3 (KS3) is for
                11 to 14 year olds, Year 7 to Year 9. Key Stage 4 (KS4) is for
                14 to 16 year olds, Year 10 to Year 11. We provide students with
                a broad curriculum, following the UK National curriculum & the
                Cambridge curriculum. We also offer education for both Edexcel &
                Cambridge exam boards. If you have any questions or concerns
                about year groups and Key Stages, you are welcome to get in
                touch with us via our email: enquiries@eureka-learning.co.uk
              </h6>
            </div>
            <div className="ss-3-1-button">
              <button>
                <Link to={"/appointments"}>
                  Book A Free Appointment With An Advisor
                </Link>
              </button>
            </div>
          </div>
          <div className="ss-3-2">
            <h6>
              Our virtual secondary school provides affordable, high quality
              online education to our students, via our expert, subject
              specialist online teachers. Our goal is to provide world class
              online lessons through live and real time online classes. We offer
              online lessons, from virtual morning classes to virtual evening
              classes, based around our online students' needs and schedules.
              Our online school takes pride in our flexible and personalised
              online learning approach that allows our students to excel and
              succeed with homeschooling. At Eureka Learning we are passionate
              about helping our students achieve their goals.
            </h6>
          </div>
        </div>
        <div className="ss-4">
          <div>
            <h2>Course catalog</h2>
          </div>
          <div className="ss-4-button">
            <button
              onClick={() => {
                changeFeeCalculator(true);
              }}
            >
              Free calculator
            </button>
          </div>
        </div>
        <div className="ss-5">
          <div className="ss-5-subject">
            <div className="ss-5-s-i">
              <img src="/Images/mathsss.png" />
            </div>
            <div className="ss-5-s-t">
              <h4>Maths</h4>
            </div>
            <div className="ss-5-s-d">September - June</div>
            <div className="ss-5-s-dsc">
              <p>
                Year 7 to Year 11, Cambridge iGCSE curriculum, 2-4 hours per
                week.
              </p>
            </div>
            <div className="ss-5-s-pai">
              <div className="ss-5-s-p">
                <div className="ss-5-s-p1">
                  <p>From:</p>
                </div>
                <div className="ss-5-s-p2">
                  <p>£749</p>
                </div>
              </div>
              <div className="ss-5-s-inf">
                <button>More information</button>
              </div>
            </div>
          </div>
          <div className="ss-5-subject">
            <div className="ss-5-s-i">
              <img src="/Images/2.png" />
            </div>
            <div className="ss-5-s-t">
              <h4>English Language</h4>
            </div>
            <div className="ss-5-s-d">September - June</div>
            <div className="ss-5-s-dsc">
              <p>
                Year 8 to Year 11, Cambridge iGCSE curriculum, 2 hours per week.
              </p>
            </div>
            <div className="ss-5-s-pai">
              <div className="ss-5-s-p">
                <div className="ss-5-s-p1">
                  <p>From:</p>
                </div>
                <div className="ss-5-s-p2">
                  <p>£749</p>
                </div>
              </div>
              <div className="ss-5-s-inf">
                <button>More information</button>
              </div>
            </div>
          </div>
          <div className="ss-5-subject">
            <div className="ss-5-s-i">
              <img src="/Images/3.png" />
            </div>
            <div className="ss-5-s-t">
              <h4>English Literature</h4>
            </div>
            <div className="ss-5-s-d">September - June</div>
            <div className="ss-5-s-dsc">
              <p>
                Year 8 to Year 11, Cambridge iGCSE curriculum, 2 hours per week.
              </p>
            </div>
            <div className="ss-5-s-pai">
              <div className="ss-5-s-p">
                <div className="ss-5-s-p1">
                  <p>From:</p>
                </div>
                <div className="ss-5-s-p2">
                  <p>£749</p>
                </div>
              </div>
              <div className="ss-5-s-inf">
                <button>More information</button>
              </div>
            </div>
          </div>
          <div className="ss-5-subject">
            <div className="ss-5-s-i">
              <img src="/Images/4.png" />
            </div>
            <div className="ss-5-s-t">
              <h4>English (Language & Literature)</h4>
            </div>
            <div className="ss-5-s-d">September - June</div>
            <div className="ss-5-s-dsc">
              <p>Year 7, Cambridge iGCSE curriculum, 2 hours per week.</p>
            </div>
            <div className="ss-5-s-pai">
              <div className="ss-5-s-p">
                <div className="ss-5-s-p1">
                  <p>From:</p>
                </div>
                <div className="ss-5-s-p2">
                  <p>£749</p>
                </div>
              </div>
              <div className="ss-5-s-inf">
                <button>More information</button>
              </div>
            </div>
          </div>
          <div className="ss-5-subject">
            <div className="ss-5-s-i">
              <img src="/Images/5.png" />
            </div>
            <div className="ss-5-s-t">
              <h4>Combined Science</h4>
            </div>
            <div className="ss-5-s-d">September - June</div>
            <div className="ss-5-s-dsc">
              <p>
                Year 7 to Year 11, Cambridge iGCSE curriculum, 2-3 hours per
                week.
              </p>
            </div>
            <div className="ss-5-s-pai">
              <div className="ss-5-s-p">
                <div className="ss-5-s-p1">
                  <p>From:</p>
                </div>
                <div className="ss-5-s-p2">
                  <p>£749</p>
                </div>
              </div>
              <div className="ss-5-s-inf">
                <button>More information</button>
              </div>
            </div>
          </div>
          <div className="ss-5-subject">
            <div className="ss-5-s-i">
              <img src="/Images/6.png" />
            </div>
            <div className="ss-5-s-t">
              <h4>Biology</h4>
            </div>
            <div className="ss-5-s-d">September - June</div>
            <div className="ss-5-s-dsc">
              <p>
                Year 10 to Year 11, Cambridge iGCSE curriculum, 2-3 hours per
                week.
              </p>
            </div>
            <div className="ss-5-s-pai">
              <div className="ss-5-s-p">
                <div className="ss-5-s-p1">
                  <p>From:</p>
                </div>
                <div className="ss-5-s-p2">
                  <p>£749</p>
                </div>
              </div>
              <div className="ss-5-s-inf">
                <button>More information</button>
              </div>
            </div>
          </div>
          <div className="ss-5-subject">
            <div className="ss-5-s-i">
              <img src="/Images/7.png" />
            </div>
            <div className="ss-5-s-t">
              <h4>Physics</h4>
            </div>
            <div className="ss-5-s-d">September - June</div>
            <div className="ss-5-s-dsc">
              <p>
                Year 10 to Year 11, Cambridge iGCSE curriculum, 2 hours per
                week.
              </p>
            </div>
            <div className="ss-5-s-pai">
              <div className="ss-5-s-p">
                <div className="ss-5-s-p1">
                  <p>From:</p>
                </div>
                <div className="ss-5-s-p2">
                  <p>£749</p>
                </div>
              </div>
              <div className="ss-5-s-inf">
                <button>More information</button>
              </div>
            </div>
          </div>
          <div className="ss-5-subject">
            <div className="ss-5-s-i">
              <img src="/Images/8.png" />
            </div>
            <div className="ss-5-s-t">
              <h4>Chemistry</h4>
            </div>
            <div className="ss-5-s-d">September - June</div>
            <div className="ss-5-s-dsc">
              <p>
                Year 10 to Year 11, Cambridge iGCSE curriculum, 2 hours per
                week.
              </p>
            </div>
            <div className="ss-5-s-pai">
              <div className="ss-5-s-p">
                <div className="ss-5-s-p1">
                  <p>From:</p>
                </div>
                <div className="ss-5-s-p2">
                  <p>£749</p>
                </div>
              </div>
              <div className="ss-5-s-inf">
                <button>More information</button>
              </div>
            </div>
          </div>
          <div className="ss-5-subject">
            <div className="ss-5-s-i">
              <img src="/Images/9.png" />
            </div>
            <div className="ss-5-s-t">
              <h4>History</h4>
            </div>
            <div className="ss-5-s-d">September - June</div>
            <div className="ss-5-s-dsc">
              <p>
                Year 7 to Year 11, Cambridge iGCSE curriculum, 2-3 hours per
                week.
              </p>
            </div>
            <div className="ss-5-s-pai">
              <div className="ss-5-s-p">
                <div className="ss-5-s-p1">
                  <p>From:</p>
                </div>
                <div className="ss-5-s-p2">
                  <p>£749</p>
                </div>
              </div>
              <div className="ss-5-s-inf">
                <button>More information</button>
              </div>
            </div>
          </div>
          <div className="ss-5-subject">
            <div className="ss-5-s-i">
              <img src="/Images/10.png" />
            </div>
            <div className="ss-5-s-t">
              <h4>Geography</h4>
            </div>
            <div className="ss-5-s-d">September - June</div>
            <div className="ss-5-s-dsc">
              <p>
                Year 7 to Year 11, Cambridge iGCSE curriculum, 2 hours per week.
              </p>
            </div>
            <div className="ss-5-s-pai">
              <div className="ss-5-s-p">
                <div className="ss-5-s-p1">
                  <p>From:</p>
                </div>
                <div className="ss-5-s-p2">
                  <p>£749</p>
                </div>
              </div>
              <div className="ss-5-s-inf">
                <button>More information</button>
              </div>
            </div>
          </div>
          <div className="ss-5-subject">
            <div className="ss-5-s-i">
              <img src="/Images/11.png" />
            </div>
            <div className="ss-5-s-t">
              <h4>Business</h4>
            </div>
            <div className="ss-5-s-d">September - June</div>
            <div className="ss-5-s-dsc">
              <p>
                Year 10 to Year 11, Cambridge iGCSE curriculum, 2 hours per
                week.
              </p>
            </div>
            <div className="ss-5-s-pai">
              <div className="ss-5-s-p">
                <div className="ss-5-s-p1">
                  <p>From:</p>
                </div>
                <div className="ss-5-s-p2">
                  <p>£749</p>
                </div>
              </div>
              <div className="ss-5-s-inf">
                <button>More information</button>
              </div>
            </div>
          </div>
          <div className="ss-5-subject">
            <div className="ss-5-s-i">
              <img src="/Images/12.png" />
            </div>
            <div className="ss-5-s-t">
              <h4>Accounting</h4>
            </div>
            <div className="ss-5-s-d">September - June</div>
            <div className="ss-5-s-dsc">
              <p>
                Year 10 to Year 11, Cambridge iGCSE curriculum, 2 hours per
                week.
              </p>
            </div>
            <div className="ss-5-s-pai">
              <div className="ss-5-s-p">
                <div className="ss-5-s-p1">
                  <p>From:</p>
                </div>
                <div className="ss-5-s-p2">
                  <p>£749</p>
                </div>
              </div>
              <div className="ss-5-s-inf">
                <button>More information</button>
              </div>
            </div>
          </div>
          <div className="ss-5-subject">
            <div className="ss-5-s-i">
              <img src="/Images/13.png" />
            </div>
            <div className="ss-5-s-t">
              <h4>Economics</h4>
            </div>
            <div className="ss-5-s-d">September - June</div>
            <div className="ss-5-s-dsc">
              <p>
                Year 10 to Year 11, Cambridge iGCSE curriculum, 2 hours per
                week.
              </p>
            </div>
            <div className="ss-5-s-pai">
              <div className="ss-5-s-p">
                <div className="ss-5-s-p1">
                  <p>From:</p>
                </div>
                <div className="ss-5-s-p2">
                  <p>£749</p>
                </div>
              </div>
              <div className="ss-5-s-inf">
                <button>More information</button>
              </div>
            </div>
          </div>
          <div className="ss-5-subject">
            <div className="ss-5-s-i">
              <img src="/Images/14.png" />
            </div>
            <div className="ss-5-s-t">
              <h4>Additional Maths</h4>
            </div>
            <div className="ss-5-s-d">September - June</div>
            <div className="ss-5-s-dsc">
              <p>
                Year 10 to Year 11, Cambridge iGCSE curriculum, 2 hours per
                week.
              </p>
            </div>
            <div className="ss-5-s-pai">
              <div className="ss-5-s-p">
                <div className="ss-5-s-p1">
                  <p>From:</p>
                </div>
                <div className="ss-5-s-p2">
                  <p>£749</p>
                </div>
              </div>
              <div className="ss-5-s-inf">
                <button>More information</button>
              </div>
            </div>
          </div>
          <div className="ss-5-subject">
            <div className="ss-5-s-i">
              <img src="/Images/15.png" />
            </div>
            <div className="ss-5-s-t">
              <h4>Spanish</h4>
            </div>
            <div className="ss-5-s-d">September - June</div>
            <div className="ss-5-s-dsc">
              <p>
                Year 7 to Year 11, Cambridge iGCSE curriculum, 1-2 hours per
                week.
              </p>
            </div>
            <div className="ss-5-s-pai">
              <div className="ss-5-s-p">
                <div className="ss-5-s-p1">
                  <p>From:</p>
                </div>
                <div className="ss-5-s-p2">
                  <p>£749</p>
                </div>
              </div>
              <div className="ss-5-s-inf">
                <button>More information</button>
              </div>
            </div>
          </div>
          <div className="ss-5-subject">
            <div className="ss-5-s-i">
              <img src="/Images/16.png" />
            </div>
            <div className="ss-5-s-t">
              <h4>French</h4>
            </div>
            <div className="ss-5-s-d">September - June</div>
            <div className="ss-5-s-dsc">
              <p>
                Year 7 to Year 11, Cambridge iGCSE curriculum, 1-2 hours per
                week.
              </p>
            </div>
            <div className="ss-5-s-pai">
              <div className="ss-5-s-p">
                <div className="ss-5-s-p1">
                  <p>From:</p>
                </div>
                <div className="ss-5-s-p2">
                  <p>£749</p>
                </div>
              </div>
              <div className="ss-5-s-inf">
                <button>More information</button>
              </div>
            </div>
          </div>
          <div className="ss-5-subject">
            <div className="ss-5-s-i">
              <img src="/Images/17.png" />
            </div>
            <div className="ss-5-s-t">
              <h4>German</h4>
            </div>
            <div className="ss-5-s-d">September - June</div>
            <div className="ss-5-s-dsc">
              <p>
                Year 7 to Year 11, Cambridge iGCSE curriculum, 2 hours per week.
              </p>
            </div>
            <div className="ss-5-s-pai">
              <div className="ss-5-s-p">
                <div className="ss-5-s-p1">
                  <p>From:</p>
                </div>
                <div className="ss-5-s-p2">
                  <p>£749</p>
                </div>
              </div>
              <div className="ss-5-s-inf">
                <button>More information</button>
              </div>
            </div>
          </div>
          <div className="ss-5-subject">
            <div className="ss-5-s-i">
              <img src="/Images/18.png" />
            </div>
            <div className="ss-5-s-t">
              <h4>Computer Science</h4>
            </div>
            <div className="ss-5-s-d">September - June</div>
            <div className="ss-5-s-dsc">
              <p>
                Year 7 to Year 11, Cambridge iGCSE curriculum, 2 hours per week.
              </p>
            </div>
            <div className="ss-5-s-pai">
              <div className="ss-5-s-p">
                <div className="ss-5-s-p1">
                  <p>From:</p>
                </div>
                <div className="ss-5-s-p2">
                  <p>£749</p>
                </div>
              </div>
              <div className="ss-5-s-inf">
                <button>More information</button>
              </div>
            </div>
          </div>
          <div className="ss-5-subject">
            <div className="ss-5-s-i">
              <img src="/Images/19.png" />
            </div>
            <div className="ss-5-s-t">
              <h4>ICT</h4>
            </div>
            <div className="ss-5-s-d">September - June</div>
            <div className="ss-5-s-dsc">
              <p>
                Year 7 to Year 11, Cambridge iGCSE curriculum, 2 hours per week.
              </p>
            </div>
            <div className="ss-5-s-pai">
              <div className="ss-5-s-p">
                <div className="ss-5-s-p1">
                  <p>From:</p>
                </div>
                <div className="ss-5-s-p2">
                  <p>£749</p>
                </div>
              </div>
              <div className="ss-5-s-inf">
                <button>More information</button>
              </div>
            </div>
          </div>
          <div className="ss-5-subject">
            <div className="ss-5-s-i">
              <img src="/Images/20.png" />
            </div>
            <div className="ss-5-s-t">
              <h4>Marine Science</h4>
            </div>
            <div className="ss-5-s-d">September - June</div>
            <div className="ss-5-s-dsc">
              <p>
                Year 10 to Year 11, Cambridge iGCSE curriculum, 2 hours per
                week.
              </p>
            </div>
            <div className="ss-5-s-pai">
              <div className="ss-5-s-p">
                <div className="ss-5-s-p1">
                  <p>From:</p>
                </div>
                <div className="ss-5-s-p2">
                  <p>£749</p>
                </div>
              </div>
              <div className="ss-5-s-inf">
                <button>More information</button>
              </div>
            </div>
          </div>
          <div className="ss-5-subject">
            <div className="ss-5-s-i">
              <img src="/Images/22.png" />
            </div>
            <div className="ss-5-s-t">
              <h4>Religious Studies</h4>
            </div>
            <div className="ss-5-s-d">September - June</div>
            <div className="ss-5-s-dsc">
              <p>
                Year 7 to Year 11, Cambridge iGCSE curriculum, 2 hours per week.
              </p>
            </div>
            <div className="ss-5-s-pai">
              <div className="ss-5-s-p">
                <div className="ss-5-s-p1">
                  <p>From:</p>
                </div>
                <div className="ss-5-s-p2">
                  <p>£749</p>
                </div>
              </div>
              <div className="ss-5-s-inf">
                <button>More information</button>
              </div>
            </div>
          </div>
          <div className="ss-5-subject">
            <div className="ss-5-s-i">
              <img src="/Images/23.png" />
            </div>
            <div className="ss-5-s-t">
              <h4>Latin</h4>
            </div>
            <div className="ss-5-s-d">September - June</div>
            <div className="ss-5-s-dsc">
              <p>
                Year 7 to Year 11, Cambridge iGCSE curriculum, 2 hours per week.
              </p>
            </div>
            <div className="ss-5-s-pai">
              <div className="ss-5-s-p">
                <div className="ss-5-s-p1">
                  <p>From:</p>
                </div>
                <div className="ss-5-s-p2">
                  <p>£749</p>
                </div>
              </div>
              <div className="ss-5-s-inf">
                <button>More information</button>
              </div>
            </div>
          </div>
          <div className="ss-5-subject">
            <div className="ss-5-s-i">
              <img src="/Images/24.png" />
            </div>
            <div className="ss-5-s-t">
              <h4>Psychology</h4>
            </div>
            <div className="ss-5-s-d">September - June</div>
            <div className="ss-5-s-dsc">
              <p>
                Year 10 to Year 11, Cambridge iGCSE curriculum, 2 hours per
                week.
              </p>
            </div>
            <div className="ss-5-s-pai">
              <div className="ss-5-s-p">
                <div className="ss-5-s-p1">
                  <p>From:</p>
                </div>
                <div className="ss-5-s-p2">
                  <p>£749</p>
                </div>
              </div>
              <div className="ss-5-s-inf">
                <button>More information</button>
              </div>
            </div>
          </div>
          <div className="ss-5-subject">
            <div className="ss-5-s-i">
              <img src="/Images/25.png" />
            </div>
            <div className="ss-5-s-t">
              <h4>Travel & Tourism</h4>
            </div>
            <div className="ss-5-s-d">September - June</div>
            <div className="ss-5-s-dsc">
              <p>
                Year 10 to Year 11, Cambridge iGCSE curriculum, 2 hours per
                week.
              </p>
            </div>
            <div className="ss-5-s-pai">
              <div className="ss-5-s-p">
                <div className="ss-5-s-p1">
                  <p>From:</p>
                </div>
                <div className="ss-5-s-p2">
                  <p>£749</p>
                </div>
              </div>
              <div className="ss-5-s-inf">
                <button>More information</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SecondarySchool;
