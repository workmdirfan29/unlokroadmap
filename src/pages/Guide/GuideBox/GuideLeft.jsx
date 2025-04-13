import React from "react";
import { Link } from "react-router-dom";

const links = [
  { to: "frontend", label: "Frontend" },
  { to: "html", label: "HTML" },
  { to: "css", label: "CSS" },
  { to: "javascript", label: "JavaScript" },
  { to: "github", label: "Github" },
  { to: "react-js", label: "React Js" },
  { to: "ts-guide", label: "TypeScript" },
  { to: "backend-guide", label: "Backend" },
  { to: "nodejs-express", label: "Node Js / Express Js" },
  { to: "mongodb-guide", label: "MongoDB" },
  { to: "psql-guide", label: "PostgreSQL" },
  { to: "docker-guide", label: "Docker" },
];

const GuideLeft = ({ toggleSidebar }) => {
  return (
    <div className="min-h-screen">
      <button
        className="absolute text-white top-4 right-4 md:hidden"
        onClick={toggleSidebar}
      >
        Toggle
      </button>

      <nav className="pt-4 pb-2 overflow-y-auto max-h-[90vh]">
        <div className="pb-2">
          <span className="font-bold mb-2 text-orange-400">
            Follow for updates
          </span>
          <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-200 transition-transform duration-300 transform hover:text-orange-300 hover:underline hover:scale-115 hover:font-bold"
            href="https://x.com/mdirfan_23"
          >
            Twitter @mdirfan_23
          </a>
          <hr className="mt-3.5 mb-2 w-[20vw] opacity-20" />
        </div>
        {links.map((link, index) => (
          <div key={index} className="pb-2">
            <Link
              to={link.to}
              className="text-white hover:font-semibold hover:text-orange-400 hover:underline"
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
