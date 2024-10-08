import React from "react";
import Navebar from "./components/navebar.jsx";
import LandingPage from "./components/landingPage.jsx";
import Marquee from "./components/marquee.jsx";
import About from "./components/about.jsx";
import Project from "./components/project.jsx";
import Footer from "./components/footer.jsx";

import LocomotiveScroll from "locomotive-scroll";
function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="min-h-screen w-full bg-[#D0D9FF] font-robotoCondensed text-black">
      <Navebar />
      <LandingPage />
      <Marquee />
      <About />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
