import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("`");
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center
      py-5 fixe top-0 z-20`}
    >
      <div
        className="w-full flex justify-between items-center
      max-w-7x1 mx-auto"
      >
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-12 h-12 max-w-100% h-auto object-contain"
          />

          <p className="text-white text-[18px] font-bold cursor-pointer">
            Peter <span className="sm:block hidden">| Matov</span>
          </p>
        </Link>
        <p className="text-red-500">asdsa</p>
      </div>
    </nav>
  );
};

export default Navbar;
