import React from "react";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import OurWork from "./sections/OurWork";
import OurTeam from "./sections/OurTeam";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <OurWork />
      <OurTeam />
      <Contact />
    </div>
  );
};

export default App;
