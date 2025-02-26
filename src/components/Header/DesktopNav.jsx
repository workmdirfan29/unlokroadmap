import React from "react";
import { NavLink } from "react-router-dom";
import SocialLinks from "./SocialLinks";

const navLinks = [
  { to: "/dev-design", label: "Developer Design" },
  { to: "/roadmap", label: "Roadmap" },
  { to: "/guide", label: "Guide" },
  { to: "/service", label: "Service" },
];

const DesktopNav = () => {
  return (
    <div className="hidden md:flex items-center gap-4 text-md font-[500]">
      {navLinks.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `cursor-pointer ${isActive ? "text-purple-500 font-bold" : "hover:text-purple-600"
            }`
          }
        >
          {label}
        </NavLink>
      ))}
      <div className="text-xl opacity-35 text-slate-100">|</div>
      <SocialLinks />
    </div>
  );
};

export default DesktopNav;
