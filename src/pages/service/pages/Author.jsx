import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaExternalLinkAlt } from "react-icons/fa";
import AuthorImg from "./Author.jpg";

const Author = () => {
    return (
        <div className="w-full p-6 text-white bg-gray-900 rounded-lg shadow-lg">
            <div className="flex flex-col items-center gap-10 md:flex-row">
                <div className="w-64 h-64 overflow-hidden border-2 rounded-full shadow-md border-neutral-700 md:w-80 md:h-80">
                    <img
                        src={AuthorImg}
                        alt="Md. Shahabuddin"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="flex flex-col items-center max-w-2xl text-center md:items-start md:text-left">
                    <h1 className="text-3xl font-bold ">Meet <span className="text-indigo-700">Md. Shahabuddin</span></h1>
                    <p className="text-sm lowercase text-zinc-500">@XshShahab</p>
                    <p className="mt-4 leading-relaxed text-gray-300">
                        Hello! I'm <span className="font-semibold text-white">XshShahab</span>, the founder and creator of UnlokDev.
                        I’ve been passionate about technology for as long as I can remember. With over a decade of experience in
                        web development, programming, and tech, my mission is to make learning these subjects accessible and
                        enjoyable for everyone.
                    </p>

                    <div className="mt-6">
                        <h2 className="text-xl font-semibold text-gray-200">Projects I've Built</h2>
                        <ul className="mt-2 space-y-2">
                            <li className="flex items-center gap-2">
                                <FaExternalLinkAlt className="text-gray-400" />
                                <a
                                    href="https://unlokthmify.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:underline"
                                >
                                    UnlokThmify
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaExternalLinkAlt className="text-gray-400" />
                                <a
                                    href="https://unlokroadmap.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:underline"
                                >
                                    UnlokRoadmap
                                </a>
                            </li>
                        </ul>
                    </div>
                    <p className="mt-3 text-sm italic text-gray-500">
                        (These open-source projects were originally created by me, but I have transferred full ownership and control to a friend.)
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mt-6 md:justify-start">
                        <a
                            href="https://github.com/xshshahab"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 text-gray-300 transition bg-gray-800 rounded-md hover:bg-gray-700"
                        >
                            <FaGithub className="text-xl" /> GitHub
                        </a>
                        <a
                            href="https://twitter.com/xsh_shahab"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 text-white transition bg-blue-600 rounded-md hover:bg-blue-500"
                        >
                            <FaTwitter className="text-xl" /> Twitter
                        </a>
                        <a
                            href="https://linkedin.com/in/mdshahabuddin82"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 text-white transition bg-blue-700 rounded-md hover:bg-blue-600"
                        >
                            <FaLinkedin className="text-xl" /> LinkedIn
                        </a>
                        <a
                            href="https://instagram.com/xsh_shahab"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 text-white transition bg-pink-600 rounded-md hover:bg-pink-500"
                        >
                            <FaInstagram className="text-xl" /> Instagram
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Author;
