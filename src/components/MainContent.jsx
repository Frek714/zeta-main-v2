import React from "react";
import { ScrollPanel } from "primereact/scrollpanel";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import Contacts from "../pages/Contacts";
// import classNames from "classnames";
// import Tailwind from 'primereact/passthrough/tailwind';

// const Tailwind = {
//   scrollpanel: {
//     wrapper: "overflow-hidden relative float-left h-full w-full z-[1]",
//     content:
//       "box-border h-[calc(100%+18px)] overflow-scroll pr-[18px] pb-[18px] pl-0 pt-0 relative scrollbar-none w-[calc(100%+18px)] [&::-webkit-scrollbar]:hidden",
//     barX: {
//       className: classNames(
//         "relative bg-red-600 invisible rounded cursor-pointer h-[9px] bottom-0 z-[2]",
//         "transition duration-[250ms] ease-linear"
//       ),
//     },
//     barY: {
//       className: classNames(
//         "relative bg-red-600 rounded cursor-pointer w-[9px] top-0 z-[2]",
//         "transition duration-[250ms] ease-linear"
//       ),
//     },
//   },
// };

const MainContent = () => {
  return (
    <div className="card bg-glassed z-0 relative lg:p-10">
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
