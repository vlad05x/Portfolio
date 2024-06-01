import React from "react";
import "../css/style.scss";
import logoV from "../images/logoV.svg"
import InstaIcon from "../images/Social_media/INSTAGRAM_icon-icons.com_65535.svg"
import LinkedinIcon from "../images/Social_media/linkedin-in.svg"
import TelegramIcon from "../images/Social_media/icons8-телеграмма-app.svg"
import EmailIcon from "../images/Social_media/email.svg"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer_content">
          <img src={logoV} alt="logo" />
          <h1 className="title" id="contact1">
            Contact Me
          </h1>
          <p className="text_services text_footer">
            I am always open to discuss your project, improve your online
            presence or help with Web-Development
          </p>
          <div className="block_social">
            <a href="https://www.instagram.com/vlad05x/" target="_blank">
              <img
                src={InstaIcon}
                alt="instalogo"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/vlad-honcharenko-4a003228b/"
              target="_blank"
            >
              <img src={LinkedinIcon} alt="LinkedinLogo" />
            </a>
            <a href="https://t.me/vlad05x" target="_blank">
              <img
                src={TelegramIcon}
                alt="Telergamicon"
              />
            </a>
            <a
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
              target="_blank"
            >
              <img src={EmailIcon} alt="emailLogo" />
            </a>
          </div>
          <p className="text_services text_copyright">
            Created by<span id="Vlad_copyright"> Vlad</span> | All Reserved!
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer