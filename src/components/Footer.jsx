import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/logo-zz.png";

const footerLinks = [
  {
    id: 0,
    label: "Home",
    link: "home",
    icon: "pi-home",
  },
  {
    id: 1,
    label: "Chi Siamo",
    link: "about",
    icon: "pi-heart",
  },
  {
    id: 2,
    label: "Servizi",
    link: "services",
    icon: "pi-book",
  },
  {
    id: 3,
    label: "Progetti",
    link: "projects",
    // icon: "pi-list"
    icon: "pi-code",
  },
  {
    id: 4,
    label: "Contatti",
    link: "contacts",
    icon: "pi-user",
  },
];

const Footer = () => {
  return (
    <div className="w-full h-44 bg-footer-bg text-white">
      <div className="flex justify-between items-end px-4 md:px-10 lg:px-20">
        <div className="flex flex-col px-8 justify-center items-center md:items-start">
          <div className="bg-white rounded-full h-[3.5rem] w-[3.5rem] flex items-center justify-center">
            <div className="h-8 w-10">
              <img
                src={logo}
                alt="logo"
                loading="lazy"
                className="h-full w-full cursor-pointer"
                onClick={() => window.scrollTo(0, 0)}
              />
            </div>
          </div>
          <div className="flex flex-col text-center md:text-left">
            <p className="mt-4">Zeta Web Development © 2024</p>
            <p className="mt-1 italic text-sm">Tutti i diritti sono riservati</p>
            <p className="mt-4">
              Nata dall'unione e dalla passione di professionisti in ambito Web Development
            </p>
          </div>
        </div>

        {/* <div className="flex flex-col px-8 items-center md:items-start my-8 md:my-0 text-center md:text-left">
          <p className="font-bold text-2xl pb-4">Link Utili</p>
          <ul className="flex flex-col items-center md:items-start">
            {footerLinks.map((item, index) => (
              <li
                className={`pb-2 font-light`}
                key={item.id + index.toString()}
              >
                <Link to={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div> */}

        <div className="flex flex-col px-8 justify-center items-center md:items-end text-center md:text-left">
          <p className="font-bold text-2xl pb-7">Contatti</p>
          <ul className="flex flex-col items-center md:items-end">
            <li className="pb-2">Email: info@mail.com</li>
            <li className="pb-2">Telefono: +39 1234567890</li>
            <li className="pb-0">Orari: Lunedì - Venerdì | 9:00 - 17:00</li>
          </ul>
        </div>
      </div>
      <div className="w-full flex justify-center">
        
      </div>
    </div>
  );
};

export default Footer;
