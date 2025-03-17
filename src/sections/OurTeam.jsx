import React from "react";
import Section from "../components/Section";
import "../styles/ourTeam.css";
import teamImage from "../assets/team-image.png";
import birdImage from "../assets/bird-image.png";
import bottomTriangle from "../assets/bottom_triangle.png";
import bannerImage from "../assets/banner-image.png";
import member1 from "../assets/member1.png";
import member2 from "../assets/member2.png";
import member3 from "../assets/member3.png";
import member4 from "../assets/member4.png";
import member5 from "../assets/member5.png";

const OurTeam = () => {
  return (
    <Section id="our-team" className="our-team">
      
      <div className="header-1">
      <h2 className="team-title">OUR TEAM</h2>   
      <img src={birdImage} alt="Bird Image" className="bird-banner"/>
      </div>
      <div className="team-images">
      <img src={bannerImage} alt="Team Banner" className="team-banner"/>
      
      <div className="team-grid">
        
        <img src={member1} alt="Member 1" className="team-member" />
        <img src={member2} alt="Member 2" className="team-member" />
        <img src={member3} alt="Member 3" className="team-member" />
        <img src={member4} alt="Member 4" className="team-member" />
        <img src={member5} alt="Member 5" className="team-member" />
        
      </div>
      </div>
      <img src={bottomTriangle} alt="Bottom Triangle" className="bottom-triangle"/>
    </Section>
  );
};

export default OurTeam;