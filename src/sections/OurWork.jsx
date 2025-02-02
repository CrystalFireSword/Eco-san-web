import React from "react";
import Section from "../components/Section";
import "../styles/ourWork.css";
import workImage1 from "../assets/students_1.png";
import workImage2 from "../assets/students_2.png";
import workImage3 from "../assets/students_3.png";
import transitionImage1 from "../assets/cross_bottom.png";
import arrow1 from "../assets/arrow_1.png";
import aboutImage3 from "../assets/poly_left.png";
import aboutImage4 from "../assets/poly_right.png";
const OurWork = () => {
  return (
    <Section id="our-work" className="our-work">
      <img src={transitionImage1} className="work-about-image2"></img>
      <img src={aboutImage3} className="work-about-image3"></img>
      <img src={aboutImage4} className="about-image4"></img>
            
              <div className="work-main">                
                <div className="work-main-left">
                <h3 className="work-heading">OUR WORKS</h3>
                <p className="work-description-1">Here are some of the projects we are currently working on.</p>
                </div>
              <img src={arrow1} alt="Work1" className="arrow-1" />
              </div>

              <div className="work-bottom-1">
                
                <div className="work-description-1-left">               
                
                <h3 className="work-description-1-button"> WORKSHOP</h3>
                <h3 className="work-description-1-title"> Moumali</h3>
                <p className="work-description-1-1">‘Moumali’ is a subdivision of Project Ecosanitation dedicated to educating teenage girls about the importance of menstrual hygiene. </p>
                </div>
                
              <img src={workImage1} alt="Work1" className="work-image-1" />
              </div>
              <div className="work-bottom-2">
                
                <div className="work-description-2-left">               
                <img src={workImage2} alt="Work1" className="work-image-2" />           

                </div>
                <p className="work-description-2-2">It aims to raise awareness about using proper menstrual products and helps girls understand the biological significance of maintaining menstrual health. </p>
                
              
              </div>

              <div className="work-bottom-3">
              <h3 className="work-description-3-button"> PRODUCT</h3>
              <h3 className="work-description-3-title"> Bio-Degradable Sanitary Pads</h3>
              <h3 className="work-description-3-sub-title"> Coming Soon</h3>

              <div className = "work-bottom-3-1">
              <p className="work-description-3">We are creating biodegradable sanitary pads made from hemp fiber and bamboo cellulose, designed to be eco-friendly, affordable, and effective. Our goal is to reduce environmental impact while promoting sustainable living. Currently, we are in the prototyping stage at the Incubation Centre, MAHE, refining our design for maximum comfort and performance. </p>
              <img src={workImage3} alt="Work3" className="work-image-3" />
              </div>
              </div>

            
            

    </Section>
  );
};

export default OurWork;
