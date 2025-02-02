import React from "react";
import "../styles.css";

const Section = ({ id, title, className, children }) => {
  return (
    <section id={id} className={`section ${className}`}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;