import React from "react";
import NODEJS from "../assets/NODEJS.svg";
import EXPRESS from "../assets/EXPRESS.svg";
import MONGODB from "../assets/MONGODB.svg";
import POSTGRESQL from "../assets/POSTGRESQL.svg";
import DOCKER from "../assets/DOCKER.svg";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

// Backend technologies data
const backendTechnologies = [
    { id: "nodejs", name: "Node.js", icon: NODEJS },
    { id: "express-js", name: "Express.js", icon: EXPRESS },
    { id: "mongodb", name: "MongoDB", icon: MONGODB },
    { id: "postgresql", name: "PostgreSQL", icon: POSTGRESQL },
    { id: "docker", name: "Docker", icon: DOCKER },
];

const Backend = () => {
    return (
        <div className="p-2 text-gray-100 rounded-lg shadow-lg">
            <div className="mb-6 text-2xl font-bold">
                Backend <span className="text-orange-400">Development</span>
            </div>
            <p className="mb-4">
                Backend development involves building the server-side of applications, managing databases, and ensuring smooth communication between the server and client.
            </p>

            <div
                id="tools"
                className="grid gap-4 lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2"
            >
                {backendTechnologies.map((tech) => (
                    <div
                        key={tech.id}
                        className="flex flex-col items-center justify-center p-4 transition duration-300 transform border border-gray-700 rounded-lg hover:bg-gray-900 hover:border-gray-600 hover:scale-105"
                    >
                        {/* Icon */}
                        <img src={tech.icon} alt={tech.name} className="mb-2 w-14 h-14" />
                        {/* Name and View link */}
                        <div className="flex justify-between w-full mt-4">
                            <span className="text-sm font-semibold text-orange-400">
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

export default Backend;
