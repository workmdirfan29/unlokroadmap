import React from "react";
import HTML from "../assets/HTML.svg";
import CSS from "../assets/CSS.svg";
import JS from "../assets/JS.svg";
import GITHUB from "../assets/GITHUB.svg";
import REACT from "../assets/REACT.svg";
import TS from "../assets/TS.svg";
import { FiArrowUpRight } from "react-icons/fi";

// Frontend technologies data
const frontendTechnologies = [
  { id: "html", name: "HTML", icon: HTML },
  { id: "css", name: "CSS", icon: CSS },
  { id: "javascript", name: "JavaScript", icon: JS },
  { id: "github", name: "GitHub", icon: GITHUB },
  { id: "reactjs", name: "ReactJS", icon: REACT },
  { id: "typescript", name: "TypeScript", icon: TS },
];

const Frontend = () => {
  return (
    <div className="p-6 text-gray-100 rounded-lg shadow-lg">
      <h3 className="mb-6 text-3xl font-bold">
        Frontend <span className="text-purple-600">Development</span>
      </h3>

      <div
        id="tools"
        className="grid gap-4 lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2"
      >
        {frontendTechnologies.map((tech) => (
          <div
            key={tech.id}
            className="flex flex-col items-center justify-center p-4 transition duration-300 transform border border-gray-700 rounded-lg hover:bg-gray-900 hover:border-gray-600 hover:scale-105"
          >
            {/* Icon */}
            <img src={tech.icon} alt={tech.name} className="mb-2 w-14 h-14" />
            {/* Name and View link */}
            <div className="flex justify-between w-full mt-2">
              <span className="font-semibold text-purple-400 text-md">
                {tech.name}
              </span>
              <a
                href={`#${tech.id}`}
                className="flex items-center gap-1 text-green-400 hover:text-green-500"
              >
                View <FiArrowUpRight size={20} className="pt-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frontend;
