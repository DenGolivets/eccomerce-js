import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Navbar = ({ setToken }) => {
  return (
    <div className="flex items-center justify-between py-2 px-[4%]">
      <div className="flex flex-col">
        <NavLink to='/'>
          <img src={assets.logo} alt="logo" className="w-[max(10%,140px)]" />
          <p className="uppercase font-bold text-[#e6bab4]">Admin Panel</p>
        </NavLink>
      </div>
      <button onClick={() => setToken('')} className="bg-gray-600 text-white px-5 py-2 sm:px-7 rounded-full text-xs sm:text-sm">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
