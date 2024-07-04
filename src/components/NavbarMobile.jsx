import React from "react";
import { Link } from "react-router-dom";

const navigation = [
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

const NavbarMobile = () => {
  return (
    <div className="card h-12 lg:h-[40vh] w-[40vh] lg:w-auto xl:hidden flex flex-row lg:flex-col justify-around items-center bg-glassed relative z-10">
      {navigation.map((nav) => (
        <ul className="group flex items-center justify-center h-full w-14">
          {/* <i className={`pi ${nav.icon} z-30 relative group-hover:hidden`}></i> */}
          {/* <div className="absolute left-0 w-52 h-14 hidden group-hover:flex justify-around items-center rounded-full bg-glassed-50 lg:hidden"> */}
            <Link
              to={nav.link}
              className="h-full w-full rounded-full flex justify-center items-center"
            >
              <i className={`pi ${nav.icon}`}></i>
            </Link>
            {/* {nav.label} */}
          {/* </div> */}
        </ul>
      ))}
    </div>
  );
};

export default NavbarMobile;
