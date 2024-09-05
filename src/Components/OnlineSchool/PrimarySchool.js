import React, { useContext } from "react";
import "../../CSS/OnlineSchool/OurPrimarySchool.css";
import { MyContext } from "../HomeComponents/Context.js";
function PrimarySchool() {
  const { feeCalculator, changeFeeCalculator } = useContext(MyContext);
  return (
    <>
      <div className="ps-main">
        <div className="ps-1">
          <h2>Our Online Primary School</h2>
        </div>
        <div className="ps-2">
          <div className="ps-2-1">
            <img src="/Images/HandmadeSchoolCone.png" />
          </div>
          <div className="ps-2-2">
            <h6>
              We provide support and guidance to KS1 & KS2 students for their
              core subjects. We understand that every child is unique and can
              find certain parts of the curriculum challenging. Our team of
              highly skilled teachers, tailor each lesson to unlock your child’s
              potential and give them the confidence they need to succeed.
              <br /> We also create the opportunity for children to learn a new
              language. Currently, we can offer Spanish and French lessons. With
              languages becoming an essential part of a school’s curriculum and
              GCSE exam papers, learning a language at an early age is
              beneficial to prepare each child.
            </h6>
          </div>
        </div>
        <div className="ps-3">
          <button
            onClick={() => {
              changeFeeCalculator(true);
            }}
          >
            See fee calculator for information on cost
          </button>
        </div>
        <div className="ps-4">
          <div className="ps-4-1">
            <div style={{ marginBottom: "45px" }}>
              <h6>
                Our online primary school provides virtual lessons to children
                aged 5 to 11 years old, Year 1 to Year 6.
                <br /> Key Stage 1 (KS1) is the level taught to students aged 5
                to 7 years old, Year 1 to Year 2. Key Stage 2 is the level
                taught to students aged 7 to 11 years old, Year 3 to Year 6. If
                you have any questions or concerns about the Key Stage or Year
                for your child, you are welcome to email us:
                <br />
                <a
                  href="mailto:enquiries@eureka-learning.co.uk?subject=Enrolment form"
                  target="_blank"
                >
                  enquiries@eureka-learning.co.uk
                </a>
              </h6>
            </div>
            <div className="ps-4-1-button">
              {" "}
              <a
                href="mailto:enquiries@eureka-learning.co.uk?subject=Enrolment form"
                target="_blank"
              >
                Contact us
              </a>
            </div>
          </div>
          <div className="ps-4-2">
            <h6>
              Our online primary school provides world class, high quality
              British education to our online students. Our expertly trained and
              qualified teachers deliver online lessons that are highly engaging
              and interactive. We pride ourselves in making online classes fun
              whilst still helping our students excel and succeed in their
              learning.
              <br />
              <br />
              At Eureka Learning, we provide a creative and broad curriculum,
              following both the Cambridge & UK National curriculum, alongside a
              flexible online learning approach. This is beneficial for our
              online students as they have time for their learning and the
              activities/hobbies they are passionate about.
            </h6>
          </div>
        </div>
        <div className="ps-4-line"></div>
        <div className="ps-5">
          <h2>Our Online Primary School Fees</h2>
        </div>
        <div className="ps-6">
          <h6>
            Core subjects (Maths & English) starting from: £560
            <br /> Price per individual subject starting from: £280
          </h6>
        </div>
        <div className="ps-7">
          <div className="ps-7-div">
            <div className="ps-7-div-subject">
              <div className="ps-7-s-image">
                <img src="/Images/English.png" />
              </div>
              <div className="ps-7-s-name">
                <h6>English</h6>
              </div>
            </div>
            <div className="ps-7-div-subject">
              <div className="ps-7-s-image">
                <img src="/Images/German.png" />
              </div>
              <div className="ps-7-s-name">
                <h6>German</h6>
              </div>
            </div>
            <div className="ps-7-div-subject">
              <div className="ps-7-s-image">
                <img src="/Images/Mathemathics.png" />
              </div>
              <div className="ps-7-s-name">
                <h6>Mathematics</h6>
              </div>
            </div>
          </div>
          <div className="ps-7-div">
            <div className="ps-7-div-subject">
              <div className="ps-7-s-image">
                <img src="/Images/Science.png" />
              </div>
              <div className="ps-7-s-name">
                <h6>Science</h6>
              </div>
            </div>
            <div className="ps-7-div-subject">
              <div className="ps-7-s-image">
                <img src="/Images/GP.png" />
              </div>
              <div className="ps-7-s-name">
                <h6>Global Perspectives</h6>
              </div>
            </div>
            <div className="ps-7-div-subject">
              <div className="ps-7-s-image">
                <img src="/Images/History.png" />
              </div>
              <div className="ps-7-s-name">
                <h6>History</h6>
              </div>
            </div>
          </div>
          <div className="ps-7-div">
            <div className="ps-7-div-subject">
              <div className="ps-7-s-image">
                <img src="/Images/AD.png" />
              </div>
              <div className="ps-7-s-name">
                <h6>Art & Desing</h6>
              </div>
            </div>
            <div className="ps-7-div-subject">
              <div className="ps-7-s-image">
                <img src="/Images/CS.png" />
              </div>
              <div className="ps-7-s-name">
                <h6>
                  Computer Science &<br /> Digital Literacy
                </h6>
              </div>
            </div>
            <div className="ps-7-div-subject">
              <div className="ps-7-s-image">
                <img src="/Images/PL.png" />
              </div>
              <div className="ps-7-s-name">
                <h6>PSHE & Life Learning</h6>
              </div>
            </div>
          </div>
          <div className="ps-7-div">
            <div className="ps-7-div-subject">
              <div className="ps-7-s-image">
                <img src="/Images/esl.png" />
              </div>
              <div className="ps-7-s-name">
                <h6>
                  English as a second <br /> lanugage
                </h6>
              </div>
            </div>
            <div className="ps-7-div-subject">
              <div className="ps-7-s-image">
                <img src="/Images/Spanish.png" />
              </div>
              <div className="ps-7-s-name">
                <h6>Spanish</h6>
              </div>
            </div>
            <div className="ps-7-div-subject">
              <div className="ps-7-s-image">
                <img src="/Images/French.png" />
              </div>
              <div className="ps-7-s-name">
                <h6>French</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default PrimarySchool;
