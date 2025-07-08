import Section from "../components/Section";
import "../styles/ourTeam.css";
// import teamImage from "../assets/team-image.png";
import birdImage from "../assets/bird-image.png";
import bottomTriangle from "../assets/bottom_triangle.png";
import bannerImage from "../assets/banner-image.png";
import member1 from "../assets/member1.png";
import member2 from "../assets/member2.png";
import member3 from "../assets/member3.png";
import member4 from "../assets/member4.png";
import member5 from "../assets/member5.png";
import { useEffect } from "react";

const OurTeam = () => {
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

    const elements = document.querySelectorAll(".scroll-fade");
    elements.forEach(el => observer.observe(el));
  }, []);

  return (
    <Section id="our-team" className="our-team scroll-fade">
      <div className="header-1 scroll-fade">
        <h2 className="team-title scroll-fade">OUR TEAM</h2>
        <img src={birdImage} alt="Bird Image" className="bird-banner scroll-fade" />
      </div>

      <div className="team-images scroll-fade">
        <img src={bannerImage} alt="Team Banner" className="team-banner scroll-fade" />

        <div className="team-grid scroll-fade">
          <img src={member1} alt="Member 1" className="team-member" />
          <img src={member2} alt="Member 2" className="team-member" />
          <img src={member3} alt="Member 3" className="team-member" />
          <img src={member4} alt="Member 4" className="team-member" />
          <img src={member5} alt="Member 5" className="team-member" />
        </div>
      </div>

      <img src={bottomTriangle} alt="Bottom Triangle" className="bottom-triangle scroll-fade" />
    </Section>
  );
};

export default OurTeam;
