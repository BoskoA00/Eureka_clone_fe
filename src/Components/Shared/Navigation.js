import { Link } from "react-router-dom";
import "../../CSS/Shared/Navigation.css";
import { useContext, useState } from "react";
import { MyContext } from "../HomeComponents/Context";

function Navigation() {
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [onlineSchoolDropdown, setOnlineSchoolDropdown] = useState(false);
  const { feeCalculator, changeFeeCalculator } = useContext(MyContext);
  return (
    <div className="navigation-main">
      <div className="navigation-image-container">
        <div className="nav-img-container">
          <img className="navigation-image" src="./LogoEureka.PNG" />
        </div>
        <div className="eureka-home-link">
          <Link to="/">
            <div className="logo-text">
              <b>Eureka</b>
            </div>
            <div className="logo-text">
              <b>learning</b>
            </div>
          </Link>
        </div>
      </div>
      <div className="nav-links-container">
        <ul className="navigation-links">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li
            onMouseEnter={() => setAboutDropdown(true)}
            onMouseLeave={() => setAboutDropdown(false)}
          >
            <Link to="/aboutouronlineschool">ABOUT</Link>
            {aboutDropdown && (
              <ul className="dropdown">
                <li>
                  <Link to="/thebritisheducationsystem">
                    BRITISH EDUCATION SYSTEM
                  </Link>
                </li>
                <li>
                  <Link to="/onlineschooltermdates">TERM DATES</Link>
                </li>
                <li>
                  <Link to="/findingexamcentres">EXAM CENTRES</Link>
                </li>
                <li>
                  <Link to="/aboutouronlineschool">OUR TEACHING TEAMS</Link>
                </li>
                <li>
                  <a
                    onClick={() => {
                      changeFeeCalculator(true);
                      console.log(feeCalculator);
                    }}
                  >
                    SCHOOL FEES
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li
            onMouseEnter={() => setOnlineSchoolDropdown(true)}
            onMouseLeave={() => setOnlineSchoolDropdown(false)}
          >
            <Link to="/onlineschool">ONLINE SCHOOL</Link>
            {onlineSchoolDropdown && (
              <ul className="dropdown" style={{ left: "-25%" }}>
                <li>
                  <Link to="/onlineschooladmissions">ADMISSIONS</Link>
                </li>
                <li>
                  <Link to="/ouronlineprimaryschool">OUR PRIMARY SCHOOL</Link>
                </li>
                <li>
                  <Link to="/ouronlinesecondaryschool">
                    OUR SECONDARY SCHOOL
                  </Link>
                </li>
                <li>
                  <Link to="/ouronlinecollege">OUR ONLINE COLLEGE</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/functional-skills">FUNCTIONAL SKILLS</Link>
          </li>
          <li>
            <Link to="/onlineprivatetutoring">TUTORING</Link>
          </li>
          <li>
            <Link to="/contactonlineschool">CONTACT</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
