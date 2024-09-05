import React, { useEffect, useState } from "react";
import "../../CSS/Shared/Reklama.css";
import xSvg from "../../bcgImgs/x.svg";

const Reklama = ({ onClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className={`reklama-main ${show ? "show" : ""}`}>
      <div className="reklama-1">
        <div className="izlaz" onClick={onClose}>
          <svg
            preserveAspectRatio="xMidYMid meet"
            data-bbox="25.975 25.975 148.05 148.05"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="25.975 25.975 148.05 148.05"
            role="presentation"
            aria-hidden="true"
          >
            <g>
              <path d="M172.9 167.6L105.3 100l67.6-67.6c1.5-1.5 1.5-3.8 0-5.3s-3.8-1.5-5.3 0L100 94.7 32.4 27.1c-1.5-1.5-3.8-1.5-5.3 0s-1.5 3.8 0 5.3L94.7 100l-67.6 67.6c-1.5 1.5-1.5 3.8 0 5.3s3.8 1.5 5.3 0l67.6-67.6 67.6 67.6c1.5 1.5 3.8 1.5 5.3 0s1.5-3.8 0-5.3z"></path>
            </g>
          </svg>
        </div>
        <div className="reklama-naslov">
          <h2>
            Please Follow & Like Our Social Media Pages To Learn More About Us
          </h2>
        </div>
      </div>
      <div className="reklama-2">
        <iframe
          name="fc779419748997f0e"
          width="416px"
          height="214px"
          data-testid="fb:page Facebook Social Plugin"
          title="fb:page Facebook Social Plugin"
          allowtransparency="true"
          allow="encrypted-media"
          src="https://www.facebook.com/v2.4/plugins/page.php?adapt_container_width=true&amp;app_id=304553036307597&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfee114152ef251291%26domain%3Dwww.eureka-learning.co.uk%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.eureka-learning.co.uk%252Ffaa50630f43d833bb%26relation%3Dparent.parent&amp;container_width=0&amp;height=214&amp;hide_cover=false&amp;href=http%3A%2F%2Fwww.facebook.com%2F501757180230156&amp;locale=en_US&amp;sdk=joey&amp;show_facepile=true&amp;show_posts=false&amp;width=416"
          className="facebook-link"
          frameBorder="0"
        ></iframe>
      </div>
      <div className="reklama-3">
        <iframe
          width="320"
          height="440"
          src="https://www.instagram.com/p/C8KJDictWZG/embed/"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Reklama;
