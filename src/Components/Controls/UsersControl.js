import React, { useContext, useEffect, useState } from "react";
import "../../CSS/Controls/UserControls.css";
import axios from "axios";
import { MyContext } from "../HomeComponents/Context.js";
import { Link, useNavigate } from "react-router-dom";
const UsersControl = () => {
  const [users, setUsers] = useState([]);
  const { user } = useContext(MyContext);
  const [seaching, setSearching] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const navigate = useNavigate();
  const getUsers = async () => {
    try {
      let response = await axios.get(
        process.env.REACT_APP_API_URL + "api/User"
      );
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  useEffect(() => {
    if (user && user.role === 2) {
    } else {
      navigate("/");
    }
  }, [user]);
  const deleteUser = async (id) => {
    const token = localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      let response = await axios.delete(
        process.env.REACT_APP_API_URL + `api/User/deleteUser/${id}`,
        { headers }
      );
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };
  const promoteUser = async (id) => {
    try {
      const token = localStorage.getItem("token");

      const headers = {
        Authorization: `Bearer ${token}`,
      };
      let response = await axios.put(
        process.env.REACT_APP_API_URL + `api/User/promoteUser/${id}`,
        {},
        { headers }
      );
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };
  const demoteUser = async (id) => {
    try {
      const token = localStorage.getItem("token");

      const headers = {
        Authorization: `Bearer ${token}`,
      };
      let response = await axios.put(
        process.env.REACT_APP_API_URL + `api/User/demoteUser/${id}`,
        {},
        { headers }
      );
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };
  const promoteToAdmin = async (id) => {
    try {
      const token = localStorage.getItem("token");

      const headers = {
        Authorization: `Bearer ${token}`,
      };
      let response = await axios.put(
        process.env.REACT_APP_API_URL + `api/User/promoteToAdmin/${id}`,
        {},
        { headers }
      );
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };
  const searchChange = (e) => {
    setSearching(false);
    let v = e.target.value;
    if (v.trim().length > 0) {
      setSearching(true);
      setFilteredUsers(
        users.filter((user) =>
          user.email.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    } else if (v.trim() === "") {
      setSearching(false);
      setFilteredUsers([]);
    }
  };
  return (
    <div className="usersControls-main">
      {users.length === 0 ? (
        <div className="usersControls-zero-container">
          <h1>No users found</h1>
        </div>
      ) : (
        <div className="usersControls-container">
          <div className="usersControls-container-title">
            <h1>Users</h1>
          </div>
          <div className="search-input">
            <input
              type="text"
              placeholder="Search users"
              onChange={searchChange}
            />
          </div>
          <div className="usersControls-table-div">
            <table className="usersControls-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Email</th>
                  <th>Role</th>
                  {users.role === 2 && <th>Options</th>}
                </tr>
              </thead>
              <tbody className="usersTable-body">
                {!seaching &&
                  users.map(
                    (u) =>
                      u.id != user.id && (
                        <tr key={u.id} className="usersControls-table-tr-1">
                          <td>{u.id}</td>
                          <td>
                            {user.role !== 2 ? (
                              u.email
                            ) : (
                              <Link to={`/alterUser/${u.id}`}>{u.email}</Link>
                            )}
                          </td>
                          <td>
                            {u.role === 0 && "Student"}
                            {u.role === 1 && "Teacher"}{" "}
                            {u.role === 2 && "Administrator"}
                          </td>
                          {user.role === 2 && (
                            <td>
                              <div className="userOptions-row">
                                {u.role === 0 && (
                                  <button
                                    className="deleteUser-button"
                                    onClick={() => deleteUser(u.id)}
                                  >
                                    Delete user
                                  </button>
                                )}
                                {u.role === 1 && (
                                  <button
                                    className="deleteUser-button"
                                    onClick={() => demoteUser(u.id)}
                                  >
                                    Demote user
                                  </button>
                                )}
                                {u.role === 2 && (
                                  <button
                                    className="deleteUser-button"
                                    onClick={() => promoteUser(u.id)}
                                  >
                                    Demote user
                                  </button>
                                )}
                                {u.role === 0 && (
                                  <button
                                    className="promoteUser-button"
                                    onClick={() => promoteUser(u.id)}
                                  >
                                    Promote user
                                  </button>
                                )}
                                {u.role === 1 && (
                                  <button
                                    className="promoteUser-button"
                                    onClick={() => promoteToAdmin(u.id)}
                                  >
                                    Promote user
                                  </button>
                                )}
                              </div>
                            </td>
                          )}
                        </tr>
                      )
                  )}
                {seaching &&
                  filteredUsers.map((u) => (
                    <tr key={u.id} className="usersControls-table-tr-1">
                      <td>{u.id}</td>
                      <td>
                        {user.role !== 2 ? (
                          u.email
                        ) : (
                          <Link to={`/alterUser/${u.id}`}>{u.email}</Link>
                        )}
                      </td>
                      <td>
                        {u.role === 0 && "Student"}
                        {u.role === 1 && "Teacher"}{" "}
                        {u.role === 2 && "Administrator"}
                      </td>
                      {user.role === 2 && (
                        <td>
                          <div className="userOptions-row">
                            {u.role === 0 && (
                              <button
                                className="deleteUser-button"
                                onClick={() => deleteUser(u.id)}
                              >
                                Delete user
                              </button>
                            )}
                            {u.role === 1 && (
                              <button
                                className="deleteUser-button"
                                onClick={() => demoteUser(u.id)}
                              >
                                Demote user
                              </button>
                            )}
                            {u.role === 2 && (
                              <button
                                className="deleteUser-button"
                                onClick={() => promoteUser(u.id)}
                              >
                                Demote user
                              </button>
                            )}
                            {u.role === 0 && (
                              <button
                                className="promoteUser-button"
                                onClick={() => promoteUser(u.id)}
                              >
                                Promote user
                              </button>
                            )}
                            {u.role === 1 && (
                              <button
                                className="promoteUser-button"
                                onClick={() => promoteToAdmin(u.id)}
                              >
                                Promote user
                              </button>
                            )}
                          </div>
                        </td>
                      )}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersControl;
