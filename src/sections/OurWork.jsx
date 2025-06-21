import React, { useEffect } from "react";
import Section from "../components/Section";
import "../styles/ourWork.css";
import workImage1 from "../assets/students_1.png";
import workImage2 from "../assets/students_2.png";
import workImage3 from "../assets/students_3.png";
import transitionImage1 from "../assets/cross_bottom.png";
import aboutImage3 from "../assets/poly_left.png";
import aboutImage4 from "../assets/poly_right.png";
import aboutImage5 from "../assets/our-process.jpeg";

const OurWork = () => {

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            observer.unobserve(entry.target); // One-time animation
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.scroll-fade');
    animatedElements.forEach(el => observer.observe(el));
  }, []);

  return (
    <Section id="our-work" className="our-work">
      {/* Decorative background images */}
      <img src={transitionImage1} className="work-about-image2 scroll-fade animate-delay-1" alt="Transition" />
      <img src={aboutImage3} className="work-about-image3 scroll-fade animate-delay-2" alt="Polygon Left" />
      <img src={aboutImage4} className="about-image4 scroll-fade animate-delay-3" alt="Polygon Right" />

      {/* Main Heading */}
      <div className="work-main scroll-fade animate-delay-1">
        <div className="work-main-left">
          <h3 className="work-heading">OUR WORK</h3>
          <p className="work-description-1">
            Here are some of the projects we are currently working on.
          </p>
        </div>
      </div>

      {/* Project Cards */}
      <div className="work-flex-container scroll-fade animate-delay-2">
        <div className="work-hover-block">
          <img src={workImage1} alt="Workshop Visual" />
          <div className="work-hover-text">
            Project Ecosanitation is dedicated to educating teenage girls about the importance of menstrual hygiene.
          </div>
        </div>

        <div className="work-hover-block">
          <img src={workImage2} alt="Awareness Visual" />
          <div className="work-hover-text">
            It aims to raise awareness about using proper menstrual products and helps girls understand the biological significance of maintaining menstrual health.
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="work-bottom-3 scroll-fade animate-delay-3">
        <h3 className="work-description-3-button">PRODUCT</h3>
        <h4 className="work-description-3-title">Bio-Degradable Sanitary Pads</h4>
        <h4 className="work-description-3-sub-title">Coming Soon</h4>

        <div className="work-hover-block">
          <div className="work-hover-block-3">
          <img src={workImage3} alt="Bio-Degradable Pads" />
          <div className="work-hover-text">
            We are creating biodegradable sanitary pads made from hemp fiber and bamboo cellulose, designed to be eco-friendly, affordable, and effective. Our goal is to reduce environmental impact while promoting sustainable living. Currently, we are in the prototyping stage at the Incubation Centre, MAHE, refining our design for maximum comfort and performance.
          </div>
          </div>
        </div>
      </div>

      {/* Process Image */}
      <div className="our-process-image-container scroll-fade animate-delay-2">
        <img src={aboutImage5} alt="Our Process" className="our-process-image" />
      </div>
    </Section>
  );
};

export default OurWork;
