import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, settoggle] = useState(false);

  return (
    <div className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      {/* Desktop Menu */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white relative group`}
          >
            <a
              href={`#${nav.id}`}
              className="transition duration-300 group-hover:text-gradient"
            >
              {nav.title}
            </a>
            {/* underline effect */}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#def9fa] via-[#5ce1e6] to-[#33bbcf] transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => settoggle(!toggle)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                } text-white relative group`}
              >
                <a
                  href={`#${nav.id}`}
                  className="transition duration-300 group-hover:text-gradient"
                >
                  {nav.title}
                </a>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#def9fa] via-[#5ce1e6] to-[#33bbcf] transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
