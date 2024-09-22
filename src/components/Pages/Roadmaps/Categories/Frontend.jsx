import React from "react";
import HTML from "../assets/HTML.svg";
import CSS from "../assets/CSS.svg";
import JS from "../assets/JS.svg";
import GITHUB from "../assets/GITHUB.svg";
import REACT from "../assets/REACT.svg";
import TS from "../assets/TS.svg";

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
    <div className="p-6 text-gray-100 bg-gray-900 border rounded-lg shadow-lg">
      <h3 className="mb-6 text-3xl font-bold text-center text-green-400">
        Frontend Development
      </h3>

      <div id="tools" className="grid grid-cols-2 gap-6 md:grid-cols-3">
        {frontendTechnologies.map((tech) => (
          <div
            key={tech.id}
            className="flex flex-col items-center justify-center p-4 transition duration-300 transform border border-gray-700 rounded-lg hover:bg-gray-800 hover:scale-105"
          >
            {/* Icon */}
            <img src={tech.icon} alt={tech.name} className="w-16 h-16 mb-2" />
            {/* Name and View link */}
            <div className="flex justify-between w-full mt-2">
              <span className="text-lg font-semibold text-gray-200">
                {tech.name}
              </span>
              <a
                href={`#${tech.id}`}
                className="text-green-400 hover:text-green-500"
              >
                View
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frontend;
