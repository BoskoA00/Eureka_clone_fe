import React, { useContext, useEffect, useRef, useState } from "react";
import "../CSS/Home.css";
import HomeComponent from "./HomeComponents/HomeComponent";
import { MyContext } from "./HomeComponents/Context";
import visaSvg from "../Images/visa.svg";
import discoverSvg from "../Images/discover.svg";
import amexSvg from "../Images/amex.svg";
import mastercardSvg from "../Images/mastercard.svg";
import paypalSvg from "../Images/paypal.svg";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import VisibilitySvg from "../Images/visibility.svg";
import VisibilityOffSvg from "../Images/visibilityoff.svg";
function Home() {
  const [showMore, setShowMore] = useState(false);
  const { state, changeState, selectedTime, form, changeForm } =
    useContext(MyContext);
  const [creditCard, setCreditCard] = useState(true);
  const [addCode, setAddCode] = useState(false);
  const [height, setHeight] = useState(0);
  const codeInputRef = useRef(null);
  const [singUpOpen, setSignUpOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [passwordVisible, setPasswrodVisibel] = useState(false);
  const [confirmPassVisible, setConfirmPassVisible] = useState(false);
  const [passwordRevealHover, setPasswordRevealHover] = useState(false);
  const [confirmPasswordRevealHover, setConfirmPasswordRevealHover] =
    useState(false);
  const [loginPasswordVisible, setLoginPasswordVisible] = useState(false);
  const [loginPasswordRevealHover, setLoginPasswordRevealHover] =
    useState(false);
  const [forgottenPasswordOpen, setForgottenPasswordOpen] = useState(false);
  const forgotPasswordClick = () => {
    setForgottenPasswordOpen(true);
  };
  const resetPasswordClick = () => {
    alert("Password reset");
  };
  const loginClick = () => {
    alert("Login");
  };
  const signUpClick = () => {
    alert("Sign Up");
  };
  const revealLoginPassword = () => {
    setLoginPasswordVisible(!loginPasswordVisible);
  };
  const revealPassword = () => {
    setPasswrodVisibel(!passwordVisible);
  };
  const revealConfirmPassword = () => {
    setConfirmPassVisible(!confirmPassVisible);
  };
  const FormClose = () => {
    setSignUpOpen(false);
    setLoginOpen(false);
    setForgottenPasswordOpen(false);
  };

  const signUpForm = () => {
    setSignUpOpen(true);
  };
  const loginForm = () => {
    setLoginOpen(true);
  };

  const backClick = () => {
    changeForm(false);
  };
  const backClick1 = () => {
    changeState(1);
  };
  const paymentDone = () => {
    alert("Payment done");
  };

  const addCodeChange = () => {
    setAddCode(!addCode);
  };

  useEffect(() => {
    if (addCode) {
      setHeight(codeInputRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [addCode]);
  const paymentChange = (t) => {
    setCreditCard(t);
  };

  return (
    <>
      <div className="home-div-1">
        <div className="home-div-1-1">
          <div className="home-div-1-1-1">
            <div className="home-div-1-1-1-1">
              <div className="uk-register"></div>
            </div>
            <div className="home-div-1-1-1-2">
              <b>Welcome to Eureka Learning Online School</b>
            </div>
            <div className="home-div-1-1-1-3">
              <h6>
                <span>
                  Eureka Learning is the UK's leading online school offering a
                  large range of online classes for children and adults alike.
                  Our team of dedicated virtual teachers will help you find the
                  online classes you need, whether through online private
                  tutoring or virtual group classes.
                </span>
              </h6>
            </div>
            <div className="home-div-1-1-1-4">
              <p>
                <span>
                  <a href="#">Read more</a>
                </span>
              </p>
            </div>
          </div>
          <div className="home-div-1-1-2">
            <div className="home-div-1-1-2-1"></div>
            <div className="home-div-1-1-2-2">
              <h2>
                <span>Our Departments</span>
              </h2>
            </div>
            <div className="home-div-1-1-2-3">
              <h2>
                <span>Online Private tutoring</span>
              </h2>
            </div>
            <div className="home-div-1-1-2-4">
              <h6>
                <span>
                  We offer online private tutoring in a large range of subjects.
                </span>
              </h6>
            </div>
            <div className="home-div-1-1-2-5">
              <h5>
                <span>Read More</span>
              </h5>
            </div>
            <div className="home-div-1-1-2-6">
              <h2>
                <span>
                  <b>Our Language Department</b>
                </span>
              </h2>
            </div>
            <div className="home-div-1-1-2-7">
              <h6>
                <span>
                  The language department offers virtual classes in English as
                  well as a selection of foreing languages.
                </span>
              </h6>
            </div>
            <div className="home-div-1-1-2-8">
              <h5>
                <span>Read More</span>
              </h5>
            </div>
            <div className="home-div-1-1-2-9">
              <h2>
                <span>
                  <b>Our Language Department</b>
                </span>
              </h2>
            </div>
            <div className="home-div-1-1-2-10">
              <h6>
                <span>
                  The language department offers virtual classes in English as
                  well as a selection of foreing languages.
                </span>
              </h6>
            </div>
          </div>
        </div>
        <div className="home-div-1-2">
          <h6>
            <span>
              For all of our online lessons, Primary to College/Sixth Form, we
              keep our classes at a small size. This is to create a more
              personalised online schooling experience for our students, which
              will allow them to find their classes more beneficial and
              enjoyable.{" "}
            </span>
          </h6>
        </div>
      </div>
      <div className="home-div-2">
        <div className="home-div-2-1">
          <div className="home-div-2-1-1">
            <div className="home-div-2-1-1-1">
              <h4>
                <span>Homeschooling</span>
              </h4>
            </div>
            <div className="home-div-2-1-1-2"></div>
            <div className="home-div-2-1-1-3">
              <p>
                <span>
                  Our online homeschool teaches students from primary to
                  college. Our students are from all over the world and achieve
                  top grades every year and go on to study at university or
                  college courses of their choice. All our teachers are highly
                  qualified and dedicated to every single student.
                </span>
              </p>
            </div>
            <div className="home-div-2-1-1-4"></div>
          </div>
          <div className="home-div-2-1-2">
            <div className="home-div-2-1-2-1">
              <h4>
                <span>
                  Online language <br /> classes
                </span>
              </h4>
            </div>
            <div className="home-div-2-1-2-2"></div>
            <div className="home-div-2-1-2-3">
              <p>
                <span>
                  Our language classes are fun leisure classes for adults and
                  children. They are very popular and students return term after
                  term achieving proficiency in the language of their choice.
                </span>
              </p>
            </div>
            <div className="home-div-2-1-2-4"></div>
          </div>
          <div className="home-div-2-1-3">
            <div className="home-div-2-1-3-1">
              <h4>
                <span>
                  Online GCSE & A-
                  <br /> level
                </span>
              </h4>
            </div>
            <div className="home-div-2-1-3-2"></div>
            <div className="home-div-2-1-3-3">
              <p>
                <span>
                  Our online GCSE & A-level classes are not only for college and
                  A-level students at secondary and college age, but also anyone
                  wishing to study any subject in later life. Our adult GCSE and
                  A-level classes are designed to fit around your work
                  commitments and take place in the evenings or on weekends.
                </span>
              </p>
            </div>
            <div className="home-div-2-1-3-4"></div>
          </div>
        </div>
      </div>
      <div className="home-div-3">
        <div className="home-div-3-1">
          <div className="home-div-3-1-1">
            <div className="home-div-3-1-1-1">
              <h4>
                <span>
                  Private online
                  <br /> tutoring
                </span>
              </h4>
            </div>
            <div className="home-div-3-1-1-2"></div>
            <div className="home-div-3-1-1-3">
              <p>
                <span>
                  We have a team of excellent, patient tutors who teach their
                  lessons flexibly around the students needs. Our team has been
                  praised for being patient and raising the confidence of shy
                  students, including those with learning disabilities.
                </span>
              </p>
            </div>
            <div className="home-div-3-1-1-4"></div>
          </div>
          <div className="home-div-3-1-2">
            <div className="home-div-3-1-2-1">
              <h4>
                <span>
                  Personalised
                  <br /> online education
                </span>
              </h4>
            </div>
            <div className="home-div-3-1-2-2"></div>
            <div className="home-div-3-1-2-3">
              <p>
                <span>
                  Every single class is adapted to the students within the
                  group. Teachers are dedicated to help every single student
                  with their aims. Our advisors are available to answer all of
                  your questions and get you settled in. Our team is friendly
                  and approachable.
                </span>
              </p>
            </div>
            <div className="home-div-3-1-2-4"></div>
          </div>
          <div className="home-div-3-1-3">
            <div className="home-div-3-1-3-1">
              <h4>
                <span>
                  Learn English
                  <br />
                  online
                </span>
              </h4>
            </div>
            <div className="home-div-3-1-3-2"></div>
            <div className="home-div-3-1-3-3">
              <p>
                <span>
                  Our English teachers are world class educators who have taught
                  many students and have many years of experience teaching
                  English at all levels. You can join the classes from anywhere
                  in the world and study from your own home.
                </span>
              </p>
            </div>
            <div className="home-div-3-1-3-4"></div>
          </div>
        </div>
      </div>
      <div className="home-div-4">
        <div className="home-div-4-container">
          <div className="home-div-4-1">
            <div className="home-div-4-1-1">
              <h2>
                <span>Book a free consultation</span>
              </h2>
            </div>
            <div className="home-div-4-1-2">
              <h6>
                <span>
                  If you are interested in a class for yourself or your child,
                  but you are unsure what online classes look like and would
                  like to ask questions, book a free consultation.
                </span>
              </h6>
            </div>
            <div className="home-div-4-1-3">
              <h6>
                <span>
                  You can use the scheduler here to pick a time and day suitable
                  to you.
                </span>
              </h6>
            </div>
            <div className="home-div-4-1-4">
              <h6>
                <span>
                  1.Pick an appointment and complete the free booking.
                  <br /> 2.A confirmation email will be sent to you which
                  contains a zoom link.
                  <br /> 3.At your chosen time, click on the link. If you
                  haven't used zoom before, you may want to start a few minutes
                  early to make sure everything is working.
                  <br /> 4.Our advisor will be waiting for you and tell you
                  everything you would like to know.
                </span>
              </h6>
            </div>
          </div>
          <div className="home-div-4-2">
            <HomeComponent />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
