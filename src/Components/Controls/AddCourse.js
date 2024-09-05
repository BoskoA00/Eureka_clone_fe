import { useContext, useEffect, useState } from "react";
import "../../CSS/Controls/AddCourse.css";
import { MyContext } from "../HomeComponents/Context.js";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const { user } = useContext(MyContext);
  const [title, setTitle] = useState("");
  const [lessons, setLessons] = useState([]);
  const [titleError, setTitleError] = useState(false);
  const navigate = useNavigate();
  const handleTitleChange = (e) => {
    setTitleError(false);
    const title = e.target.value;
    setTitle(title);
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

  const UploadCourse = async () => {
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

      const courseResponse = await axios.post(
        process.env.REACT_APP_API_URL + "api/Course",
        {
          title: title,
          profesorId: user.id,
        },
        { headers }
      );

      const courseId = courseResponse.data.id;

      for (let lesson of lessons) {
        if (
          lesson.title.trim().length === 0 ||
          lesson.title.trim() === "Enter lesson title"
        ) {
          lesson.title = "Enter lesson title";
          handleLessonTitleChange(lesson.id, lesson.title);
          return;
        }
        if (lesson.video === "") {
          alert("All lesson need to have videos");
          return;
        }
        const formData = new FormData();
        formData.append("title", lesson.title);
        formData.append("video", lesson.file);
        formData.append("courseId", courseId);

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
      console.log("Error uploading course and lessons:", error);
    }
  };
  useEffect(() => {
    if (user && (user.role === 1 || user.role === 2)) {
    } else {
      navigate("/");
    }
  }, [user]);
  return (
    <div className="addCourse-main">
      <div className="addCourse-container">
        <div>
          <h2>Add new course</h2>
        </div>
        <div className="addCourse-form-div">
          <div className="addCourse-form-div-1">
            <div className="addCourse-title-label">
              <p>Title of course:</p>
            </div>
            <div className="addCourse-title-input">
              <input
                type="text"
                className={
                  titleError === false
                    ? "addCourse-title"
                    : "addCourse-title errorTitle"
                }
                placeholder="Enter course title..."
                onChange={handleTitleChange}
                value={title}
              />
            </div>
          </div>
          <div className="addCourse-form-div-2">
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
          <div className="addCourse-form-div-3">
            <div>
              <button onClick={UploadCourse}>Create course</button>
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

export default AddCourse;
