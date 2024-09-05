import React, { useContext, useEffect, useState } from "react";
import "../../CSS/Controls/MyCourses.css";
import { MyContext } from "../HomeComponents/Context";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const MyCourses = () => {
  const [myCourses, setMyCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [search, setSearch] = useState(false);
  const { user } = useContext(MyContext);
  const navigate = useNavigate();
  const getMyCourses = async () => {
    try {
      let response = await axios.get(
        process.env.REACT_APP_API_URL + `api/UserCourse/getByUserId/${user.id}`
      );
      const enrolledCourses = response.data;

      const courseDetails = await Promise.all(
        enrolledCourses.map(async (enrolledCourse) => {
          const courseResponse = await axios.get(
            process.env.REACT_APP_API_URL +
              `api/Course/${enrolledCourse.courseId}`
          );
          return courseResponse.data;
        })
      );

      setMyCourses(courseDetails);
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
      getMyCourses();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user && user.id) {
      getMyCourses();
    } else {
      navigate("/");
    }
  }, [user]);

  const handleSearch = (e) => {
    let v = e.target.value.trim();
    setSearch(false);
    if (v.length > 0) {
      setSearch(true);
      setFilteredCourses(
        myCourses.filter((c) => c.title.toLowerCase().includes(v.toLowerCase()))
      );
    } else {
      setSearch(false);
      setFilteredCourses([]);
    }
  };

  return (
    <div className="myCoursesMain">
      {myCourses.length === 0 ? (
        <div className="myCourses-zero">
          <div>
            <h1>No enrolled courses</h1>
          </div>
        </div>
      ) : (
        <div className="myCourses-container">
          <div>
            <h1>Enrolled Courses</h1>
          </div>
          <div className="search-input">
            <input
              type="text"
              placeholder="Search your courses"
              onChange={handleSearch}
            />
          </div>
          <div className="tableMC-div">
            <table className="tableMc">
              <thead></thead>
              <tbody>
                {!search &&
                  myCourses.map((course) => (
                    <tr key={course.id}>
                      <td>
                        <h2>
                          <Link to={`/course/${course.id}`}>
                            {course.title}
                          </Link>
                        </h2>
                      </td>
                      <td>
                        <button
                          onClick={() => unEnroll(course.id)}
                          className="unenroll-button"
                        >
                          Unenroll
                        </button>
                      </td>
                    </tr>
                  ))}
                {search &&
                  filteredCourses.map((course) => (
                    <tr key={course.id}>
                      <td>
                        <h2>
                          <Link to={`/course/${course.id}`}>
                            {course.title}
                          </Link>
                        </h2>
                      </td>
                      <td>
                        <button
                          onClick={() => unEnroll(course.id)}
                          className="unenroll-button"
                        >
                          Unenroll
                        </button>
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

export default MyCourses;
