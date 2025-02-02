import React from "react";
import Section from "../components/Section";
import "../styles/about.css";
import aboutImage from "../assets/girl_window.png";
import aboutImage2 from "../assets/star_bottom.png";
import aboutImage3 from "../assets/ellipse_1.png";
import transitionImage1 from "../assets/cross_top.png";

const About = () => {
  return (
    <Section id="about" className="about">
      <img src={aboutImage2} alt="About Us2" className="about-image2" />
      <img src={aboutImage3} alt="About Us3" className="about-image3" />
      <div className="about-box">        
        <h3 className="about-heading">ABOUT US</h3>
        <p className="about-description-1">Project Ecosanitation is dedicated to transforming menstrual hygiene in India by empowering women with the knowledge and resources to embrace safe and sustainable menstrual practices. Our mission is to educate women on the importance of proper menstrual care, while promoting eco-friendly alternatives such as biodegradable sanitary pads.</p>
        <div className="about-bottom">
        <p className="about-description-2">Through impactful awareness campaigns, educational workshops, and accessible resources, we work to break the stigma surrounding menstruation, prioritize health, and safeguard the environment. By helping women make informed, sustainable choices, we are creating a healthier, more sustainable future for individuals and communities alike.</p>
        <img src={aboutImage} alt="About Us" className="about-image" />
        </div>
      </div>
      <img src={transitionImage1} alt="Transition" className="transition-image-1" />
    </Section>
  );
};

// <img src={aboutImage} alt="About Us" className="about-image" />
export default About;