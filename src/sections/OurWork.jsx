import React, { useEffect, useState } from "react";
import Section from "../components/Section";
import "../styles/ourWork.css";
// import workImage1 from "../assets/students_1.png";
// import workImage2 from "../assets/students_2.png";
// import workImage3 from "../assets/students_3.png";
import galleryImage1 from "../assets/gallery_image_1.jpeg";
import galleryImage2 from "../assets/gallery_image_2.jpeg";
import galleryImage3 from "../assets/gallery_image_3.jpeg";
import galleryImage4 from "../assets/gallery_image_4.jpeg";
import galleryImage5 from "../assets/gallery_image_5.jpeg";
import galleryImage6 from "../assets/gallery_image_6.jpeg";
import galleryImage7 from "../assets/gallery_image_7.jpeg";
import galleryImage8 from "../assets/gallery_image_8.jpeg";
import galleryImage9 from "../assets/gallery_image_9.jpeg";
import indiaImage from "../assets/india_image_work.png";

import transitionImage1 from "../assets/cross_bottom.png";
// import aboutImage3 from "../assets/poly_left.png";
// import aboutImage4 from "../assets/poly_right.png";
import aboutImage5 from "../assets/our-process.jpeg";

const images = [
  galleryImage1,
  galleryImage2,
  galleryImage3,
  galleryImage4,
  galleryImage5,
  galleryImage6,
  galleryImage7,
  galleryImage8,
  galleryImage9
];



const OurWork = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
    <Section id="our-work" className="our-work">
      {/* Decorative Elements */}
      <img src={transitionImage1} className="work-about-image2 scroll-fade animate-delay-1" alt="Transition" />
      {/*<img src={aboutImage3} className="work-about-image3 scroll-fade animate-delay-2" alt="Polygon Left" />*/}
        {/*<img src={aboutImage4} className="about-image4 scroll-fade animate-delay-3" alt="Polygon Right" />*/}

      {/* Heading and Carousel Side by Side */}
      <div className="work-main-split scroll-fade animate-delay-1">
        <div className="work-left-text">
          <h3 className="work-heading">OUR WORK</h3>
          <h4 className="work-sub-heading">Menstrual Hygiene Campaigns</h4>
          <p className="work-description-1">
            At Ecosanitation, we strive to create safe, informed, and stigma-free spaces for conversations around menstrual health.
            Through our grassroots campaigns, we conduct interactive sessions in schools and communities, where girls and women are
            educated on menstrual hygiene, sustainable practices, and body literacy.
          </p>
          <p className="work-description-1">
            These sessions are paired with the free distribution of sanitary pads, ensuring that awareness is matched with access.
            Our goal is to foster confidence, dignity, and health through knowledge.
          </p>
          <p className="work-description-1">
            Scroll through our campaign snapshots, real moments of learning, laughter, and change.
          </p>
        </div>

        <div className="carousel-frame scroll-fade animate-delay-2">
          <img src={images[currentImage]} className="carousel-image" alt={`Slide ${currentImage + 1}`} />
        </div>
      </div>
    {/* Highlight Vertical Image Separately */}
    {/* <div className="vertical-highlight-image-container scroll-fade animate-delay-2">
    <img src={workImage3} alt="Campaign Highlight" className="vertical-highlight-image" />
    </div> */}
      <h4 className="work-sub-heading">Biodegradable Pad Development <br/> (Coming Soon) </h4>
          <p className="work-description-1">
            Alongside education, Ecosanitation is working on a sustainable solution to period care. We are currently developing biodegradable sanitary pads using hemp fiber and bamboo cellulose, a natural, skin-friendly, and eco-conscious alternative.
            </p>
            <p className="work-description-1">
From sourcing to shaping, our team is immersed in research, prototyping, and design testing to bring these pads to life. The process reflects our commitment to innovation rooted in impact, better for people, better for the planet.
</p>
<p className="work-description-1">
Take a glimpse into our creation process below, where science meets sustainability.
</p>
          
      {/* Process Section */}
      <div className="our-process-image-container scroll-fade animate-delay-2">
        <img src={aboutImage5} alt="Our Process" className="our-process-image" />
      </div>
      <div className="our-process-image-container scroll-fade animate-delay-2">
        <img src={indiaImage} alt="India Image" className="our-process-image" />
      </div>
    </Section>
  );
};

export default OurWork;
