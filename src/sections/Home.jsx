import React from "react";
import Section from "../components/Section";
import "../styles/home.css";
import homeImage from "../assets/Isolation_Mode.png";
import transitionImage from "../assets/star_top.png";
import homeImage2 from "../assets/project-eco-girl.png";
var girlIm;
if (screen.width>=1100){
  girlIm = homeImage2;
}
else{
  girlIm = homeImage;
};

const Home = () => {
  return (
    <Section id="home" className="home">
      <div className="home-content">
        <div className="home-text">
          <h1 className="big-heading">PROJECT</h1>
          <h2 className="medium-heading">ECOSANITATION</h2>
          <p className="hashtag">#StayPeriodPositive</p>
          <p className="description">Revolutionizing menstrual hygiene in India by empowering women through education on sustainable and safe menstrual practice.</p>
        </div>
        <img src={girlIm} alt="Home" className="home-image" />
      </div>
      <img src={transitionImage} alt="Transition" className="transition-image" />
    </Section>

  );
};
export default Home;