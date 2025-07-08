import { useEffect } from "react";
import Section from "../components/Section";
import "../styles/contact.css";
import contactGirl from "../assets/contact_girl_img.png";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

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
        <img
          src={contactGirl}
          alt="Contact Illustration"
          className="contact-girl scroll-fade animate-delay-2"
        />

        <div className="contact-flex-right">
          <h2 className="contact-title scroll-fade animate-delay-3">
            Contact Us
          </h2>

          <div className="one-line scroll-fade animate-delay-4">
            <div className="icon-wrapper mail-icon">
              <FiMail size={24} color="#5b818a" />
            </div>
            <a
              href="mailto:project.ecosanitation@gmail.com"
              className="one-line-text"
            >
              project.ecosanitation@gmail.com
            </a>
          </div>

          <div className="one-line scroll-fade animate-delay-5">
            <div className="icon-wrapper insta-icon">
              <FaInstagram size={24} color="#5b818a" />
            </div>
            <a
              href="https://instagram.com/project.ecosanitation"
              target="_blank"
              rel="noopener noreferrer"
              className="one-line-text"
            >
              instagram.com/project.ecosanitation
            </a>
          </div>

          <div className="one-line scroll-fade animate-delay-6">
            <div className="icon-wrapper phone-icon">
              <FiPhone size={24} color="#5b818a" />
            </div>
            <a href="tel:+911234567890" className="one-line-text">
              +91 96209 82968
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
