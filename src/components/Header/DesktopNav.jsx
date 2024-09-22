import React from "react";
import { NavLink } from "react-router-dom";
import SocialLinks from "./SocialLinks";
import AuthLinks from "./AuthLinks";

const DesktopNav = () => {
  return (
    <div className="hidden md:flex items-center gap-4 text-md font-[500]">
      <NavLink
        to="/roadmap"
        className={({ isActive }) =>
          `cursor-pointer ${
            isActive ? "text-purple-500 font-bold" : "hover:text-purple-600"
          }`
        }
      >
        Roadmap
      </NavLink>

      <NavLink
        to="/guide"
        className={({ isActive }) =>
          `cursor-pointer ${
            isActive ? "text-purple-500 font-bold" : "hover:text-purple-600"
          }`
        }
      >
        Guide
      </NavLink>

      <NavLink
        to="/product"
        className={({ isActive }) =>
          `cursor-pointer ${
            isActive ? "text-purple-500 font-bold" : "hover:text-purple-600"
          }`
        }
      >
        Product
      </NavLink>

      <div className="text-xl opacity-35 text-slate-100">|</div>
      <SocialLinks />
      <div className="text-xl opacity-45 text-slate-100">|</div>
      <AuthLinks />
    </div>
  );
};

export default DesktopNav;
