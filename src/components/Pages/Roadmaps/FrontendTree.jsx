import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoRemoveOutline } from "react-icons/io5";

const FrontendTree = () => {
  const [isFrontendOpen, setFrontendOpen] = useState(false);

  // Array for frontend technologies
  const frontendTechnologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "Github",
    "React JS",
    "TypeScript",
  ];

  return (
    <div className="">
      {/* Frontend Section */}

      <button
        className="flex items-center justify-between w-full pr-4 text-lg font-bold cursor-pointer"
        onClick={() => setFrontendOpen(!isFrontendOpen)}
      >
        Frontend
        <span>
          {isFrontendOpen ? (
            <IoIosArrowUp size={16} />
          ) : (
            <IoIosArrowDown size={16} />
          )}
        </span>
      </button>

      {/* Using an array to dynamically generate list items */}
      <ul
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isFrontendOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        {frontendTechnologies.map((tech, index) => (
          <li
            key={index}
            className="flex items-center gap-2 py-1 pl-4 group hover:text-purple-500"
          >
            {/* The icon will be hidden by default and shown on hover */}
            <IoRemoveOutline className="hidden group-hover:block" />
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FrontendTree;
