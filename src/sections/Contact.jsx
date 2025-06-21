import { useEffect } from "react";
import Section from "../components/Section";
import "../styles/contact.css";
import logoContact from "../assets/logo_contact.png";
import contactGirl from "../assets/contact_girl_img.png";
import instaLogo from "../assets/logo-instagram.png";
import mailLogo from "../assets/logo-mail.png";
import rahdaLogo from "../assets/rahda-foundation-logo.jpeg";

const Contact = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll(".scroll-fade");
    animatedElements.forEach(el => observer.observe(el));
  }, []);

  return (
    <Section id="contact" className="contact scroll-fade">
      <div className="contact-us-flex scroll-fade animate-delay-1">
        <img src={contactGirl} alt="Contact Illustration" className="contact-girl scroll-fade animate-delay-2" />
        
        <div className="contact-flex-right">
          <h2 className="contact-title scroll-fade animate-delay-3">Contact Us</h2>

          <div className="one-line scroll-fade animate-delay-4">
            <img src={mailLogo} className="mail-logo" alt="Mail Icon" />
            <a href="mailto:project.ecosanitation@gmail.com" className="one-line-text">
              project.ecosanitation@gmail.com
            </a>
          </div>

          <div className="one-line scroll-fade animate-delay-5">
            <img src={instaLogo} className="insta-logo" alt="Instagram Icon" />
            <a
              href="https://instagram.com/project.ecosanitation"
              target="_blank"
              rel="noopener noreferrer"
              className="one-line-text"
            >
              instagram.com/project.ecosanitation
            </a>
          </div>

          <img src={logoContact} alt="EcoSanitation Logo" className="logo-contact scroll-fade animate-delay-6" />
          <img src={rahdaLogo} alt="Rahda Foundation Logo" className="logo-contact scroll-fade animate-delay-7" />
        </div>
      </div>
    </Section>
  );
};

export default Contact;
