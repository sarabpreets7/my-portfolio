// ResumePopup.js
import React from "react";
import './resumePopup.css';
import resume from '../../assests/pdf/Sarabpreet_singh_resume_23.pdf';

const ResumePopup = ({ onClose }) => {
  return (
    <div className="resume-popup" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <iframe
          title="My Resume"
          src={resume}
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default ResumePopup;
