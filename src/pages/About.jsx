import React from "react";
import imageTest from "../images/background.jpg";
import imageTest2 from "../images/background-5.jpg";

const About = () => {
  return (
    <div className="h-full flex flex-col justify-between items-center">
      <h1 className="text-5xl">CHI SIAMO!!!</h1>

      <div className="">
        <div className="grid grid-cols-12 grid-rows-10 gap-10">
          <div className={`col-start-1 row-start-1 col-span-8 row-span-3`}>
            <div className={`flex flex-col w-full text-right`}>
              <h3 className="text-3xl">Nome Cognome 1</h3>
              <p className="mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className={`col-start-9 row-start-1 col-span-4 row-span-5`}>
            <img src={imageTest} alt="" />
          </div>
          <div className={`col-start-5 row-start-7 col-span-8 row-span-3`}>
            <div className={`flex flex-col w-full text-left`}>
              <h3 className="text-3xl">Nome Cognome 2</h3>
              <p className="mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className={`col-start-1 row-start-5 col-span-4 row-span-5`}>
            <img src={imageTest2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
