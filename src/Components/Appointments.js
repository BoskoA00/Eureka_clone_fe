import React, { useContext, useEffect, useRef, useState } from "react";
import "../CSS/Appointments.css";
import {
  ArrowBackIos,
  ArrowForwardIos,
  Widgets,
  WidthFull,
} from "@mui/icons-material";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import flags from "react-phone-number-input/flags";
import { Link } from "react-router-dom";
import visaSvg from "../Images/visa.svg";
import discoverSvg from "../Images/discover.svg";
import amexSvg from "../Images/amex.svg";
import mastercardSvg from "../Images/mastercard.svg";
import paypalSvg from "../Images/paypal.svg";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import VisibilitySvg from "../Images/visibility.svg";
import VisibilityOffSvg from "../Images/visibilityoff.svg";
import axios from "axios";
import { MyContext } from "../Components/HomeComponents/Context.js";
const Appointments = () => {
  const [height, setHeight] = useState(0);
  const { user, setUser } = useContext(MyContext);
  const [creditCard, setCreditCard] = useState(true);
  const [showMore, setShowMore] = useState(false);
  const [dayOffset, setDayOffset] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvc, setCVC] = useState("");
  const [expDate, setExpDate] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [country, setCountry] = useState("RS");
  const [type, setType] = useState(0);
  const [state, setState] = useState(0);
  const [firstNameTouched, setFirstNameTouched] = useState(false);
  const [lastNameTouched, setLastNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [checked, setChecked] = useState(false);
  const [addCode, setAddCode] = useState(false);
  const codeInputRef = useRef(null);
  const [loginPasswordVisible, setLoginPasswordVisible] = useState(false);
  const [revealLoginPassword, setRevealLoginPassword] = useState(false);
  const [loginPasswordRevealHover, setLoginPasswordRevealHover] =
    useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [confirmPasswordRevealHover, setConfirmPasswordRevealHover] =
    useState(false);
  const [regFormCheck, setRegFormCheck] = useState(false);
  const [loginPassword, setLoginPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [logForm, setLogForm] = useState(false);
  const [registerForm, setRegisterForm] = useState(false);
  const [codes, setCodes] = useState(false);
  const [apps, setApps] = useState(false);
  const [confirmPasswordError, setConfirmPassError] = useState(false);
  const [emailTaken, setEmailTaken] = useState("");
  const [passwordTaken, setPasswordTaken] = useState("");
  const [logEmailError, setLogEmailError] = useState("");
  const [logPasswordError, setLogPasswordError] = useState("");
  const [userMenu, setUserMenu] = useState(false);
  const [appointments, setAppoinments] = useState(false);
  const [selectedAppButton, setSelectedAppButton] = useState(0);
  const [emailError, setEmailError] = useState("");
  const [cardCodeError, setCardCodeError] = useState("");
  const [expDateError, setExpDateError] = useState("");
  const [cvcError, setCvcError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [userAppointments, setUserAppointments] = useState([]);
  const [timezone, setTimeZone] = useState("LONDON (GMT+01:00)");
  const [openTimeZone, setOpenTimeZone] = useState(false);
  const [timezones, setTimeZones] = useState([
    {
      name: "Hawaii",
      title: "(GMT-10:00) Hawaii",
    },
    {
      name: "Alaska",
      title: "(GMT-09:00) Alaska",
    },
    {
      name: "Pacific Time (US & Canada)",
      title: "(GMT-08:00) Pacific Time (US & Canada)",
    },
    {
      name: "Arizona",
      title: "(GMT-07:00) Arizona",
    },
    {
      name: "Mountain Time (US & Canada)",
      title: "(GMT-07:00) Mountain Time (US & Canada)",
    },
    {
      name: "Central Time (US & Canada)",
      title: "(GMT-06:00) Central Time (US & Canada)",
    },
    {
      name: "Eastern Time (US & Canada)",
      title: "(GMT-05:00) Eastern Time (US & Canada)",
    },
    {
      name: "Indiana (East)",
      title: "(GMT-05:00) Indiana (East)",
    },
    {
      name: "American Samoa",
      title: "(GMT-11:00) American Samoa",
    },
    {
      name: "International Date Line West",
      title: "(GMT-11:00) International Date Line West",
    },
    {
      name: "Midway Island",
      title: "(GMT-11:00) Midway Island",
    },
    {
      name: "Tijuana",
      title: "(GMT-08:00) Tijuana",
    },
    {
      name: "Chihuahua",
      title: "(GMT-07:00) Chihuahua",
    },
    {
      name: "Mazatlan",
      title: "(GMT-07:00) Mazatlan",
    },
    {
      name: "Central America",
      title: "(GMT-06:00) Central America",
    },
    {
      name: "Guadalajara",
      title: "(GMT-06:00) Guadalajara",
    },
    {
      name: "Mexico City",
      title: "(GMT-06:00) Mexico City",
    },
    {
      name: "Monterrey",
      title: "(GMT-06:00) Monterrey",
    },
    {
      name: "Saskatchewan",
      title: "(GMT-06:00) Saskatchewan",
    },
    {
      name: "Bogota",
      title: "(GMT-05:00) Bogota",
    },
    {
      name: "Lima",
      title: "(GMT-05:00) Lima",
    },
    {
      name: "Quito",
      title: "(GMT-05:00) Quito",
    },
    {
      name: "Atlantic Time (Canada)",
      title: "(GMT-04:00) Atlantic Time (Canada)",
    },
    {
      name: "Caracas",
      title: "(GMT-04:00) Caracas",
    },
    {
      name: "Georgetown",
      title: "(GMT-04:00) Georgetown",
    },
    {
      name: "La Paz",
      title: "(GMT-04:00) La Paz",
    },
    {
      name: "Santiago",
      title: "(GMT-04:00) Santiago",
    },
    {
      name: "Newfoundland",
      title: "(GMT-03:30) Newfoundland",
    },
    {
      name: "Brasilia",
      title: "(GMT-03:00) Brasilia",
    },
    {
      name: "Buenos Aires",
      title: "(GMT-03:00) Buenos Aires",
    },
    {
      name: "Greenland",
      title: "(GMT-03:00) Greenland",
    },
    {
      name: "Montevideo",
      title: "(GMT-03:00) Montevideo",
    },
    {
      name: "Mid-Atlantic",
      title: "(GMT-02:00) Mid-Atlantic",
    },
    {
      name: "Azores",
      title: "(GMT-01:00) Azores",
    },
    {
      name: "Cape Verde Is.",
      title: "(GMT-01:00) Cape Verde Is.",
    },
    {
      name: "Edinburgh",
      title: "(GMT+00:00) Edinburgh",
    },
    {
      name: "Lisbon",
      title: "(GMT+00:00) Lisbon",
    },
    {
      name: "London",
      title: "(GMT+00:00) London",
    },
    {
      name: "Monrovia",
      title: "(GMT+00:00) Monrovia",
    },
    {
      name: "UTC",
      title: "(GMT+00:00) UTC",
    },
    {
      name: "Amsterdam",
      title: "(GMT+01:00) Amsterdam",
    },
    {
      name: "Belgrade",
      title: "(GMT+01:00) Belgrade",
    },
    {
      name: "Berlin",
      title: "(GMT+01:00) Berlin",
    },
    {
      name: "Bern",
      title: "(GMT+01:00) Bern",
    },
    {
      name: "Bratislava",
      title: "(GMT+01:00) Bratislava",
    },
    {
      name: "Brussels",
      title: "(GMT+01:00) Brussels",
    },
    {
      name: "Budapest",
      title: "(GMT+01:00) Budapest",
    },
    {
      name: "Casablanca",
      title: "(GMT+01:00) Casablanca",
    },
    {
      name: "Copenhagen",
      title: "(GMT+01:00) Copenhagen",
    },
    {
      name: "Dublin",
      title: "(GMT+01:00) Dublin",
    },
    {
      name: "Ljubljana",
      title: "(GMT+01:00) Ljubljana",
    },
    {
      name: "Madrid",
      title: "(GMT+01:00) Madrid",
    },
    {
      name: "Paris",
      title: "(GMT+01:00) Paris",
    },
    {
      name: "Prague",
      title: "(GMT+01:00) Prague",
    },
    {
      name: "Rome",
      title: "(GMT+01:00) Rome",
    },
    {
      name: "Sarajevo",
      title: "(GMT+01:00) Sarajevo",
    },
    {
      name: "Skopje",
      title: "(GMT+01:00) Skopje",
    },
    {
      name: "Stockholm",
      title: "(GMT+01:00) Stockholm",
    },
    {
      name: "Vienna",
      title: "(GMT+01:00) Vienna",
    },
    {
      name: "Warsaw",
      title: "(GMT+01:00) Warsaw",
    },
    {
      name: "West Central Africa",
      title: "(GMT+01:00) West Central Africa",
    },
    {
      name: "Zagreb",
      title: "(GMT+01:00) Zagreb",
    },
    {
      name: "Athens",
      title: "(GMT+02:00) Athens",
    },
    {
      name: "Bucharest",
      title: "(GMT+02:00) Bucharest",
    },
    {
      name: "Cairo",
      title: "(GMT+02:00) Cairo",
    },
    {
      name: "Harare",
      title: "(GMT+02:00) Harare",
    },
    {
      name: "Helsinki",
      title: "(GMT+02:00) Helsinki",
    },
    {
      name: "Jerusalem",
      title: "(GMT+02:00) Jerusalem",
    },
    {
      name: "Kaliningrad",
      title: "(GMT+02:00) Kaliningrad",
    },
    {
      name: "Kyiv",
      title: "(GMT+02:00) Kyiv",
    },
    {
      name: "Pretoria",
      title: "(GMT+02:00) Pretoria",
    },
    {
      name: "Riga",
      title: "(GMT+02:00) Riga",
    },
    {
      name: "Sofia",
      title: "(GMT+02:00) Sofia",
    },
    {
      name: "Tallinn",
      title: "(GMT+02:00) Tallinn",
    },
    {
      name: "Vilnius",
      title: "(GMT+02:00) Vilnius",
    },
    {
      name: "Baghdad",
      title: "(GMT+03:00) Baghdad",
    },
    {
      name: "Istanbul",
      title: "(GMT+03:00) Istanbul",
    },
    {
      name: "Kuwait",
      title: "(GMT+03:00) Kuwait",
    },
    {
      name: "Minsk",
      title: "(GMT+03:00) Minsk",
    },
    {
      name: "Moscow",
      title: "(GMT+03:00) Moscow",
    },
    {
      name: "Nairobi",
      title: "(GMT+03:00) Nairobi",
    },
    {
      name: "Riyadh",
      title: "(GMT+03:00) Riyadh",
    },
    {
      name: "St. Petersburg",
      title: "(GMT+03:00) St. Petersburg",
    },
    {
      name: "Tehran",
      title: "(GMT+03:30) Tehran",
    },
    {
      name: "Abu Dhabi",
      title: "(GMT+04:00) Abu Dhabi",
    },
    {
      name: "Baku",
      title: "(GMT+04:00) Baku",
    },
    {
      name: "Muscat",
      title: "(GMT+04:00) Muscat",
    },
    {
      name: "Samara",
      title: "(GMT+04:00) Samara",
    },
    {
      name: "Tbilisi",
      title: "(GMT+04:00) Tbilisi",
    },
    {
      name: "Volgograd",
      title: "(GMT+04:00) Volgograd",
    },
    {
      name: "Yerevan",
      title: "(GMT+04:00) Yerevan",
    },
    {
      name: "Kabul",
      title: "(GMT+04:30) Kabul",
    },
    {
      name: "Ekaterinburg",
      title: "(GMT+05:00) Ekaterinburg",
    },
    {
      name: "Islamabad",
      title: "(GMT+05:00) Islamabad",
    },
    {
      name: "Karachi",
      title: "(GMT+05:00) Karachi",
    },
    {
      name: "Tashkent",
      title: "(GMT+05:00) Tashkent",
    },
    {
      name: "Chennai",
      title: "(GMT+05:30) Chennai",
    },
    {
      name: "Kolkata",
      title: "(GMT+05:30) Kolkata",
    },
    {
      name: "Mumbai",
      title: "(GMT+05:30) Mumbai",
    },
    {
      name: "New Delhi",
      title: "(GMT+05:30) New Delhi",
    },
    {
      name: "Sri Jayawardenepura",
      title: "(GMT+05:30) Sri Jayawardenepura",
    },
    {
      name: "Kathmandu",
      title: "(GMT+05:45) Kathmandu",
    },
    {
      name: "Almaty",
      title: "(GMT+06:00) Almaty",
    },
    {
      name: "Astana",
      title: "(GMT+06:00) Astana",
    },
    {
      name: "Dhaka",
      title: "(GMT+06:00) Dhaka",
    },
    {
      name: "Urumqi",
      title: "(GMT+06:00) Urumqi",
    },
    {
      name: "Rangoon",
      title: "(GMT+06:30) Rangoon",
    },
    {
      name: "Bangkok",
      title: "(GMT+07:00) Bangkok",
    },
    {
      name: "Hanoi",
      title: "(GMT+07:00) Hanoi",
    },
    {
      name: "Jakarta",
      title: "(GMT+07:00) Jakarta",
    },
    {
      name: "Krasnoyarsk",
      title: "(GMT+07:00) Krasnoyarsk",
    },
    {
      name: "Novosibirsk",
      title: "(GMT+07:00) Novosibirsk",
    },
    {
      name: "Beijing",
      title: "(GMT+08:00) Beijing",
    },
    {
      name: "Chongqing",
      title: "(GMT+08:00) Chongqing",
    },
    {
      name: "Hong Kong",
      title: "(GMT+08:00) Hong Kong",
    },
    {
      name: "Irkutsk",
      title: "(GMT+08:00) Irkutsk",
    },
    {
      name: "Kuala Lumpur",
      title: "(GMT+08:00) Kuala Lumpur",
    },
    {
      name: "Perth",
      title: "(GMT+08:00) Perth",
    },
    {
      name: "Singapore",
      title: "(GMT+08:00) Singapore",
    },
    {
      name: "Taipei",
      title: "(GMT+08:00) Taipei",
    },
    {
      name: "Ulaanbaatar",
      title: "(GMT+08:00) Ulaanbaatar",
    },
    {
      name: "Osaka",
      title: "(GMT+09:00) Osaka",
    },
    {
      name: "Sapporo",
      title: "(GMT+09:00) Sapporo",
    },
    {
      name: "Seoul",
      title: "(GMT+09:00) Seoul",
    },
    {
      name: "Tokyo",
      title: "(GMT+09:00) Tokyo",
    },
    {
      name: "Yakutsk",
      title: "(GMT+09:00) Yakutsk",
    },
    {
      name: "Adelaide",
      title: "(GMT+09:30) Adelaide",
    },
    {
      name: "Darwin",
      title: "(GMT+09:30) Darwin",
    },
    {
      name: "Brisbane",
      title: "(GMT+10:00) Brisbane",
    },
    {
      name: "Canberra",
      title: "(GMT+10:00) Canberra",
    },
    {
      name: "Guam",
      title: "(GMT+10:00) Guam",
    },
    {
      name: "Hobart",
      title: "(GMT+10:00) Hobart",
    },
    {
      name: "Melbourne",
      title: "(GMT+10:00) Melbourne",
    },
    {
      name: "Port Moresby",
      title: "(GMT+10:00) Port Moresby",
    },
    {
      name: "Sydney",
      title: "(GMT+10:00) Sydney",
    },
    {
      name: "Vladivostok",
      title: "(GMT+10:00) Vladivostok",
    },
    {
      name: "Magadan",
      title: "(GMT+11:00) Magadan",
    },
    {
      name: "New Caledonia",
      title: "(GMT+11:00) New Caledonia",
    },
    {
      name: "Solomon Is.",
      title: "(GMT+11:00) Solomon Is.",
    },
    {
      name: "Srednekolymsk",
      title: "(GMT+11:00) Srednekolymsk",
    },
    {
      name: "Auckland",
      title: "(GMT+12:00) Auckland",
    },
    {
      name: "Fiji",
      title: "(GMT+12:00) Fiji",
    },
    {
      name: "Kamchatka",
      title: "(GMT+12:00) Kamchatka",
    },
    {
      name: "Marshall Is.",
      title: "(GMT+12:00) Marshall Is.",
    },
    {
      name: "Wellington",
      title: "(GMT+12:00) Wellington",
    },
    {
      name: "Chatham Is.",
      title: "(GMT+12:45) Chatham Is.",
    },
    {
      name: "Nuku'alofa",
      title: "(GMT+13:00) Nuku alofa",
    },
    {
      name: "Samoa",
      title: "(GMT+13:00) Samoa",
    },
    {
      name: "Tokelau Is.",
      title: "(GMT+13:00) Tokelau Is.",
    },
  ]);
  const changeTimeZone = (value, value2) => {
    let tz = value + " " + value2;
    setTimeZone(tz);
    setOpenTimeZone(false);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
    setEmailTouched(false);
  };
  const changeLogEmail = (e) => {
    setLoginEmail(e.target.value);
  };
  const changeLogPassword = (e) => {
    setLoginPassword(e.target.value);
  };
  const login = async () => {
    setLogEmailError("");
    setLogPasswordError("");
    if (loginEmail.trim().length === 0) {
      setLogEmailError("Email is required");
      return;
    }
    if (loginPassword.trim().length === 0) {
      setLogPasswordError("Password is required");
      return;
    }
    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL + "api/User/login",
        {
          email: loginEmail,
          password: loginPassword,
        }
      );
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      setUser(response.data.user);
      setUserAppointments(response.data.user.appointments);
      setLogEmailError("");
      setLogPasswordError("");
      setLoginEmail("");
      setLoginPassword("");
      setLogForm(false);
    } catch (error) {
      if (error.response.data === "This user doesnt exist") {
        setLogEmailError("This user doesnt exist");
      }
      if (error.response.data === "Password not correct") {
        setLogPasswordError("Password not incorrect");
      }
      console.log(error);
    }
  };
  const changeRegEmail = (e) => {
    setRegEmail(e.target.value);
  };
  const changeRegPass = (e) => {
    setRegisterPassword(e.target.value);
  };
  const changeConfirmPass = (e) => {
    setConfirmPass(e.target.value);
  };
  const register = async () => {
    setEmailTaken("");
    setPasswordTaken("");
    setConfirmPassError(false);
    if (regEmail.trim().length === 0) {
      setEmailTaken("Email is required");
    }
    if (registerPassword.trim().length === 0) {
      setPasswordTaken("Password is required");
    }
    if (
      regEmail.trim().length > 0 &&
      registerPassword.trim().length > 0 &&
      confirmPass.trim().length > 0 &&
      regFormCheck
    ) {
      if (registerPassword.trim() === confirmPass.trim()) {
        try {
          let response = await axios.post(
            process.env.REACT_APP_API_URL + "api/User/register",
            {
              email: regEmail,
              password: registerPassword,
              role: 0,
            }
          );
          alert("Successfully registered");
          setRegisterForm(false);
        } catch (error) {
          if (error.response.data == "Email taken") {
            setEmailTaken(error.response.data);
          }
          if (error.response.data == "Password taken") {
            setPasswordTaken(error.response.data);
          }
          console.log(error);
        }
      } else {
        setConfirmPassError(true);
      }
    } else {
      return;
    }
  };
  useEffect(() => {
    if (addCode) {
      setHeight(codeInputRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [addCode]);
  const changeFirstName = (e) => {
    setFirstName(e.target.value);
    setFirstNameTouched(false);
  };
  const changeLastName = (e) => {
    setLastName(e.target.value);
    setLastNameTouched(false);
  };
  const changeCountry = (e) => {
    setCountry(e.target.value);
  };
  const changeCVC = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    setCVC(value);
    if (cvc.trim().length > 4) {
      setCVC(value.slice(0, 4));
    }
  };
  const changeExpDate = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 4) {
      value = value.slice(0, 4);
    }

    if (value.length > 2) {
      value = value.slice(0, 2) + "/" + value.slice(2);
    }

    setExpDate(value);
  };
  const changeCardNumber = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.slice(0, 16);

    const formattedValue = value.replace(/(.{4})/g, "$1-").trim();
    const finalValue = formattedValue.endsWith("-")
      ? formattedValue.slice(0, -1)
      : formattedValue;

    setCardNumber(finalValue);
  };
  const loginForm = () => {
    setLogForm(true);
  };

  const signUpForm = () => {
    setRegisterForm(true);
  };

  const paymentDone = async () => {
    if (firstName.trim().length === 0) {
      alert("First Name is required");
      return;
    }
    if (lastName.trim().length === 0) {
      alert("Last Name is required");
      return;
    }
    if (email.trim().length === 0) {
      setEmailError("Email is required");
      alert("Email is required");
      return;
    }
    if (cardNumber.trim().length === 0) {
      setCardCodeError("Card Number is required");
      return;
    }
    if (expDate.trim().length === 0) {
      setExpDateError("Expiration Date is required");
      return;
    }
    if (cvc.trim().length === 0) {
      setCvcError("CVC is required");
      return;
    }
    if (country === "SELECT" || country === undefined) {
      setCountryError("Pick a country");
      return;
    }
    try {
      console.log(
        firstName,
        lastName,
        email,
        cardNumber,
        expDate,
        cvc,
        country,
        date,
        time
      );
      const response = await axios.post(
        process.env.REACT_APP_API_URL + "api/Payments",
        {
          id: 0,
          firstName: firstName,
          lastName: lastName,
          email: email,
          type: 0,
          phoneNumber: phone,
          cardNumber: cardNumber,
          expirationDate: expDate,
          securityCode: cvc,
          country: country,
          appointmentId: 0,
          appointment: {
            id: 0,
            date: date,
            time: time,
            userId: 0,
          },
        }
      );
      setUserAppointments([...userAppointments, response.data.appointment]);

      setEmail("");
      setCardNumber("");
      setFirstName("");
      setLastName("");
      setPhone("");
      setExpDate("");
      setCVC("");
      setDate("");
      setTime("");
      setEmailError("");
      setCvcError("");
      setState(0);
      alert("Successfull!");
    } catch (error) {
      console.log(error);
      if (error.response.data === "User not registered") {
        setEmailError("User not registered");
        alert("User not registered! Check email!");
      }
    }
  };
  const getLabel = (offset) => {
    const weeksAhead = Math.ceil(offset / 5);
    if (weeksAhead === 1) return "NEXT WEEK";
    return `IN ${weeksAhead} WEEKS`;
  };

  const getFormattedDate = (offset) => {
    const date = new Date();
    date.setDate(date.getDate() + offset);
    const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
    const month = date.toLocaleDateString("en-US", { month: "long" });
    const dayNumber = date.getDate();
    return { dayName, month, dayNumber };
  };

  const setTimeDate = (time, dayNumber, month) => {
    setTime(time);
    setDate(dayNumber + "." + month + ".");
    setState(1);
  };

  const renderDays = () => {
    const times = [
      "10:00",
      "10:30",
      "11:00",
      "11:30",
      "12:00",
      "12:30",
      "13:00",
      "13:30",
      "14:00",
      "14:30",
      "15:00",
      "15:30",
    ];
    const days = [];
    for (let i = 0; i < 4; i++) {
      const { dayName, month, dayNumber } = getFormattedDate(i + dayOffset);
      days.push(
        <div className="day-schedule" key={i}>
          <div className="hc-2-1-1">{getLabel(dayOffset + 1)}</div>
          <div className="day-title">{dayName}</div>
          <div className="day-date">
            {month} {dayNumber}
          </div>
          <div className="day-times">
            {times.map((time, index) => (
              <button
                className="time-button"
                key={index}
                onClick={() => setTimeDate(time, dayNumber, month)}
              >
                <p>{time}</p>
              </button>
            ))}
          </div>
        </div>
      );
    }
    return days;
  };

  const handleNextDays = () => {
    setDayOffset(dayOffset + 4);
  };
  const handleAppointmentsClick = () => {
    setAppoinments(true);
  };

  const handleCodesClick = () => {
    setCodes(true);
  };

  const handleLogoutClick = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };
  const parseDate = (dateStr) => {
    const [day, month, year] = dateStr.split(".").map(Number);
    return new Date(year, month - 1, day);
  };
  const UpcomingAppointments = () => {
    const today = new Date();
    const futureAppointments = user.appointments.filter((appointment) => {
      const appointmentDate = parseDate(appointment.date);
      return appointmentDate >= today;
    });
    return futureAppointments;
  };

  return (
    <div className="app-main">
      <div className="app-buttons">
        {!user && (
          <>
            <div className="app-buttons-button">
              <button className="app-button" onClick={signUpForm}>
                SIGN UP
              </button>
            </div>
            <div className="app-buttons-button">
              <button className="app-button" onClick={loginForm}>
                LOGIN
              </button>
            </div>
          </>
        )}
        {user && (
          <div className="email-button">
            <button onClick={() => setUserMenu(!userMenu)}>
              {user.email}{" "}
              {!userMenu ? (
                <svg
                  color="gray.100"
                  fill="currentColor"
                  height="22"
                  viewBox="0 0 22 22"
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="css-pez86o"
                >
                  <path d="M18 6.25V9l-7 7-7-7V6.25l7 7 7-7z"></path>
                </svg>
              ) : (
                <svg
                  color="gray.100"
                  fill="currentColor"
                  height="22"
                  viewBox="0 0 22 22"
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="css-pez86o"
                >
                  <path d="M4 16v-2.75l7-7 7 7V16l-7-7-7 7z"></path>
                </svg>
              )}
            </button>
            {userMenu && (
              <div className="dropdown-menu">
                <button onClick={handleAppointmentsClick}>Appointments</button>
                <button onClick={handleCodesClick}>Codes</button>
                <button style={{ color: "red" }} onClick={handleLogoutClick}>
                  Log Out
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="app-title">
        <h1>Online Lesson Scheduler</h1>
      </div>
      <div className="app-text-1">
        <p>
          PLEASE MAKE SURE YOU SELECT THE CORRECT TIME ZONE, SO YOU DON'T MISS
          YOUR APPOINTMENT.
        </p>
      </div>
      <div className="app-d-t">
        <div>
          {state !== 0 ? (
            <ArrowBackIos onClick={() => setState(state - 1)} />
          ) : (
            ""
          )}
        </div>
        <div>
          <h2>
            {state == 0 ? "Date & Time" : ""}
            {state == 1 ? "Your information" : ""}
            {state == 2 ? "Checkout" : ""}
          </h2>
        </div>
      </div>
      <div className="app-text-2">
        <h3>APPOINTMENT</h3>
      </div>
      <div className="app-text-3">
        <div className="app-text-3-1">
          <p className="app-t-3-1-p1">
            Eureka Free Zoom Consultation with Michelle Hardie
          </p>
          <p className="app-t-3-1-p2">
            30 minutes @ £0.99{state == 1 ? "," + time + "," + date : ""}
          </p>
        </div>
        <div className="app-text-3-2">
          {!showMore && (
            <p>
              Use code NOTAROBOT for FREE consultation!
              <br />
              <br /> The consultation is completely free, however unfortunately
              we have had many requests from bots in the last few months. In
              order to reduce bots taking up bookings, we have added a 0.99GBP
              fee t ...
            </p>
          )}
          {showMore && (
            <p>
              Use code NOTAROBOT for FREE consultation!
              <br />
              <br />
              The consultation is completely free, however unfortunately we have
              had many requests from bots in the last few months. In order to
              reduce bots taking up bookings, we have added a 0.99GBP fee to the
              booking form, which is waivered by redeeming the code "NOTAROBOT"
              at the end. The consultation booking can then be completed at no
              cost. Please accept our apologies for any inconvenience this may
              cause.
            </p>
          )}
        </div>
        <div className="app-t-3-2-button">
          <button className="app-button" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
      {state == 0 && (
        <>
          <div className="app-appointemnt-times">
            <div className="app-at-title">
              <span>TIME ZONE:</span>
              <button
                className="app-button-2"
                onClick={() => setOpenTimeZone(true)}
              >
                {timezone}
              </button>
            </div>
          </div>
          <div className="schedule-container">
            {renderDays()}
            <div className="next-d-b">
              <button className="next-days-button" onClick={handleNextDays}>
                <ArrowForwardIos />
              </button>
            </div>
          </div>
        </>
      )}
      {state == 1 && (
        <>
          <div className="app-appointment-form">
            <div className="app-a-f-1">
              <h3>YOUR INFORMATION</h3>
            </div>
            <div className="app-a-f-2">
              <div>
                <label>
                  FIRST NAME <span style={{ color: "red" }}>*</span>
                </label>
              </div>
              <div className="app-a-f-2-i-div">
                <input
                  type="text"
                  placeholder="First name..."
                  value={firstName}
                  onChange={changeFirstName}
                  onFocus={() => setFirstNameTouched(true)}
                />

                {firstNameTouched && (
                  <div>
                    <span className="error-span" style={{ color: "red" }}>
                      First name is required.
                    </span>
                  </div>
                )}
              </div>
              <div>
                <label>
                  LAST NAME <span style={{ color: "red" }}>*</span>
                </label>
              </div>
              <div className="app-a-f-2-i-div">
                <input
                  type="text"
                  placeholder="Last name..."
                  value={lastName}
                  onChange={changeLastName}
                  onFocus={() => setLastNameTouched(true)}
                />
                {lastNameTouched && (
                  <div>
                    <span className="error-span" style={{ color: "red" }}>
                      Last name is required.
                    </span>
                  </div>
                )}
              </div>
              <div>
                <label>PHONE</label>
              </div>
              <div className="phone-input-div">
                <PhoneInput
                  international
                  defaultCountry="RS"
                  flags={flags}
                  value={phone}
                  onChange={setPhone}
                />
              </div>
              <div>
                <label>
                  EMAIL <span style={{ color: "red" }}>*</span>
                </label>
              </div>
              <div className="app-a-f-2-i-div">
                <input
                  type="email"
                  placeholder="Email..."
                  value={email}
                  onChange={changeEmail}
                  onFocus={() => setEmailTouched(true)}
                />
                {emailTouched && (
                  <div>
                    <span className="error-span" style={{ color: "red" }}>
                      Email is required.
                    </span>
                  </div>
                )}
                <span className="error-span">{emailError}</span>
              </div>
              <div className="app-f-m-l">
                <h3>Mailing List</h3>
              </div>
              <div className="app-f-checkbox-div">
                <div className="app-f-cb">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                  />
                </div>
                <div>
                  <span className="cb-span">
                    Keep me informed about upcoming classes *
                  </span>
                </div>
              </div>
              <div className="app-f-button">
                <button
                  onClick={() => {
                    if (checked) setState(2);
                  }}
                >
                  CONTINUE TO PAYMENT
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {state == 2 && (
        <>
          <div className="app-checkout">
            <div className="app-co-title">
              <h3>PAYMENT</h3>
            </div>
            <div className="app-checkout-main">
              <div className="app-co-container">
                <div className="app-co-container-1">
                  <div className="app-co-c-1">
                    <h3>Payment information</h3>
                  </div>
                  <div className="app-co-c-2">
                    <div className="ap-paymentMethod">
                      <div
                        className="ap-pm-1"
                        style={
                          creditCard
                            ? { marginBottom: "34px" }
                            : { marginBottom: "34px" }
                        }
                      >
                        <div className="ap-pm-1-1">
                          <div
                            className="ap-checkBoxDivs"
                            style={
                              creditCard
                                ? { marginBottom: "33px" }
                                : { marginBottom: "0px" }
                            }
                          >
                            <div className="creditCheckbox">
                              <input
                                type="checkbox"
                                checked={creditCard}
                                onChange={() => setCreditCard(true)}
                              />
                            </div>
                            <div>
                              <h5>Credit or debit card</h5>
                            </div>
                            <div className="creditCards">
                              <div>
                                <img src={visaSvg} />
                              </div>
                              <div>
                                <img src={amexSvg} />
                              </div>
                              <div>
                                <img src={discoverSvg} />
                              </div>
                              <div>
                                <img src={mastercardSvg} />
                              </div>
                            </div>
                          </div>
                          {creditCard && (
                            <div className="creditCardsInputs">
                              <div className="creditCardsInput">
                                <div>
                                  <label>
                                    FIRST NAME
                                    <span style={{ color: "red" }}>*</span>{" "}
                                  </label>
                                </div>
                                <div>
                                  <input
                                    type="text"
                                    value={firstName}
                                    onChange={changeFirstName}
                                  />
                                </div>
                              </div>
                              <div className="creditCardsInput">
                                <div>
                                  <label>
                                    LAST NAME
                                    <span style={{ color: "red" }}>*</span>{" "}
                                  </label>
                                </div>
                                <div>
                                  <input
                                    type="text"
                                    value={lastName}
                                    onChange={changeLastName}
                                  />
                                </div>
                              </div>
                              <div className="cardDetails">
                                <div className="cardDetails-1">
                                  <label>
                                    CARD DETAILS
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                </div>
                                <div className="cardDetails-number">
                                  <div>
                                    <label>CARD NUMBER</label>
                                  </div>
                                  <div>
                                    <input
                                      type="text"
                                      placeholder="1234 1234 1234 1234"
                                      value={cardNumber}
                                      onChange={changeCardNumber}
                                    />
                                  </div>
                                  <span className="error-span">
                                    {cardCodeError}
                                  </span>
                                </div>
                                <div className="cardDetails-2">
                                  <div className="cardExpiration">
                                    <div>
                                      <label>Expiration</label>
                                    </div>
                                    <div>
                                      <input
                                        type="text"
                                        placeholder="MM/YY"
                                        value={expDate}
                                        onChange={changeExpDate}
                                      />
                                    </div>
                                    <span className="error-span">
                                      {expDateError}
                                    </span>
                                  </div>
                                  <div className="cardCVC">
                                    <div>
                                      <label>CVC</label>
                                    </div>
                                    <div>
                                      <input
                                        type="text"
                                        placeholder="CVC"
                                        value={cvc}
                                        onChange={changeCVC}
                                      />
                                    </div>
                                    <span className="error-span">
                                      {cvcError}
                                    </span>
                                  </div>
                                </div>
                                <div className="cardCountry">
                                  <div>
                                    <label>COUNTRY</label>
                                  </div>
                                  <div>
                                    <select>
                                      <option
                                        disabled=""
                                        value={country}
                                        onChange={changeCountry}
                                      >
                                        SELECT
                                      </option>
                                      <option value="AF">Afghanistan</option>
                                      <option value="AX">Åland Islands</option>
                                      <option value="AL">Albania</option>
                                      <option value="DZ">Algeria</option>
                                      <option value="AD">Andorra</option>
                                      <option value="AO">Angola</option>
                                      <option value="AI">Anguilla</option>
                                      <option value="AQ">Antarctica</option>
                                      <option value="AG">
                                        Antigua &amp; Barbuda
                                      </option>
                                      <option value="AR">Argentina</option>
                                      <option value="AM">Armenia</option>
                                      <option value="AW">Aruba</option>
                                      <option value="AC">
                                        Ascension Island
                                      </option>
                                      <option value="AU">Australia</option>
                                      <option value="AT">Austria</option>
                                      <option value="AZ">Azerbaijan</option>
                                      <option value="BS">Bahamas</option>
                                      <option value="BH">Bahrain</option>
                                      <option value="BD">Bangladesh</option>
                                      <option value="BB">Barbados</option>
                                      <option value="BY">Belarus</option>
                                      <option value="BE">Belgium</option>
                                      <option value="BZ">Belize</option>
                                      <option value="BJ">Benin</option>
                                      <option value="BM">Bermuda</option>
                                      <option value="BT">Bhutan</option>
                                      <option value="BO">Bolivia</option>
                                      <option value="BA">
                                        Bosnia &amp; Herzegovina
                                      </option>
                                      <option value="BW">Botswana</option>
                                      <option value="BV">Bouvet Island</option>
                                      <option value="BR">Brazil</option>
                                      <option value="IO">
                                        British Indian Ocean Territory
                                      </option>
                                      <option value="VG">
                                        British Virgin Islands
                                      </option>
                                      <option value="BN">Brunei</option>
                                      <option value="BG">Bulgaria</option>
                                      <option value="BF">Burkina Faso</option>
                                      <option value="BI">Burundi</option>
                                      <option value="KH">Cambodia</option>
                                      <option value="CM">Cameroon</option>
                                      <option value="CA">Canada</option>
                                      <option value="CV">Cape Verde</option>
                                      <option value="BQ">
                                        Caribbean Netherlands
                                      </option>
                                      <option value="KY">Cayman Islands</option>
                                      <option value="CF">
                                        Central African Republic
                                      </option>
                                      <option value="TD">Chad</option>
                                      <option value="CL">Chile</option>
                                      <option value="CN">China</option>
                                      <option value="CO">Colombia</option>
                                      <option value="KM">Comoros</option>
                                      <option value="CG">
                                        Congo - Brazzaville
                                      </option>
                                      <option value="CD">
                                        Congo - Kinshasa
                                      </option>
                                      <option value="CK">Cook Islands</option>
                                      <option value="CR">Costa Rica</option>
                                      <option value="CI">Côte d’Ivoire</option>
                                      <option value="HR">Croatia</option>
                                      <option value="CW">Curaçao</option>
                                      <option value="CY">Cyprus</option>
                                      <option value="CZ">Czechia</option>
                                      <option value="DK">Denmark</option>
                                      <option value="DJ">Djibouti</option>
                                      <option value="DM">Dominica</option>
                                      <option value="DO">
                                        Dominican Republic
                                      </option>
                                      <option value="EC">Ecuador</option>
                                      <option value="EG">Egypt</option>
                                      <option value="SV">El Salvador</option>
                                      <option value="GQ">
                                        Equatorial Guinea
                                      </option>
                                      <option value="ER">Eritrea</option>
                                      <option value="EE">Estonia</option>
                                      <option value="SZ">Eswatini</option>
                                      <option value="ET">Ethiopia</option>
                                      <option value="FK">
                                        Falkland Islands
                                      </option>
                                      <option value="FO">Faroe Islands</option>
                                      <option value="FJ">Fiji</option>
                                      <option value="FI">Finland</option>
                                      <option value="FR">France</option>
                                      <option value="GF">French Guiana</option>
                                      <option value="PF">
                                        French Polynesia
                                      </option>
                                      <option value="TF">
                                        French Southern Territories
                                      </option>
                                      <option value="GA">Gabon</option>
                                      <option value="GM">Gambia</option>
                                      <option value="GE">Georgia</option>
                                      <option value="DE">Germany</option>
                                      <option value="GH">Ghana</option>
                                      <option value="GI">Gibraltar</option>
                                      <option value="GR">Greece</option>
                                      <option value="GL">Greenland</option>
                                      <option value="GD">Grenada</option>
                                      <option value="GP">Guadeloupe</option>
                                      <option value="GU">Guam</option>
                                      <option value="GT">Guatemala</option>
                                      <option value="GG">Guernsey</option>
                                      <option value="GN">Guinea</option>
                                      <option value="GW">Guinea-Bissau</option>
                                      <option value="GY">Guyana</option>
                                      <option value="HT">Haiti</option>
                                      <option value="HN">Honduras</option>
                                      <option value="HK">
                                        Hong Kong SAR China
                                      </option>
                                      <option value="HU">Hungary</option>
                                      <option value="IS">Iceland</option>
                                      <option value="IN">India</option>
                                      <option value="ID">Indonesia</option>
                                      <option value="IQ">Iraq</option>
                                      <option value="IE">Ireland</option>
                                      <option value="IM">Isle of Man</option>
                                      <option value="IL">Israel</option>
                                      <option value="IT">Italy</option>
                                      <option value="JM">Jamaica</option>
                                      <option value="JP">Japan</option>
                                      <option value="JE">Jersey</option>
                                      <option value="JO">Jordan</option>
                                      <option value="KZ">Kazakhstan</option>
                                      <option value="KE">Kenya</option>
                                      <option value="KI">Kiribati</option>
                                      <option value="XK">Kosovo</option>
                                      <option value="KW">Kuwait</option>
                                      <option value="KG">Kyrgyzstan</option>
                                      <option value="LA">Laos</option>
                                      <option value="LV">Latvia</option>
                                      <option value="LB">Lebanon</option>
                                      <option value="LS">Lesotho</option>
                                      <option value="LR">Liberia</option>
                                      <option value="LY">Libya</option>
                                      <option value="LI">Liechtenstein</option>
                                      <option value="LT">Lithuania</option>
                                      <option value="LU">Luxembourg</option>
                                      <option value="MO">
                                        Macao SAR China
                                      </option>
                                      <option value="MG">Madagascar</option>
                                      <option value="MW">Malawi</option>
                                      <option value="MY">Malaysia</option>
                                      <option value="MV">Maldives</option>
                                      <option value="ML">Mali</option>
                                      <option value="MT">Malta</option>
                                      <option value="MQ">Martinique</option>
                                      <option value="MR">Mauritania</option>
                                      <option value="MU">Mauritius</option>
                                      <option value="YT">Mayotte</option>
                                      <option value="MX">Mexico</option>
                                      <option value="MD">Moldova</option>
                                      <option value="MC">Monaco</option>
                                      <option value="MN">Mongolia</option>
                                      <option value="ME">Montenegro</option>
                                      <option value="MS">Montserrat</option>
                                      <option value="MA">Morocco</option>
                                      <option value="MZ">Mozambique</option>
                                      <option value="MM">
                                        Myanmar (Burma)
                                      </option>
                                      <option value="NA">Namibia</option>
                                      <option value="NR">Nauru</option>
                                      <option value="NP">Nepal</option>
                                      <option value="NL">Netherlands</option>
                                      <option value="NC">New Caledonia</option>
                                      <option value="NZ">New Zealand</option>
                                      <option value="NI">Nicaragua</option>
                                      <option value="NE">Niger</option>
                                      <option value="NG">Nigeria</option>
                                      <option value="NU">Niue</option>
                                      <option value="MK">
                                        North Macedonia
                                      </option>
                                      <option value="NO">Norway</option>
                                      <option value="OM">Oman</option>
                                      <option value="PK">Pakistan</option>
                                      <option value="PS">
                                        Palestinian Territories
                                      </option>
                                      <option value="PA">Panama</option>
                                      <option value="PG">
                                        Papua New Guinea
                                      </option>
                                      <option value="PY">Paraguay</option>
                                      <option value="PE">Peru</option>
                                      <option value="PH">Philippines</option>
                                      <option value="PN">
                                        Pitcairn Islands
                                      </option>
                                      <option value="PL">Poland</option>
                                      <option value="PT">Portugal</option>
                                      <option value="PR">Puerto Rico</option>
                                      <option value="QA">Qatar</option>
                                      <option value="RE">Réunion</option>
                                      <option value="RO">Romania</option>
                                      <option value="RU">Russia</option>
                                      <option value="RW">Rwanda</option>
                                      <option value="WS">Samoa</option>
                                      <option value="SM">San Marino</option>
                                      <option value="ST">
                                        São Tomé &amp; Príncipe
                                      </option>
                                      <option value="SA">Saudi Arabia</option>
                                      <option value="SN">Senegal</option>
                                      <option value="RS">Serbia</option>
                                      <option value="SC">Seychelles</option>
                                      <option value="SL">Sierra Leone</option>
                                      <option value="SG">Singapore</option>
                                      <option value="SX">Sint Maarten</option>
                                      <option value="SK">Slovakia</option>
                                      <option value="SI">Slovenia</option>
                                      <option value="SB">
                                        Solomon Islands
                                      </option>
                                      <option value="SO">Somalia</option>
                                      <option value="ZA">South Africa</option>
                                      <option value="GS">
                                        South Georgia &amp; South Sandwich
                                        Islands
                                      </option>
                                      <option value="KR">South Korea</option>
                                      <option value="SS">South Sudan</option>
                                      <option value="ES">Spain</option>
                                      <option value="LK">Sri Lanka</option>
                                      <option value="BL">St. Barthélemy</option>
                                      <option value="SH">St. Helena</option>
                                      <option value="KN">
                                        St. Kitts &amp; Nevis
                                      </option>
                                      <option value="LC">St. Lucia</option>
                                      <option value="MF">St. Martin</option>
                                      <option value="PM">
                                        St. Pierre &amp; Miquelon
                                      </option>
                                      <option value="VC">
                                        St. Vincent &amp; Grenadines
                                      </option>
                                      <option value="SD">Sudan</option>
                                      <option value="SR">Suriname</option>
                                      <option value="SJ">
                                        Svalbard &amp; Jan Mayen
                                      </option>
                                      <option value="SE">Sweden</option>
                                      <option value="CH">Switzerland</option>
                                      <option value="TW">Taiwan</option>
                                      <option value="TJ">Tajikistan</option>
                                      <option value="TZ">Tanzania</option>
                                      <option value="TH">Thailand</option>
                                      <option value="TL">Timor-Leste</option>
                                      <option value="TG">Togo</option>
                                      <option value="TK">Tokelau</option>
                                      <option value="TO">Tonga</option>
                                      <option value="TT">
                                        Trinidad &amp; Tobago
                                      </option>
                                      <option value="TA">
                                        Tristan da Cunha
                                      </option>
                                      <option value="TN">Tunisia</option>
                                      <option value="TR">Türkiye</option>
                                      <option value="TM">Turkmenistan</option>
                                      <option value="TC">
                                        Turks &amp; Caicos Islands
                                      </option>
                                      <option value="TV">Tuvalu</option>
                                      <option value="UG">Uganda</option>
                                      <option value="UA">Ukraine</option>
                                      <option value="AE">
                                        United Arab Emirates
                                      </option>
                                      <option value="GB">United Kingdom</option>
                                      <option value="US">United States</option>
                                      <option value="UY">Uruguay</option>
                                      <option value="UZ">Uzbekistan</option>
                                      <option value="VU">Vanuatu</option>
                                      <option value="VA">Vatican City</option>
                                      <option value="VE">Venezuela</option>
                                      <option value="VN">Vietnam</option>
                                      <option value="WF">
                                        Wallis &amp; Futuna
                                      </option>
                                      <option value="EH">Western Sahara</option>
                                      <option value="YE">Yemen</option>
                                      <option value="ZM">Zambia</option>
                                      <option value="ZW">Zimbabwe</option>
                                    </select>
                                    <span className="error-span">
                                      {countryError}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="div1-1-2">
                        <div className="paypalCheck">
                          <div>
                            <input
                              type="checkbox"
                              checked={!creditCard}
                              onChange={() => setCreditCard(false)}
                            />
                          </div>
                          <div className="paypalText">
                            <h5>PayPal</h5>
                          </div>
                          <div className="paypalSvg">
                            <img src={paypalSvg} />
                          </div>
                        </div>
                      </div>
                      {creditCard === true ? (
                        <div>
                          <button
                            className="ap-creditCardButton"
                            onClick={paymentDone}
                          >
                            PAY & CONFIRM
                          </button>
                        </div>
                      ) : (
                        <div>
                          {" "}
                          <Link
                            to={
                              "https://www.paypal.com/webscr?cmd=_express-checkout&token=EC-1W428134YJ0861626"
                            }
                          >
                            <button className="ap-creditCardButton">
                              CONTINUE WITH PAYPAL
                            </button>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="app-co-container-2">
                  <div className="orderSummary">
                    <div>
                      <h4>Order Summary</h4>
                    </div>
                    <div className="orderSummary-1">
                      <div className="orderSummary-1-1">
                        <div>
                          <h5>Eureka free zoom consultation</h5>
                        </div>
                        <div>
                          <h5> £0.99</h5>
                        </div>
                      </div>
                      <p>{time + ",  " + date}</p>
                    </div>
                    <div
                      className="orderSummary-2"
                      style={{ maxHeight: height }}
                    >
                      <div className="orderSummary-2-1">
                        <div>
                          <p>Package, gift, or coupon code</p>
                        </div>
                        {addCode === false ? (
                          <div>
                            <AddIcon onClick={() => setAddCode(true)} />
                          </div>
                        ) : (
                          <div>
                            <RemoveIcon onClick={() => setAddCode(false)} />
                          </div>
                        )}
                      </div>
                      <div
                        className={`codeInputDiv ${addCode ? "visible" : ""}`}
                        ref={codeInputRef}
                      >
                        <input
                          type="text"
                          className="codeInput"
                          placeholder="Enter code"
                        />
                      </div>
                    </div>
                    <div className="orderSummary-3">
                      <div>
                        <p>Subtotal</p>
                      </div>
                      <div>
                        <p>£0.99</p>
                      </div>
                    </div>
                    <div className="orderSummary-4">
                      <div>
                        <strong>Total due</strong>
                      </div>
                      <div>
                        <strong>£0.99</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div></div>
            </div>
          </div>
        </>
      )}
      {logForm && <div className="logForm-main"></div>}
      {logForm && (
        <div className="logForm-container">
          <div className="logForm-buttons">
            <button className="app-button" onClick={() => setLogForm(false)}>
              CLOSE
            </button>
          </div>
          <div className="logForm-title">
            <h2>LOGIN</h2>
          </div>
          <div className="logForm-label">
            <label>EMAIL</label>
          </div>
          <div className="logForm-input">
            <input
              type="email"
              placeholder="example@gmail.com"
              value={loginEmail}
              onChange={changeLogEmail}
            />
          </div>
          <span className="error-span">{logEmailError}</span>
          <div className="logForm-label">
            <label>PASSOWRD</label>
          </div>
          <div className="logForm-password-div">
            <input
              type={loginPasswordVisible ? "text" : "password"}
              placeholder="********"
              value={loginPassword}
              onChange={changeLogPassword}
            />
            <button
              type="button"
              className="logForm-reveal-button"
              onClick={() => setLoginPasswordVisible(!loginPasswordVisible)}
              onMouseEnter={() => setLoginPasswordRevealHover(true)}
              onMouseLeave={() => setLoginPasswordRevealHover(false)}
            >
              {loginPasswordRevealHover === false && (
                <div>
                  <img
                    src={
                      loginPasswordVisible ? VisibilityOffSvg : VisibilitySvg
                    }
                  />
                </div>
              )}
              {loginPasswordRevealHover === true &&
                loginPasswordVisible === false && (
                  <div>
                    <img src={VisibilityOffSvg} />
                  </div>
                )}
              {loginPasswordRevealHover === true &&
                loginPasswordVisible === true && (
                  <div>
                    <img src={VisibilitySvg} />
                  </div>
                )}
            </button>
          </div>
          <span className="error-span">{logPasswordError}</span>
          <div className="logForm-login-button">
            <button onClick={login}>LOG IN</button>
          </div>
          <div className="app-button">
            <button className="app-button">FORGOT YOUR PASSOWRD?</button>
          </div>
        </div>
      )}
      {registerForm && <div className="logForm-main"></div>}
      {registerForm && (
        <div className="regForm-container">
          <div className="logForm-buttons">
            <button
              className="app-button"
              onClick={() => setRegisterForm(false)}
            >
              CLOSE
            </button>
          </div>
          <div className="logForm-title">
            <h2>Sign up for an account</h2>
          </div>
          <div className="regForm-txt-1">
            <h3>
              Sign up for a scheduling account to save your information for
              faster booking
            </h3>
          </div>
          <div className="logForm-label">
            <label>EMAIL</label>
          </div>
          <div className="logForm-input">
            <input
              type="email"
              placeholder="example@gmail.com"
              value={regEmail}
              onChange={changeRegEmail}
            />
          </div>
          <span className="error-span">{emailTaken}</span>

          <div className="logForm-label">
            <label>PASSOWRD</label>
          </div>
          <div className="logForm-password-div">
            <input
              type={loginPasswordVisible ? "text" : "password"}
              placeholder="********"
              value={registerPassword}
              onChange={changeRegPass}
            />
            <button
              type="button"
              className="logForm-reveal-button"
              onClick={() => setLoginPasswordVisible(!loginPasswordVisible)}
              onMouseEnter={() => setLoginPasswordRevealHover(true)}
              onMouseLeave={() => setLoginPasswordRevealHover(false)}
            >
              {loginPasswordRevealHover === false && (
                <div>
                  <img
                    src={
                      loginPasswordVisible ? VisibilityOffSvg : VisibilitySvg
                    }
                  />
                </div>
              )}
              {loginPasswordRevealHover === true &&
                loginPasswordVisible === false && (
                  <div>
                    <img src={VisibilityOffSvg} />
                  </div>
                )}
              {loginPasswordRevealHover === true &&
                loginPasswordVisible === true && (
                  <div>
                    <img src={VisibilitySvg} />
                  </div>
                )}
            </button>
          </div>
          <span className="error-span">{passwordTaken}</span>

          <div className="logForm-label">
            <label>CONFIRM PASSOWRD</label>
          </div>
          <div className="logForm-password-div">
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              placeholder="********"
              value={confirmPass}
              onChange={changeConfirmPass}
            />
            <button
              type="button"
              className="logForm-reveal-button"
              onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
              onMouseEnter={() => setConfirmPasswordRevealHover(true)}
              onMouseLeave={() => setConfirmPasswordRevealHover(false)}
            >
              {confirmPasswordRevealHover === false && (
                <div>
                  <img
                    src={
                      confirmPasswordVisible ? VisibilityOffSvg : VisibilitySvg
                    }
                  />
                </div>
              )}
              {confirmPasswordRevealHover === true &&
                confirmPasswordVisible === false && (
                  <div>
                    <img src={VisibilityOffSvg} />
                  </div>
                )}
              {confirmPasswordRevealHover === true &&
                confirmPasswordVisible === true && (
                  <div>
                    <img src={VisibilitySvg} />
                  </div>
                )}
            </button>
          </div>
          {confirmPasswordError && (
            <span className="error-span">Confirm password does not match.</span>
          )}
          <div className="regForm-cb">
            <div>
              <input
                type="checkbox"
                checked={regFormCheck}
                onChange={() => setRegFormCheck(!regFormCheck)}
              />
            </div>
            <div>
              <label className="regForm-cb-label ">
                <p className="regForm-cb-label-p">
                  I AGREE TO THE{" "}
                  <a
                    href="https://www.squarespace.com/terms-of-service"
                    target="_blank"
                  >
                    TERMS OF SERVICE
                  </a>{" "}
                  AND
                  <br /> ACKNOWLEDGE THAT I UNDERSTAND THE{" "}
                  <a href="https://www.squarespace.com/privacy" target="_blank">
                    {" "}
                    PRIVACY <br /> POLICY
                  </a>
                </p>
              </label>
            </div>
          </div>
          <div className="logForm-login-button">
            <button
              onClick={register}
              style={
                !regFormCheck
                  ? {
                      backgroundColor: "rgb(242, 242, 242)",
                      color: "rgb(141, 141, 141)",
                      cursor: "not-allowed",
                    }
                  : {}
              }
              className={!regFormCheck ? "disabled" : ""}
              disabled={!regFormCheck}
            >
              SIGN UP
            </button>
          </div>
        </div>
      )}
      {appointments && <div className="logForm-main"></div>}
      {appointments && (
        <div className="appointments-container">
          <div className="logForm-buttons">
            <button
              className="app-button"
              onClick={() => setAppoinments(false)}
            >
              CLOSE
            </button>
          </div>
          <div className="appointments-title">
            <h2>Appointments</h2>
          </div>
          <div className="appointments-nav">
            <button
              style={
                selectedAppButton == 0
                  ? { borderBottom: "1px solid black" }
                  : {}
              }
              onClick={() => setSelectedAppButton(0)}
            >
              Upcoming
            </button>
            <button
              style={
                selectedAppButton == 1
                  ? { borderBottom: "1px solid black" }
                  : {}
              }
              onClick={() => setSelectedAppButton(1)}
            >
              Past
            </button>
          </div>
          {selectedAppButton === 0 && (
            <>
              <div className="upcoming-apps">
                {userAppointments.map((element, index) => (
                  <p key={index} className="apps-1">
                    {element.date} ---- {element.time}
                  </p>
                ))}
                {userAppointments.length <= 0 && (
                  <div>
                    <p className="apps-1" style={{ textAlign: "center" }}>
                      You have no upcoming appointments
                    </p>
                  </div>
                )}
              </div>
              <div className="newApps-button">
                <button onClick={() => setAppoinments(false)}>
                  BOOK A NEW APPOINTMENT
                </button>
              </div>
            </>
          )}
          {selectedAppButton === 1 && (
            <>
              <div className="prev-apps">
                {userAppointments.length <= 0 && (
                  <>
                    <div>
                      <p
                        className="apps-1"
                        style={{ textAlign: "center", marginTop: "100px" }}
                      >
                        You have no past appointments
                      </p>
                    </div>
                  </>
                )}
                {userAppointments.map((element, index) => (
                  <p key={index} className="apps-1">
                    {element.date} ---- {element.time}
                  </p>
                ))}
              </div>
            </>
          )}
        </div>
      )}
      {codes && <div className="logForm-main"></div>}
      {codes && (
        <div className="codesForm-container">
          <div className="logForm-buttons">
            <button className="app-button" onClick={() => setCodes(false)}>
              CLOSE
            </button>
          </div>
          <div className="appointments-title">
            <h2>Manage Codes</h2>
          </div>
          <div className="upcoming-apps">
            <div>
              <p
                className="apps-1"
                style={{ textAlign: "center", marginTop: "200px" }}
              >
                You have no active codes
              </p>
            </div>
          </div>
        </div>
      )}
      {openTimeZone && <div className="logForm-main"></div>}
      {openTimeZone && (
        <div className="timezone-container">
          {" "}
          <div className="logForm-buttons">
            <button
              className="app-button"
              onClick={() => setOpenTimeZone(false)}
            >
              CLOSE
            </button>
          </div>
          <div className="tz-titles">
            <h2 className="tz-title">Select Your Time Zone</h2>
          </div>
          <div className="tz-buttons">
            {timezones.map((element, index) => (
              <button
                key={index}
                className="tz-button"
                onClick={() => changeTimeZone(element.name, element.title)}
              >
                {element.name} - {element.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Appointments;
