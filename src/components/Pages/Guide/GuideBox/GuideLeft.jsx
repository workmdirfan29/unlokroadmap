import React from "react";
import { Link } from "react-router-dom";

const links = [
  { to: "frontend", label: "Frontend" },
  { to: "html", label: "HTML" },
  { to: "css", label: "CSS" },
  { to: "javascript", label: "JavaScript" },
  { to: "github", label: "Github" },
  { to: "react-js", label: "React Js" },
  { to: "ts-guide", label: "TypeScript" }
];

const GuideLeft = ({ toggleSidebar }) => {
  return (
    <div className="h-full">
      <button
        className="absolute text-white top-4 right-4 md:hidden"
        onClick={toggleSidebar}
      >
        Toggle
      </button>

      <nav className="pt-4 pb-2">
        <div className="pb-2">
          <span className="font-mono font-bold text-white">
            Follow for updates
          </span>
          <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-normal text-white transition-transform duration-300 transform hover:text-purple-600 hover:underline hover:scale-115 hover:font-bold"
            href="https://x.com/xsh_shahab"
          >
            Twitter @xsh_shahab
          </a>
        </div>
        {links.map((link, index) => (
          <div key={index} className="pb-2">
            <Link
              to={link.to}
              className="text-white hover:font-semibold hover:text-purple-600 hover:underline"
            >
              {link.label}
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default GuideLeft;
