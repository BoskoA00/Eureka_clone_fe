import React, { useContext, useEffect } from "react";
import "../../CSS/Shared/Footer.css";
import { Link } from "react-router-dom";
import { MyContext } from "../HomeComponents/Context";
const Footer = () => {
  const { user, setUser } = useContext(MyContext);

  useEffect(() => {
    let u = JSON.parse(localStorage.getItem("user"));
    if (user === null && u) {
      setUser(u);
    }
  }, []);

  return (
    <>
      <div className="ft-main">
        <div className="ft-1">
          <div className="ft-1-1">
            <div className="ft-1-1-title">
              <p>Useful Links</p>
            </div>
            <div className="ft-1-1-link">
              <p>
                <Link to={"/disclaimer"}>Disclaimer</Link>
              </p>
            </div>
            <div className="ft-1-1-link">
              <p>
                <Link to={"/termsandconditions"}>Terms & Contditions</Link>
              </p>
            </div>
            <div className="ft-1-1-link">
              <p>
                <Link to={"/our-onlineschool-policies"}>
                  Online School Policies
                </Link>
              </p>
            </div>
            <div className="ft-1-1-link">
              <p>
                <Link to={"/privacy-policy"}>Privacy Policy</Link>
              </p>
            </div>
            <div className="ft-1-1-link">
              <p>
                <a
                  href="https://nationalcareers.service.gov.uk/"
                  target="_blank"
                >
                  National Careers
                </a>
              </p>
            </div>
            <div className="ft-1-1-link">
              <p>
                <a href="https://www.mind.org.uk/" target="_blank">
                  Mind
                </a>
              </p>
            </div>
            <div className="ft-1-1-link">
              <p>
                <a
                  href="https://anti-bullyingalliance.org.uk/tools-information/advice-and-support"
                  target="_blank"
                >
                  Anti-Bullying
                </a>
              </p>
            </div>
            <div className="ft-1-1-link">
              <p>
                <a href="https://uk.ixl.com/" target="_blank">
                  IXL
                </a>
              </p>
            </div>
          </div>
          <div className="ft-1-2">
            <div className="ft-1-2-title">
              <p>Contact us</p>
            </div>
            <div className="ft-1-2-info">
              <p>Phone: +44 (0) 23 9206 6290</p>
            </div>
            <div className="ft-1-2-info-1">
              <p>
                Email:{" "}
                <a
                  href="mailto:enquiries@eureka-learning.co.uk?subject=Enrolment form"
                  target="_blank"
                >
                  {" "}
                  enquiries@eureka-
                  <br />
                  learning.co.uk
                </a>
              </p>
            </div>
            <div className="ft-1-2-info-images">
              <a
                href="https://www.facebook.com/EurekaLearningOnline"
                target="_blank"
              >
                <img src="/Images/fb.png" />
              </a>
              <a
                href="https://www.instagram.com/eurekalearningonline/"
                target="_blank"
              >
                <img src="/Images/ig.png" />
              </a>
              <a
                href="https://www.linkedin.com/company/eurekalearningonline"
                target="_blank"
              >
                <img src="/Images/in.png" />
              </a>
            </div>
            <div className="ft-1-2-info-2">
              <p>Copyright © 2024 Eureka Learning Limited</p>
            </div>
            <div className="ft-1-2-info-3">
              <p>
                Owned by Boland Companies Ltd Registered Company No.11744949
              </p>
            </div>
          </div>
          <div className="ft-1-3">
            <div className="ft-1-3-title">
              <p>Office Address</p>
            </div>
            <div className="ft-1-3-info">
              <p>Building 1000</p>
            </div>

            <div className="ft-1-3-info">
              <p>Lakeside North Harbour</p>
            </div>

            <div className="ft-1-3-info">
              <p>Western Road</p>
            </div>

            <div className="ft-1-3-info">
              <p>Portsmouth</p>
            </div>

            <div className="ft-1-3-info">
              <p>PO6 3EZ</p>
            </div>
          </div>
        </div>
        <div className="ft-2">
          <div className="ft-2-ukrlp">
            <img src="/Images/ukrlp.png" />
          </div>
          <div className="ft-2-aba">
            <img src="/Images/aba.png" />
          </div>
          <div className="ft-2-ico">
            <a target="_blank" href="Registration Certificate - ZA898955.pdf">
              <img src="/Images/ico.png" />
            </a>
          </div>
          <div className="ft-2-cb">
            <a
              href="https://registry.blockmarktech.com/certificates/deb8ec81-b63a-470b-83f2-af0f62923dcc/"
              target="_blank"
            >
              <img src="/Images/Cyber-Essentials-Logo-1.png" />
            </a>
          </div>
          <div className="ft-2-db">
            <a
              href="https://dbscheckonline.org.uk/verified/?id=1154238&token=3e9cbdf0f5b0db14c0ff0906d3eddded2690de3a"
              target="_blank"
            >
              <img src="/Images/verified.png" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
