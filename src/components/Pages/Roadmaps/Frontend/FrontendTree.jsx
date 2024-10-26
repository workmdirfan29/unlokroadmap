import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoRemoveOutline } from "react-icons/io5";

const FrontendTree = () => {
  const [isFrontendOpen, setFrontendOpen] = useState(false);

  // Array for frontend technologies with paths
  const frontendTechnologies = [
    { name: "HTML", path: "html" },
    { name: "CSS", path: "css" },
    { name: "JavaScript", path: "javascript" },
    { name: "Github", path: "github" },
    { name: "React JS", path: "reactjs" },
    { name: "TypeScript", path: "typescript" },
  ];

  return (
    <>
      {/* Frontend Section */}
      <div
        className="flex items-center justify-between w-full pr-4 font-bold cursor-pointer text-md hover:text-purple-600"
        onClick={() => setFrontendOpen(!isFrontendOpen)}
      >
        Frontend
        <span>
          {isFrontendOpen ? (
            <IoIosArrowUp size={18} />
          ) : (
            <IoIosArrowDown size={18} />
          )}
        </span>
      </div>

      {/* Dynamically generate list items */}
      <ul
        className={`transition-all duration-500 ease-in-out overflow-hidden ${isFrontendOpen ? "max-h-screen" : "max-h-0"
          }`}
      >
        {frontendTechnologies.map((tech, index) => (
          <li
            key={index}
            className="flex items-center gap-2 py-1 pl-4 group hover:text-purple-500"
          >
            {/* Wrap each tech in a Link component */}
            <Link to={tech.path} className="flex items-center w-full gap-2">
              {/* The icon will be hidden by default and shown on hover */}
              <IoRemoveOutline className="hidden group-hover:block" />
              {tech.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FrontendTree;
