import { useContext, useEffect, useState } from "react";
import "../../CSS/Controls/AlterUser.css";
import { MyContext } from "../HomeComponents/Context.js";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const PasswordReset = () => {
  const { user, setUser } = useContext(MyContext);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();
  const { userEmail, token } = useParams();
  const [id, setId] = useState(0);

  const handleEmailChange = (e) => {
    setEmailError(false);
    setEmail(e.target.value);
  };

  useEffect(() => {
    setEmail(userEmail || "");
    localStorage.setItem("token", token);
    if (
      email.trim() !== "" &&
      email.trim() !== null &&
      email.trim() !== undefined
    ) {
      getUser();
      console.log(id);
    }
  }, []);

  const handlePasswordChange = (e) => {
    setPasswordError(false);
    setPassword(e.target.value);
  };

  const getUser = async () => {
    try {
      let r = await axios.get(
        process.env.REACT_APP_API_URL + `api/User/${email.trim()}`
      );
      let i = r.data.id;
      setId(i);
    } catch (error) {
      console.log("Error fetching user:", error);
    }
  };

  const updateUser = async () => {
    setPasswordError(false);
    setEmailError(false);
    if (email.trim().length === 0 || email.trim() === "Email is required") {
      setEmail("Email is required");
      setEmailError(true);
      return;
    }
    try {
      let r = await axios.put(
        process.env.REACT_APP_API_URL + "api/User/passwordReset",
        {
          id: id,
          email: email,
          password: password,
        }
      );
      alert(r.data);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="alterUser-main">
      <div className="alterUser-container">
        <div>
          <h2>Alter User</h2>
        </div>
        <div className="alterUser-form-div-1">
          <div className="alterUser-email-label">
            <p>User email:</p>
          </div>
          <div className="alterUser-email-input">
            <input
              type="text"
              className={
                emailError === false
                  ? "alterUser-email"
                  : "alterUser-email errorEmail"
              }
              placeholder="Enter course email..."
              onChange={handleEmailChange}
              value={email}
              disabled
            />
          </div>
        </div>
        <div className="alterUser-form-div-1">
          <div className="alterUser-email-label">
            <p>Enter password:</p>
          </div>
          <div className="alterUser-email-input">
            <input
              type="text"
              className={
                passwordError === false
                  ? "alterUser-email"
                  : "alterUser-email errorEmail"
              }
              placeholder="Enter new password..."
              onChange={handlePasswordChange}
              value={password}
            />
          </div>
        </div>
        <div>
          <button className="saveChangesButton" onClick={updateUser}>
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
