import React from "react";
import HTML from "../assets/HTML.svg";
import CSS from "../assets/CSS.svg";
import JS from "../assets/JS.svg";
import GITHUB from "../assets/GITHUB.svg";
import REACT from "../assets/REACT.svg";
import TS from "../assets/TS.svg";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

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
    <div className="p-2 text-gray-100 rounded-lg shadow-lg">
      <div className="mb-6 text-2xl font-bold">
        Frontend <span className="text-purple-600">Development</span>
      </div>
      <p className="mb-4">
        Frontend development is about building the part of a website or app that
        users interact with, making it visually appealing and easy to use.
      </p>

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
            <div className="flex justify-between w-full mt-4">
              <span className="text-sm font-semibold text-purple-500">
                {tech.name}
              </span>
              <Link
                to={`/roadmap/${tech.id}`}
                className="flex items-center gap-1 text-green-400 hover:text-green-500"
              >
                View <FiArrowUpRight size={20} className="pt-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frontend;
