import React, { createContext, useState } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [country, setCountry] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvc, setCVC] = useState("");
  const [expDate, setExpDate] = useState("");
  const [user, setUser] = useState(null);
  const [state, setState] = useState(1);
  const [selectedTime, setSelectedTime] = useState("");
  const [form, setForm] = useState(false);
  const [feeCalculator, setFeeCalculator] = useState(false);
  const changeState = (newValue) => {
    setState(newValue);
  };

  const saveSelectedTime = (time) => {
    setSelectedTime(time);
  };
  const changeForm = (newValue) => {
    setForm(newValue);
  };
  const changeFeeCalculator = (value) => {
    setFeeCalculator(value);
  };

  return (
    <MyContext.Provider
      value={{
        feeCalculator,
        changeFeeCalculator,
        state,
        changeState,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        phoneNumber,
        setPhoneNumber,
        email,
        setEmail,
        selectedTime,
        saveSelectedTime,
        changeState,
        changeForm,
        form,
        date,
        setDate,
        time,
        setTime,
        country,
        setCountry,
        cardNumber,
        setCardNumber,
        cvc,
        setCVC,
        expDate,
        setExpDate,
        selectedTime,
        user,
        setUser,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
