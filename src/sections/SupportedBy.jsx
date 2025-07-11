import React, { useEffect } from "react";
import "../styles/supportedBy.css";
import logo1 from "../assets/logo1.jpeg";
// import logo2 from "../assets/logo2.jpeg";
import logo3 from "../assets/logo3.jpeg";
import logo4 from "../assets/logo4.jpeg";
import logo5 from "../assets/logo5.jpeg";
import logo6 from "../assets/logo6.png";
import logo7 from "../assets/logo7.jpeg";

const SupportedBy = () => {
  const logos = [logo4, logo1, logo3, logo5, logo6, logo7];

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
    <section id="supported-by" className="supported-by-section scroll-fade">
      <h2 className="supported-by-heading">Supported By</h2>
      <div className="supported-by-logos">
        {logos.map((logo, index) => (
          <div key={index} className="supported-by-logo-wrapper">
            <img src={logo} alt={`Supporter ${index + 1}`} className="supported-by-logo" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SupportedBy;
