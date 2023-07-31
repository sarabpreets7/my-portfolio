import React from "react";
import './emailPopup.css';


const EmailPopup = ({ email, onClose,color }) => {
  console.log(color);
  const handleCopyEmail = () => {
    // Function to copy the email to the clipboard
    navigator.clipboard.writeText(email);
    onClose();
  };

  return (
    <div className="email-popup" style={{background:color}}>
      <div className="email">{email}</div>
      <button onClick={handleCopyEmail}>Copy</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default EmailPopup;
