import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Components/Shared/Navigation.js";
import SmallerNav from "./Components/Shared/SmallerNav.js";
import { Route, Routes, useLocation } from "react-router-dom";
import Slider from "./Components/Shared/Slider.js";
import Home from "./Components/Home.js";
import Aboutonlineschool from "./Components/About/AboutOnlineSchool.js";
import BritishES from "./Components/About/BritishES.js";
import OnlineTD from "./Components/About/OnlineTD.js";
import FindingEC from "./Components/About/FindingEC.js";
import OnlineSchool from "./Components/OnlineSchool/OnlineSchool.js";
import Admissions from "./Components/OnlineSchool/Admissions.js";
import PrimarySchool from "./Components/OnlineSchool/PrimarySchool.js";
import SecondarySchool from "./Components/OnlineSchool/SecondarySchool.js";
import OnlineCollege from "./Components/OnlineSchool/OnlineCollege.js";
import FunctionalSkills from "./Components/FunctionalSkills.js";
import Tutoring from "./Components/Tutoring.js";
import Contact from "./Components/Contact.js";
import Footer from "./Components/Shared/Footer.js";
import Disclaimer from "./Components/Disclaimer.js";
import TermAndConditions from "./Components/TaC.js";
import OurOnlinePolicies from "./Components/OurOnlinePolicies.js";
import PrivacyPlicy from "./Components/PrivacyPolicy.js";
import { useContext, useEffect, useState } from "react";
import Reklama from "./Components/Shared/Reklama.js";
import { MyContext } from "./Components/HomeComponents/Context.js";
import Calculator from "./Components/Shared/Calculator.js";
import AppointmentLayout from "./Components/AppointmentLayout.js";
import ControlsMenu from "./Components/Controls/ControlsMenu.js";
import UsersControl from "./Components/Controls/UsersControl.js";
import CoursesControl from "./Components/Controls/CoursesControl.js";
import MyCourses from "./Components/Controls/MyCourses.js";
import Course from "./Components/Controls/Course.js";
import AddCourse from "./Components/Controls/AddCourse.js";
import AlterCourse from "./Components/Controls/AlterCourse.js";
import AlterUser from "./Components/Controls/AlterUser.js";
import AlterDiffUser from "./Components/Controls/AlterDiffUser.js";
import ChatComponent from "./Components/Shared/Chat.js";
import PasswordReset from "./Components/Controls/PasswordReset.js";
function App() {
  const { feeCalculator, user, setUser } = useContext(MyContext);
  const [visibleAdd, setVisibleAdd] = useState(false);
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1000);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setVisibleAdd(true);
  }, []);

  const disableAdd = () => {
    setVisibleAdd(false);
  };
  useEffect(() => {
    let u = JSON.parse(localStorage.getItem("user"));
    if (user === null && u) {
      setUser(u);
    }
  }, []);

  const isAppointmentRoute = location.pathname === "/appointments";

  return (
    <>
      {!isAppointmentRoute && (isMobile ? <SmallerNav /> : <Navigation />)}
      {feeCalculator && !isAppointmentRoute && <Calculator />}
      {visibleAdd && !isAppointmentRoute && <Reklama onClose={disableAdd} />}
      {!isAppointmentRoute && <Slider />}
      {user && <ControlsMenu />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutouronlineschool" element={<Aboutonlineschool />} />
        <Route path="/onlineschool" element={<OnlineSchool />} />
        <Route path="/functional-skills" element={<FunctionalSkills />} />
        <Route path="/onlineprivatetutoring" element={<Tutoring />} />
        <Route path="/contactonlineschool" element={<Contact />} />
        <Route path="/thebritisheducationsystem" element={<BritishES />} />
        <Route path="/onlineschooltermdates" element={<OnlineTD />} />
        <Route path="/findingexamcentres" element={<FindingEC />} />
        <Route path="/onlineschooladmissions" element={<Admissions />} />
        <Route path="/ouronlineprimaryschool" element={<PrimarySchool />} />
        <Route path="/ouronlinesecondaryschool" element={<SecondarySchool />} />
        <Route path="/ouronlinecollege" element={<OnlineCollege />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/termsandconditions" element={<TermAndConditions />} />
        <Route
          path="/our-onlineschool-policies"
          element={<OurOnlinePolicies />}
        />
        <Route path="/privacy-policy" element={<PrivacyPlicy />} />
        <Route path="*" element={<Home />} />
        <Route path="/appointments" element={<AppointmentLayout />} />
        <Route path="/users" element={<UsersControl />} />
        <Route path="/courses" element={<CoursesControl />} />
        <Route path="/myCourses" element={<MyCourses />} />
        <Route path="/course/:id" element={<Course />} />
        <Route path="/addCourse" element={<AddCourse />} />
        <Route path="/alterCourse/:id" element={<AlterCourse />} />
        <Route path="/alterUser" element={<AlterUser />} />
        <Route path="/alterUser/:id" element={<AlterDiffUser />} />
        <Route
          path="/alterUser/:userEmail/:token"
          element={<PasswordReset />}
        />
      </Routes>
      {user && <ChatComponent />}
      {!isAppointmentRoute && <Footer />}
    </>
  );
}

export default App;
