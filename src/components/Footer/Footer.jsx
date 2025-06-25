import React from "react";
import { NavLink } from "react-router-dom";
import SocialLinks from "../Header/SocialLinks";

const navLinks = [
  { to: "/dev-design", label: "Developer Design" },
  { to: "/roadmap", label: "Roadmap" },
  { to: "/guide", label: "Guide" },
  { to: "/service", label: "Service" },
];

function Footer() {
  return (
    <footer className="bg-[#040404] border-t border-neutral-800 w-full p-6 text-center text-sm text-slate-100 font-medium">
      {/* Footer Content Wrapper */}
      <div className="flex flex-col gap-6 items-center">
        {/* Branding */}
        <div>
          <p className="text-lg font-bold text-orange-400">Unlok Dev</p>
          <p className="mt-2">
            Powered by <span className="text-orange-400">Unlok Dev</span> | Crafted with care by{" "}
            <a
              href="https://twitter.com/mdirfan29"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:underline"
            >
              @mdirfan29
            </a>
          </p>
        </div>

        {/* Divider */}
        <div className="mt-4 text-xl opacity-30">|</div>

        {/* Footer Navigation Links (using navLinks) */}
        <div className="flex justify-center gap-6 mt-4">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className="hover:text-orange-400"
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Social Media Links */}
        <div className="mt-4 flex gap-6 justify-center">
          <SocialLinks />
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-xs opacity-50">
        <p>© {new Date().getFullYear()} Unlok Dev. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
