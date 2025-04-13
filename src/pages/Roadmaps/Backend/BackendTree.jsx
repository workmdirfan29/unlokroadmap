import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoRemoveOutline } from "react-icons/io5";

const BackendTree = () => {
    const [isBackendOpen, setBackendOpen] = useState(false);

    // Array for backend technologies with paths
    const backendTechnologies = [
        { name: "Node.js", path: "nodejs" },
        { name: "Express.js", path: "express-js" },
        { name: "MongoDB", path: "mongodb" },
        { name: "PostgreSQL", path: "postgresql" },
        { name: "Docker", path: "docker" },
    ];

    return (
        <>
            {/* Backend Section */}
            <div
                className="flex items-center justify-between w-full pr-4 font-bold cursor-pointer text-md hover:text-orange-400"
                onClick={() => setBackendOpen(!isBackendOpen)}
            >
                Backend
                <span>
                    {isBackendOpen ? (
                        <IoIosArrowUp size={18} />
                    ) : (
                        <IoIosArrowDown size={18} />
                    )}
                </span>
            </div>

            {/* Dynamically generate list items */}
            <ul
                className={`transition-all duration-500 ease-in-out overflow-hidden ${isBackendOpen ? "max-h-screen" : "max-h-0"
                    }`}
            >
                {backendTechnologies.map((tech, index) => (
                    <li
                        key={index}
                        className="flex items-center gap-2 py-1 pl-4 group hover:text-orange-400"
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

export default BackendTree;
