import { useEffect, useContext, useState } from "react";
import "../../CSS/Controls/AlterCourse.css";
import { MyContext } from "../HomeComponents/Context.js";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const AlterCourse = () => {
  const { user } = useContext(MyContext);
  const [title, setTitle] = useState("");
  const [lessons, setLessons] = useState([]);
  const [titleError, setTitleError] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const token = localStorage.getItem("token");

        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const response = await axios.get(
          process.env.REACT_APP_API_URL + `api/Course/${id}`
        );
        setTitle(response.data.title);
        if (user && response.data.profesorId !== user.id && user.role !== 2) {
          navigate("/courses");
        }
      } catch (error) {
        console.log("Error fetching course:", error);
      }
    };

    fetchCourse();
  }, [id, user]);

  const handleTitleChange = (e) => {
    setTitleError(false);
    setTitle(e.target.value);
  };

  const handleAddLesson = () => {
    setLessons((prevLessons) => [
      ...prevLessons,
      { id: Date.now(), title: "", file: null },
    ]);
  };

  const handleDeleteLesson = (id) => {
    setLessons((prevLessons) =>
      prevLessons.filter((lesson) => lesson.id !== id)
    );
  };

  const handleLessonTitleChange = (id, newTitle) => {
    setLessons((prevLessons) =>
      prevLessons.map((lesson) =>
        lesson.id === id ? { ...lesson, title: newTitle } : lesson
      )
    );
  };

  const handleFileChange = (id, newFile) => {
    setLessons((prevLessons) =>
      prevLessons.map((lesson) =>
        lesson.id === id ? { ...lesson, file: newFile } : lesson
      )
    );
  };

  const updateCourse = async () => {
    setTitleError(false);
    try {
      if (title.trim().length === 0 || title.trim() === "Enter course name") {
        setTitle("Enter course name");
        setTitleError(true);
        return;
      }
      const token = localStorage.getItem("token");

      const headers = {
        Authorization: `Bearer ${token}`,
      };
      await axios.put(
        process.env.REACT_APP_API_URL + `api/Course`,
        {
          title: title,
          id: id,
        },
        { headers }
      );

      for (let lesson of lessons) {
        if (
          lesson.title.trim().length === 0 ||
          lesson.title.trim() === "Enter lesson title"
        ) {
          lesson.title = "Enter lesson title";
          handleLessonTitleChange(lesson.id, lesson.title);
          return;
        }
        const formData = new FormData();
        formData.append("title", lesson.title);
        formData.append("video", lesson.file);
        formData.append("courseId", id);

        await axios.post(
          process.env.REACT_APP_API_URL + "api/Lesson",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }

      navigate("/courses");
    } catch (error) {
      console.log("Error updating course and lessons:", error);
    }
  };
  useEffect(() => {
    if (user && (user.role === 2 || user.role === 1)) {
    } else {
      navigate("/");
    }
  }, [user]);
  return (
    <div className="editCourse-main">
      <div className="editCourse-container">
        <div>
          <h2>Edit Course</h2>
        </div>
        <div className="editCourse-form-div">
          <div className="editCourse-form-div-1">
            <div className="editCourse-title-label">
              <p>Title of course:</p>
            </div>
            <div className="editCourse-title-input">
              <input
                type="text"
                className={
                  titleError === false
                    ? "editCourse-title"
                    : "editCourse-title errorTitle"
                }
                placeholder="Enter course title..."
                onChange={handleTitleChange}
                value={title}
              />
            </div>
          </div>
          <div className="editCourse-form-div-2">
            {lessons.map((lesson, index) => (
              <div key={lesson.id} className="lesson-div">
                <div className="lesson-title-div">
                  <input
                    type="text"
                    className="lesson-title-input"
                    placeholder={`Enter lesson ${index + 1} title...`}
                    value={lesson.title}
                    onChange={(e) =>
                      handleLessonTitleChange(lesson.id, e.target.value)
                    }
                  />
                </div>
                <div className="lesson-file-div">
                  <label
                    htmlFor={`file-upload-${lesson.id}`}
                    className="custom-file-upload"
                  >
                    <i className="fa fa-cloud-upload"></i> Upload video
                  </label>
                  <input
                    id={`file-upload-${lesson.id}`}
                    type="file"
                    onChange={(e) =>
                      handleFileChange(lesson.id, e.target.files[0])
                    }
                  />
                </div>
                <div>
                  <DeleteIcon
                    sx={{
                      backgroundColor: "gray",
                      borderRadius: "20px",
                      fontSize: "25px",
                      cursor: "pointer",
                      marginRight: "10px",
                      "&:hover": {
                        backgroundColor: "black",
                        fill: "white",
                      },
                    }}
                    onClick={() => handleDeleteLesson(lesson.id)}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="editCourse-form-div-3">
            <div>
              <button onClick={updateCourse}>Save changes</button>
            </div>
            <div>
              <button onClick={handleAddLesson}>Add lesson</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlterCourse;
