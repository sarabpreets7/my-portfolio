import React,{useState} from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";
import styled from "styled-components";
import EmailPopup from "../emailPopup/emailPopup";

const IconWrapper = styled.span`
  i {
    background-color: ${(props) => props.backgroundColor};
  }
  &:hover i {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

const SocialMedia = (props) => {
  
  const [isEmailPopupOpen, setIsEmailPopupOpen] = useState(false);
  const email = "sarabpreets7@gmail.com"; // Replace with your actual email

  const toggleEmailPopup = () => {
    setIsEmailPopupOpen(!isEmailPopupOpen);
  };

  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media) => {
        return media.name == "Gmail" ? (
          <span
            key={media.name}
            className={`icon-button`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleEmailPopup}
          >
            {isEmailPopupOpen && (
              <EmailPopup email={email} color={props.theme.body} onClose={toggleEmailPopup} />
            )}
           {!isEmailPopupOpen &&(<IconWrapper {...media} {...props}>
              <i className={`fab ${media.fontAwesomeIcon}`}></i>
            </IconWrapper>)
      }
          </span>
        ) : (
          <a
            key={media.name}
            href={media.link}
            className={`icon-button`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrapper {...media} {...props}>
              <i className={`fab ${media.fontAwesomeIcon}`}></i>
            </IconWrapper>
          </a>
        );
      })}
    </div>
  );
};

export default SocialMedia;
