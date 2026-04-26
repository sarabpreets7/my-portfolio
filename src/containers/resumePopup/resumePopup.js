// ResumePopup.js
import React from "react";
import './resumePopup.css';
import { greeting } from "../../portfolio.js";

const ResumePopup = ({ onClose }) => {
  const resumePreviewUrl = greeting.resumeLink.replace("/view?usp=sharing", "/preview");

  return (
    <div className="resume-popup" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <iframe
          title="My Resume"
          src={resumePreviewUrl}
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default ResumePopup;
