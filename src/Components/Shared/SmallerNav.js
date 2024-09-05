import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../../CSS/Shared/SmallerNav.css";
import { MyContext } from "../HomeComponents/Context";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const SmallerNav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [aboutDropDown, setAboutDropDown] = useState(false);
  const [onlineSchoolDropdown, setOnlineSchoolDropdown] = useState(false);
  const { feeCalculator, changeFeeCalculator } = useContext(MyContext);
  return (
    <div className="sn-main">
      <div className="sn-logo-container">
        <div className="sn-logo-img">
          <img className="sn-image" src="./LogoEureka.PNG" />
        </div>
        <div className="sn-logo-text">
          <h3>
            Eureka
            <br />
            Learning
          </h3>
        </div>
      </div>
      {!sidebarOpen && (
        <div
          className="smaller-nav-button"
          onClick={() => setSidebarOpen(true)}
        >
          <MenuIcon />
        </div>
      )}
      {sidebarOpen && (
        <div className="sidebar">
          <div
            className="close-button"
            onClick={() => {
              setSidebarOpen(false);
              setAboutDropDown(false);
              setOnlineSchoolDropdown(false);
            }}
          >
            <CloseIcon />
          </div>
          <div className="sidebar-links">
            <div
              style={{
                backgroundColor: "rgb(10, 68, 134)",
                width: "100%",
                paddingLeft: "10px",
              }}
            >
              <Link to="/">HOME</Link>
            </div>
            <div>
              <div
                style={{
                  backgroundColor: "rgb(10, 68, 134)",
                  width: "100%",
                  paddingLeft: "10px",
                }}
                onClick={() => setAboutDropDown(!aboutDropDown)}
              >
                <span>ABOUT</span>
              </div>
              {aboutDropDown && (
                <div className="sn-dropdown">
                  <div>
                    <Link to="/thebritisheducationsystem">
                      BRITISH EDUCATION SYSTEM
                    </Link>
                  </div>
                  <div>
                    <Link to="/onlineschooltermdates">TERM DATES</Link>
                  </div>
                  <div>
                    <Link to="/findingexamcentres">EXAM CENTRES</Link>
                  </div>
                  <div>
                    <Link to="/aboutouronlineschool">OUR TEACHING TEAMS</Link>
                  </div>
                  <div onClick={() => changeFeeCalculator(true)}>
                    <span>SCHOOL FEES</span>
                  </div>
                </div>
              )}
            </div>
            <div>
              <div
                style={{
                  backgroundColor: "rgb(10, 68, 134)",
                  width: "100%",
                  paddingLeft: "10px",
                }}
                onClick={() => setOnlineSchoolDropdown(!onlineSchoolDropdown)}
              >
                <span>ONLINE SCHOOL</span>
              </div>
              {onlineSchoolDropdown && (
                <div className="sn-dropdown">
                  <div>
                    <Link to="/onlineschooladmissions">ADMISSIONS</Link>
                  </div>
                  <div>
                    <Link to="/ouronlineprimaryschool">OUR PRIMARY SCHOOL</Link>
                  </div>
                  <div>
                    <Link to="/ouronlinesecondaryschool">
                      OUR SECONDARY SCHOOL
                    </Link>
                  </div>
                  <div>
                    <Link to="/ouronlinecollege">OUR ONLINE COLLEGE</Link>
                  </div>
                </div>
              )}
            </div>
            <div
              style={{
                backgroundColor: "rgb(10, 68, 134)",
                width: "100%",
                paddingLeft: "10px",
              }}
            >
              <Link to="/functional-skills">FUNCTIONAL SKILLS</Link>
            </div>
            <div
              style={{
                backgroundColor: "rgb(10, 68, 134)",
                width: "100%",
                paddingLeft: "10px",
              }}
            >
              <Link to="/onlineprivatetutoring">TUTORING</Link>
            </div>
            <div
              style={{
                backgroundColor: "rgb(10, 68, 134)",
                width: "100%",
                paddingLeft: "10px",
              }}
            >
              <Link to="/contactonlineschool">CONTACT</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SmallerNav;
