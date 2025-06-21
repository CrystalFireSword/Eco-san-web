import React from "react";
import Section from "../components/Section";
import "../styles/about.css";
import aboutImage from "../assets/girl_window.png";
import aboutImage2 from "../assets/star_bottom.png";
import aboutImage3 from "../assets/ellipse_1.png";
import transitionImage1 from "../assets/cross_top.png";
import { useScrollAnimation } from "../utils/useScrollAnimation";
const About = () => {

   useScrollAnimation();
  return (
    <Section id="about" className="about">
  <img src={aboutImage2} alt="About Us2" className="about-image2 animate-on-scroll" />
  <img src={aboutImage3} alt="About Us3" className="about-image3 animate-on-scroll" />

  <div className="about-box animate-on-scroll">
    <h3 className="about-heading animate-on-scroll">ABOUT US</h3>
    <p className="about-description-1 animate-on-scroll">
      Project Ecosanitation is dedicated to transforming menstrual hygiene in India by empowering women with the knowledge and resources to embrace safe and sustainable menstrual practices. Our mission is to educate women on the importance of proper menstrual care, while promoting eco-friendly alternatives such as biodegradable sanitary pads.
    </p>

    <div className="about-bottom">
      <p className="about-description-2 animate-on-scroll">
        Through impactful awareness campaigns, educational workshops, and accessible resources, we work to break the stigma surrounding menstruation, prioritize health, and safeguard the environment. By helping women make informed, sustainable choices, we are creating a healthier, more sustainable future for individuals and communities alike.
      </p>
    </div>

    <img src={aboutImage} alt="About Us" className="about-image animate-on-scroll" />
  </div>

  <img src={transitionImage1} alt="Transition" className="transition-image-1 animate-on-scroll" />
</Section>

  );
};

// <img src={aboutImage} alt="About Us" className="about-image" />
export default About;