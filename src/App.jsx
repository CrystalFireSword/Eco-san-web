import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import OurWork from "./sections/OurWork";
import Contact from "./sections/Contact";
import OurTeam from "./sections/OurTeam"; // still needed for the route

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <OurWork />
              <Contact />
            </>
          }
        />
        <Route path="/team" element={<OurTeam />} />
      </Routes>
    </Router>
  );
};

export default App;
