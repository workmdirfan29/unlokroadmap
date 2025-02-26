import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import UnlokRoadmapOfficial from "./assets/UnlokRoadmapOfficial.png";
import ThmifyOfficial from "./assets/ThmifyOfficial.png";
import FreeComponentsLib from "./assets/FreeComponentsLib.png";
import FreeTemplatesOfficial from "./assets/FreeTemplatesOfficial.png";

const projects = [
    {
        image: ThmifyOfficial,
        link: "https://unlokthmify.vercel.app/",
    },
    {
        image: FreeTemplatesOfficial,
        link: "https://freetemplatecomp.vercel.app/index.html",
    },
    {
        image: FreeComponentsLib,
        link: "https://freecomponentslib.vercel.app",
    },
    {
        image: UnlokRoadmapOfficial,
        link: "https://unlokroadmap.vercel.app/",
    },
];

const ServiceShowCase = () => {
    return (
        <>
            <h1 className="py-4 text-3xl font-bold text-center text-zinc-400">
                What We Offer
            </h1>

            {/* Grid Layout */}
            <div className="grid mb-3.5 w-full h-auto grid-cols-1 gap-4 p-4 sm:grid-cols-2">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center p-4 overflow-hidden border-2 rounded-lg cursor-pointer even:border-y-zinc-700 odd:border-y-slate-900 even:border-x-zinc-800 odd:border-x-slate-700 bg-neutral-900"
                    >
                        {/* Image Container */}
                        <div className="w-full h-[300px] sm:h-[400px] overflow-hidden rounded-lg">
                            <img
                                className="object-cover w-full h-full transition-transform duration-300 rounded-lg hover:scale-105"
                                src={project.image}
                                alt={`Project Preview ${index + 1}`}
                            />
                        </div>

                        {/* Preview Button */}
                        <div className="flex justify-start w-full mt-3">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-4 py-2 font-semibold text-black transition rounded-md hover:bg-white bg-neutral-300"
                            >
                                Preview <MdOutlineArrowOutward size={19} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ServiceShowCase;
