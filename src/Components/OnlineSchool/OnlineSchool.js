import React, { useState, useRef } from "react";
import "../../CSS/OnlineSchool/OnlineSchool.css";
import MusicOffIcon from "@mui/icons-material/MusicOff";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Link } from "react-router-dom";

function OnlineSchool() {
  const [muted, setMuted] = useState(true);
  const [videoHover, setVideoHover] = useState(false);
  const [muteHover, setMuteHover] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    const video = videoRef.current;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <div className="os-main">
        <div className="os-1">
          <div className="os-1-1">
            <div className="os-1-1-1">
              <h4>
                WHY WE RECOMMEND <br /> HOMESCHOOLING
              </h4>
            </div>
            <div className="os-1-1-2">
              <img src="/Images/img1.png" />
            </div>
          </div>
          <div className="os-1-2">
            <div className="os-1-2-1">
              <span className="os-1-2-1-span">
                <Link to={"/appointments"}>Book a free consultation</Link>
              </span>
            </div>
            <div className="os-1-2-2">
              <h6>
                Deciding whether to home school children or to enrol them into a
                mainstream school can be a difficult decision. First becoming
                popular in the 1970’s, the number of children learning at home
                is increasing each year.
                <br /> Today’s mainstream establishments cannot always provide
                for the educational needs of certain children resulting in
                increased levels of stress and anxiety. The increased social
                pressures, large classroom sizes and possible bullying can also
                contribute to this. Home schooling provides a relaxed
                environment, catering to a child’s individual needs.
              </h6>
            </div>
          </div>
        </div>
        <div className="os-2">
          <h4>WHAT DOES HOMESCHOOLING WITH EUREKA LOOK LIKE?</h4>
        </div>
        <div className="os-3" style={{ position: "relative" }}>
          <video
            ref={videoRef}
            autoPlay
            src="/Images/videoSnimak.mp4"
            loop
            muted
            onMouseEnter={() => setVideoHover(true)}
            onMouseLeave={() => setVideoHover(false)}
            onClick={togglePlayPause}
          ></video>
          {(!isPlaying || videoHover || muteHover) && (
            <div
              className="mute-button"
              onMouseEnter={() => setMuteHover(true)}
              onMouseLeave={() => {
                setMuteHover(false);
              }}
              onClick={toggleMute}
            >
              {muted ? <MusicNoteIcon /> : <MusicOffIcon />}
            </div>
          )}
          {!isPlaying && (
            <div className="play-button" onClick={togglePlayPause}>
              <PlayArrowIcon style={{ fontSize: 50 }} />
            </div>
          )}
        </div>
        <div className="os-4">
          <div className="os-4-1">
            <h3>What we offer</h3>
          </div>
          <div className="os-4-2">
            <div className="os-4-2-1">
              <div className="os-4-2-1-1">
                <h4>
                  We offer classes just like mainstream schools and
                  <br /> colleges, from the comfort of your own home, as
                  <br /> well as:
                </h4>
              </div>
              <div className="os-4-2-1-2">
                <ul>
                  <li>Tailored online private lessons</li>
                  <li>Flexible packages to suit your needs</li>
                  <li>Support for SEN students</li>
                  <li>Large selection of online subjects</li>
                  <li>
                    Interactive online platform to provide worksheets
                    <br /> and homework
                  </li>
                  <li>Recorded live lessons</li>
                </ul>
              </div>
            </div>
            <div className="os-4-2-2">
              <img src="Images/GirlAndTeacher.png" />
            </div>
          </div>
        </div>
        <div className="os-5">
          <div className="os-5-1">
            <h3>Our approach</h3>
          </div>
          <div className="os-5-2">
            <div className="os-5-2-1">
              <div className="os-5-2-1-1">
                <img src="/Images/OpenLaptop.png" />
              </div>
              <div className="os-5-2-1-2">
                <h6>
                  Live lessons
                  <br />
                  Our online classes are delivered via Zoom. We
                  <br /> timetable our online classes weekly, Monday to
                  <br /> Friday and follow a set agenda with continuous
                  <br /> support. The freedom of using this method of
                  <br /> virtual learning, enables you to access the class
                  <br /> wherever you have an internet connection
                  <br /> around your existing commitments.
                </h6>
              </div>
            </div>
            <div className="os-5-2-1">
              <div className="os-5-2-1-2">
                <h6>
                  Recorded classes
                  <br />
                  All our live online classes are recorded
                  <br /> meaning that students can access these at
                  <br /> any time. This provides an excellent tool for
                  <br /> students to be able to revisit parts of the
                  <br /> class they are unsure of or catch up on an
                  <br /> online lesson they missed, providing
                  <br /> maximum flexibility around family life and <br />
                  other commitments.
                </h6>
              </div>
              <div className="os-5-2-1-1">
                <img src="/Images/OnLaptop.png" />
              </div>
            </div>
            <div className="os-5-2-1">
              <div className="os-5-2-1-1">
                <img src="/Images/BoyReading.png" />
              </div>
              <div className="os-5-2-1-2">
                <h6>
                  Interactive online platform
                  <br />
                  Each student has access to a customised online
                  <br /> platform to access course material. This portal
                  <br /> allows homework to be submitted directly to their
                  <br /> teacher for marking, reducing the amount of
                  <br /> paper used. Grades and feedback will be
                  <br /> provided regularly for continuous support and
                  <br />
                  encouragement. Parents get weekly updates <br />
                  about the students progress, marks, and missed
                  <br />
                  homework.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OnlineSchool;
