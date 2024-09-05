import { Link, useNavigate, useParams } from "react-router-dom";
import "../../CSS/Controls/Course.css";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { MyContext } from "../HomeComponents/Context.js";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DeleteIcon from "@mui/icons-material/Delete";
const Course = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const [videoPath, setVideoPath] = useState("");
  const [videoPlay, setVideoPlay] = useState(false);
  const { user } = useContext(MyContext);
  const navigate = useNavigate();

  const getCourse = async () => {
    try {
      let response = await axios.get(
        process.env.REACT_APP_API_URL + `api/Course/${id}`
      );
      setCourse(response.data);
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
      navigate("/myCourses");
    } catch (error) {
      console.log(error);
    }
  };
  const DeleteCourse = async () => {
    try {
      const token = localStorage.getItem("token");

      const headers = {
        Authorization: `Bearer ${token}`,
      };
      await axios.delete(process.env.REACT_APP_API_URL + `api/Course/${id}`, {
        headers,
      });
      navigate("/courses");
    } catch (error) {
      console.log(error);
    }
  };
  const DeleteLesson = async (id) => {
    try {
      const token = localStorage.getItem("token");

      const headers = {
        Authorization: `Bearer ${token}`,
      };
      let r = await axios.delete(
        process.env.REACT_APP_API_URL + `api/Lesson/${id}`,
        {
          headers,
        }
      );
      getCourse();
    } catch (error) {
      console.log(error);
    }
  };

  const playVid = (videoPath) => {
    setVideoPlay(true);
    setVideoPath(videoPath);
  };

  useEffect(() => {
    if (!user) {
      navigate("/");
    } else {
      getCourse();
    }
  }, [user, id]);

  return (
    <div className="course-main">
      <div>
        <h1>{course.title || "No course selected"}</h1>
      </div>
      <div className="courseTable-div">
        <table className="courseTb">
          <thead></thead>
          <tbody>
            {course.lessons &&
              course.lessons.map((lesson) => (
                <tr key={lesson.id}>
                  {" "}
                  <td>
                    <h2>{lesson.title}</h2>
                  </td>
                  <td>
                    <PlayArrowIcon
                      sx={{
                        backgroundColor: "gray",
                        borderRadius: "20px",
                        "&:hover": {
                          backgroundColor: "black",
                          fill: "white",
                        },
                      }}
                      onClick={() => playVid(lesson.videoPath)}
                    />
                  </td>
                  {user &&
                    (user.id === course.profesorId || user.role === 2) && (
                      <td>
                        <DeleteIcon
                          sx={{
                            backgroundColor: "gray",
                            borderRadius: "20px",
                            fontSize: "25px",
                            "&:hover": {
                              backgroundColor: "black",
                              fill: "white",
                            },
                          }}
                          onClick={() => DeleteLesson(lesson.id)}
                        />
                      </td>
                    )}
                </tr>
              ))}
            {course.lessons && course.lessons.length === 0 && (
              <tr>
                <td colSpan="2">
                  <h1>This course has no lessons</h1>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div>
        {user && user.role === 0 && (
          <button
            className="unenroll-button"
            onClick={() => unEnroll(course.id)}
          >
            Unenroll me
          </button>
        )}
        {user && (user.role === 2 || course.profesorId === user.id) && (
          <>
            <button className="unenroll-button" onClick={() => DeleteCourse()}>
              Delete course
            </button>
            <button className="alterCourse-button">
              <Link to={`/alterCourse/${course.id}`}>Alter course</Link>
            </button>
          </>
        )}
      </div>
      {videoPlay && (
        <div
          className="video-background"
          onClick={() => {
            setVideoPath("");
            setVideoPlay(false);
          }}
        ></div>
      )}
      {videoPlay && (
        <div className="video-div">
          <div>
            <h2>{course.title}</h2>
          </div>
          <div className="video-player">
            <video className="video-pl" controls>
              <source
                src={process.env.REACT_APP_API_URL + `${videoPath}`}
                type="video/mp4"
              />
              <source
                src={process.env.REACT_APP_API_URL + `${videoPath}`}
                type="video/ogg"
              />
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default Course;
