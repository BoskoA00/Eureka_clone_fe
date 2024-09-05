import React from "react";
import "../CSS/Disclaimer.css";

const Disclaimer = () => {
  return (
    <>
      <div className="ds-main">
        <div className="ds-1">
          <h5>Company info</h5>
          <p>Eureka Learning Limited</p>
          <p>Registered in England No. 11744949</p>
          <p>
            UKLRP Registration Number:{" "}
            <a
              href="https://www.ukrlp.co.uk/ukrlp/ukrlp_provider.page_pls_provDetails?x=&pn_p_id=10087096&pv_status=VERIFIED&pv_vis_code=L"
              target="_blank"
            >
              10087096
            </a>
          </p>
        </div>
        <div className="ds-2">
          <h5>Privacy Policy</h5>
          <p>
            We are committed to protecting your privacy. If you have any
            questions or comments regarding our Privacy Policy below, please
            write to the address at the bottom of this page or email
            info@eureka-learning.co.uk
          </p>
        </div>
        <div className="ds-3">
          <h6>Information Gathered</h6>
          <p>
            All data gathered as a result of your visit on the website will be
            treated as confidential and shared with any third party without your
            prior written or verbal consent. All data is stored in accordance
            with relevant data protection laws. Any data entered on our website
            may be stored by companies such as Wix or Squarespace on our behalf.
            All data storage providers used by us are fully compliant with the
            relevant laws.
            <br /> If your name is on our database, you may receive promotional
            emails. As required by law, you can choose to unsubscribe. If you
            wish to be removed from our database, please follow the unsubscribe
            link on the e-mail and you will be removed from our database
            immediately and will not receive any further communications from us.
            We commit to prevent misuse of your data and will inform you in the
            case of a breach of security.
          </p>
        </div>
        <div className="ds-4">
          <h6>Consent</h6>
          <p>
            By submitting personal information, you consent to that information
            and the contact details you have provided to us being used by us to
            contact you for service-related reasons.
          </p>
        </div>
        <div className="ds-5">
          <h6>Cookies</h6>
          <p>
            We may use cookies to record previously established interests and
            preferences from data supplied to us to enhance use of our site. For
            further information on cookies please visit the site
            www.aboutcookies.org, which includes instructions on how to accept,
            reject or remove cookies.
          </p>
        </div>
        <div className="ds-6">
          <h5>Disclaimer</h5>
          <p>
            Where our site provides links to other websites, we are not
            responsible for the content or privacy
            <br /> practices of these sites and the services they provide. We
            reserve the right to alter, modify or
            <br /> otherwise update this Privacy Policy at any time and you are
            therefore encouraged to review it from time to time.
          </p>
        </div>
        <div className="ds-6">
          <h5>Contact us</h5>
          <p>
            Email:{" "}
            <a
              href="mailto:enquiries@eureka-learning.co.uk?subject=Enrolment form"
              target="_blank"
            >
              info@eureka-learning.co.uk
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Disclaimer;
