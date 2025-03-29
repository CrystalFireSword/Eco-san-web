import React from "react";
import Section from "../components/Section";
import "../styles/contact.css";
import logoContact from "../assets/logo_contact.png";
import contactGirl from "../assets/contact_girl_img.png";
import instaLogo from "../assets/logo-instagram.png";
import mailLogo from "../assets/logo-mail.png";
/*

*/
const Contact = () => {
  return <Section id="contact" className="contact">
   <div className="contact-us-flex"> 
  <img src={contactGirl} alt="Contact Girl" className="contact-girl"></img>
  <div className="contact-flex-right">
    <h2 className="contact-title">Contact Us</h2>
    <div className="one-line">
      <img src={mailLogo} className="mail-logo"></img>
      <a href="mailto:project.ecosanitation@gmail.com" className="one-line-text">
        project.ecosanitation@gmail.com
      </a>
    </div>
    <div className="one-line">
      <img src={instaLogo} className="insta-logo"></img>
      <a 
        href="https://instagram.com/project.ecosanitation" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="one-line-text"
      >
        instagram.com/project.ecosanitation
      </a>
    </div>
    <img src={logoContact} alt="Contact Logo" className="logo-contact"></img>
  </div>
</div>
  </Section>;
};
export default Contact;