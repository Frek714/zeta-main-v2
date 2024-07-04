import React from "react";
import { motion } from "framer-motion";
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

const Navbar = () => {
  return (
    <div className="card h-auto lg:h-[40vh] w-[40vh] lg:w-auto flex flex-row lg:flex-col justify-around items-center bg-glassed relative z-10">
      {/* <div> */}
      {navigation.map((nav) => (
        <ul className="group flex items-center justify-center h-full w-14">
          <i className={`pi ${nav.icon} z-30 relative group-hover:hidden`}></i>
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute left-0 w-52 h-14 hidden group-hover:flex justify-around items-center rounded-full bg-glassed-50"
          >
            <motion.div
              transition={{ duration: 0.3 }}
              whileHover={{
                scale: [1, 1.2, 1, 1.2, 1],
                // rotate: [0, 270, 0],
                // borderRadius: ["50%", "25%", "50%"],
                opacity: 0.8,
              }}
              className="absolute left-0 rounded-full h-full w-14 bg-purple-600"
            >
              <Link to={nav.link} className="h-full w-full rounded-full flex justify-center items-center">
                <i className={`pi ${nav.icon}`}></i>
              </Link>
            </motion.div>
            {nav.label}
          </motion.div>
        </ul>
      ))}
      {/* </div> */}
    </div>
  );
};

export default Navbar;
