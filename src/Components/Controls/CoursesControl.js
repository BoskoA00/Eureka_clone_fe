import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../HomeComponents/Context";
import "../../CSS/Controls/CoursesControl.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const CoursesControl = () => {
  const { user } = useContext(MyContext);
  const [courses, setCourses] = useState([]);
  const [enrollmentStatus, setEnrollmentStatus] = useState({});

  const [filteredCourses, setFilteredCourses] = useState([]);
  const [search, setSearch] = useState(false);

  const navigate = useNavigate();

  const getCourses = async () => {
    try {
      let response;
      if (user.role === 2 || user.role === 0) {
        response = await axios.get(
          process.env.REACT_APP_API_URL + "api/Course"
        );
      } else if (user.role === 1) {
        response = await axios.get(
          process.env.REACT_APP_API_URL + `api/Course/getByProfessor/${user.id}`
        );
      }
      setCourses(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCourse = async (id) => {
    try {
      const token = localStorage.getItem("token");

      const headers = {
        Authorization: `Bearer ${token}`,
      };
      await axios.delete(process.env.REACT_APP_API_URL + `api/Course/${id}`, {
        headers,
      });
      getCourses();
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfEnrolled = async (courseId) => {
    try {
      let response = await axios.get(
        process.env.REACT_APP_API_URL +
          `api/UserCourse/getByUserCourseId?userId=${user.id}&courseId=${courseId}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const fetchEnrollmentStatus = async () => {
    const status = {};
    for (let course of courses) {
      const isEnrolled = await checkIfEnrolled(course.id);
      status[course.id] = isEnrolled;
    }
    setEnrollmentStatus(status);
  };

  const enrollCourse = async (courseId) => {
    try {
      await axios.post(process.env.REACT_APP_API_URL + `api/UserCourse`, null, {
        params: {
          userId: user.id,
          courseId: courseId,
        },
      });
      fetchEnrollmentStatus();
    } catch (error) {
      console.log(error);
    }
  };

  const unEnroll = async (courseId) => {
    try {
      await axios.delete(
        process.env.REACT_APP_API_URL + `api/UserCourse/deleteByUserCourseId`,
        {
          params: {
            userId: user.id,
            courseId: courseId,
          },
        }
      );
      fetchEnrollmentStatus();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!user) {
      navigate("/");
    } else {
      getCourses().then(() => fetchEnrollmentStatus());
    }
  }, [user]);

  useEffect(() => {
    if (courses.length > 0) {
      fetchEnrollmentStatus();
    }
  }, [courses]);

  const searchChange = (e) => {
    let v = e.target.value.trim();
    setSearch(false);
    if (v.length > 0) {
      setSearch(true);
      setFilteredCourses(
        courses.filter((c) => c.title.toLowerCase().includes(v.toLowerCase()))
      );
    } else if (v.length === 0) {
      setSearch(false);
      setFilteredCourses([]);
    }
  };

  return (
    <div className="coursesControls-main">
      {courses.length === 0 ? (
        <div className="coursesControl-zero">
          <h1>No courses found.</h1>
        </div>
      ) : (
        <div className="coursesControl-container">
          <div>
            <h1>Courses</h1>
          </div>
          <div className="search-input">
            <input
              type="text"
              placeholder="Search courses"
              onChange={searchChange}
            />
          </div>

          <div className="courseControls-table-div">
            <table className="courseControls-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  {(user.role === 2 || user.role === 1) && <th>Options</th>}
                </tr>
              </thead>
              <tbody className="courseTable-body">
                {!search &&
                  courses.map((c) => (
                    <tr key={c.id} className="courseControls-table-tr-1">
                      <td>{c.id}</td>
                      <td>
                        {(enrollmentStatus[c.id] ||
                          user.id === c.profesorId ||
                          user.role === 2) && (
                          <Link to={`/course/${c.id}`}>{c.title}</Link>
                        )}
                        {!enrollmentStatus[c.id] && user.role === 0 && c.title}
                      </td>
                      <td>
                        <div>
                          {user.role === 2 && (
                            <button
                              className="deleteCourse-button"
                              onClick={() => deleteCourse(c.id)}
                            >
                              Delete course
                            </button>
                          )}
                          {user.id === c.profesorId && user.role === 1 && (
                            <button
                              className="deleteCourse-button"
                              onClick={() => deleteCourse(c.id)}
                            >
                              Delete course
                            </button>
                          )}
                          {user.role === 0 && !enrollmentStatus[c.id] && (
                            <button
                              className="enrollCourse-button"
                              onClick={() => enrollCourse(c.id)}
                            >
                              Enroll
                            </button>
                          )}
                          {user.role === 0 && enrollmentStatus[c.id] && (
                            <button
                              className="deleteCourse-button"
                              onClick={() => unEnroll(c.id)}
                            >
                              Unenroll
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                {search &&
                  filteredCourses.map((c) => (
                    <tr key={c.id} className="courseControls-table-tr-1">
                      <td>{c.id}</td>
                      <td>
                        {(enrollmentStatus[c.id] ||
                          user.id === c.profesorId ||
                          user.role === 2) && (
                          <Link to={`/course/${c.id}`}>{c.title}</Link>
                        )}
                        {!enrollmentStatus[c.id] && user.role === 0 && c.title}
                      </td>
                      <td>
                        <div>
                          {user.role === 2 && (
                            <button
                              className="deleteCourse-button"
                              onClick={() => deleteCourse(c.id)}
                            >
                              Delete course
                            </button>
                          )}
                          {user.id === c.profesorId && user.role === 1 && (
                            <button
                              className="deleteCourse-button"
                              onClick={() => deleteCourse(c.id)}
                            >
                              Delete course
                            </button>
                          )}
                          {user.role === 0 && !enrollmentStatus[c.id] && (
                            <button
                              className="enrollCourse-button"
                              onClick={() => enrollCourse(c.id)}
                            >
                              Enroll
                            </button>
                          )}
                          {user.role === 0 && enrollmentStatus[c.id] && (
                            <button
                              className="deleteCourse-button"
                              onClick={() => unEnroll(c.id)}
                            >
                              Unenroll
                            </button>
                          )}
                        </div>
                      </td>
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

export default CoursesControl;
