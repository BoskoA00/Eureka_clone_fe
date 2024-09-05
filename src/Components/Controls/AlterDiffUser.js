import { useNavigate, useParams } from "react-router-dom";
import "../../CSS/Controls/AlterDiffUser.css";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../HomeComponents/Context.js";
import axios from "axios";

const AlterDiffUser = () => {
  const { id } = useParams();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();
  const [userToChange, SetUserUserToChange] = useState({});
  const { user } = useContext(MyContext);

  useEffect(() => {
    if (user.role !== 2) {
      navigate("/home");
      return;
    }
    getUser();
  }, [id]);

  useEffect(() => {
    if (userToChange.email) {
      setEmail(userToChange.email);
    }
  }, [userToChange]);

  const getUser = async () => {
    try {
      let response = await axios.get(
        process.env.REACT_APP_API_URL + `api/User/${id}`
      );
      SetUserUserToChange(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEmailChange = (e) => {
    setEmailError(false);
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordError(false);
    setPassword(e.target.value);
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
        process.env.REACT_APP_API_URL + "api/User/alterUser",
        {
          id: userToChange.id,
          email: email,
          password: password,
        }
      );
      if (r.data === "User updated successfully") {
        navigate("/users");
      }
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

export default AlterDiffUser;
