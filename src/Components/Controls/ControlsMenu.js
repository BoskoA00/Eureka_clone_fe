import React, { useContext, useState } from "react";
import "../../CSS/Controls/ControlsMenu.css";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { MyContext } from "../HomeComponents/Context";
const ControlsMenu = () => {
  const [opened, setOpened] = useState(false);
  const { user } = useContext(MyContext);

  return (
    <>
      {opened === false && (
        <div className="controlsMenu-main-closed">
          <SettingsIcon
            sx={{ fontSize: "40pt" }}
            onClick={() => {
              setOpened(!opened);
            }}
          />
        </div>
      )}
      {opened && (
        <div className="controlsMenu-opened">
          <div className="controlsMenu-close-div">
            <CloseIcon
              sx={{ fontSize: "40pt" }}
              onClick={() => {
                setOpened(!opened);
              }}
            />
          </div>
          <div className="controlsMenu-nav-div">
            <ul className="controlsMenu-nav-ul">
              <li className="controlsMenu-nav-li">
                <Link to={"/alterUser"}>Alter profile</Link>
              </li>

              {user.role === 2 && (
                <li className="controlsMenu-nav-li">
                  <Link to={"/users"}> Users</Link>
                </li>
              )}
              <li className="controlsMenu-nav-li">
                <Link to={"/courses"}>
                  {user.role === 0 && "Courses"}

                  {user.role === 1 && "My courses"}

                  {user.role === 2 && "Courses"}
                </Link>
              </li>
              {(user.role === 1 || user.role === 2) && (
                <li className="controlsMenu-nav-li">
                  <Link to={"/addCourse"}>Add course</Link>
                </li>
              )}
              {user.role === 0 && (
                <li className="controlsMenu-nav-li">
                  <Link to={"/myCourses"}>My Courses</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default ControlsMenu;
