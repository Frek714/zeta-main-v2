import React from "react";

const navigation = [
  {
    id: 0,
    label: "Home",
    link: "home",
    icon: ""
  },
  {
    id: 1,
    label: "Chi Siamo",
    link: "chi-siamo",
  },
  {
    id: 2,
    label: "Servizi",
    link: "servizi",
  },
  {
    id: 3,
    label: "Progetti",
    link: "progetti",
  },
  {
    id: 4,
    label: "Contatti",
    link: "contatti",
  },
];

const NavbarMobile = () => {
  return (
    <div className="card h-[40vh] flex md:hidden justify-around items-center bg-glassed">
      {/* <div> */}
        {navigation.map((nav) => (
          <ul>
            {/* <li>{nav.label}</li> */}
            <i className="pi pi-check"></i>
          </ul>
        ))}
      {/* </div> */}
    </div>
  );
};

export default NavbarMobile;
