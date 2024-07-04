import React from "react";
import imageTest from "../images/background.jpg";
import imageTest2 from "../images/background-5.jpg";

const config = [
  {
    id: 0,
    name: "Nome Cognome 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: imageTest,
    colStartText: "1",
    rowStartText: "1",
    colStartImage: "9",
    rowStartImage: "1",
    direction: "right",
  },
  {
    id: 1,
    name: "Nome Cognome 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: imageTest2,
    colStartText: "5",
    rowStartText: "7",
    colStartImage: "1",
    rowStartImage: "5",
    direction: "left",
  },
];

const About = () => {
  return (
    <div className="h-full">
      <h1 className="text-5xl">CHI SIAMO!!!</h1>

      <div className="flex justify-center items-center h-full">
        <div className="grid grid-cols-12 grid-rows-10 gap-10">
          {config.map((description) => (
            <>
              <div
                className={`col-span-8 row-span-3 col-start-${description.colStartText} row-start-${description.rowStartText}`}
              >
                <div
                  className={`flex flex-col w-full text-${description.direction}`}
                >
                  <h3 className="text-3xl">{description.name}</h3>
                  <p className="mt-5">{description.text}</p>
                </div>
              </div>
              <div
                className={`col-span-4 row-span-5 col-start-${description.colStartImage} row-start-${description.rowStartImage}`}
              >
                <img src={description.image} alt="" />
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
