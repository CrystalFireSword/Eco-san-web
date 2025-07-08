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
    <Section id="about" className="about scroll-fade">
      <img src={aboutImage2} alt="Star Bottom" className="about-image2 scroll-fade" />
      <img src={aboutImage3} alt="Ellipse 1" className="about-image3 scroll-fade" />

      <div className="about-box scroll-fade">
        <h3 className="about-heading scroll-fade">ABOUT US</h3>
        <p className="about-description-1 scroll-fade">
          Project Ecosanitation is dedicated to transforming menstrual hygiene in India by empowering women with the knowledge and resources to embrace safe and sustainable menstrual practices. Our mission is to educate women on the importance of proper menstrual care, while promoting eco-friendly alternatives such as biodegradable sanitary pads.
        </p>

        <div className="about-bottom">
          <p className="about-description-2 scroll-fade">
            Through impactful awareness campaigns, educational workshops, and accessible resources, we work to break the stigma surrounding menstruation, prioritize health, and safeguard the environment. By helping women make informed, sustainable choices, we are creating a healthier, more sustainable future for individuals and communities alike.
          </p>
        </div>

        <img src={aboutImage} alt="About Us Girl Window" className="about-image scroll-fade" />
      </div>

      <img src={transitionImage1} alt="Transition" className="transition-image-1 scroll-fade" />
    </Section>
  );
};

export default About;
