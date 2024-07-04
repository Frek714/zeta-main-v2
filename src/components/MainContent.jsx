import React from "react";
import { ScrollPanel } from "primereact/scrollpanel";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import Contacts from "../pages/Contacts";

const MainContent = () => {
  return (
    <div className="card bg-glassed z-0 relative p-10">
      <ScrollPanel style={{ width: "100%", height: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </ScrollPanel>
    </div>
  );
};

export default MainContent;
