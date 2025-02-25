import React from "react";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";

const DevLeft = () => {
  return (
    <div
      id="left"
      className="w-[20vw] px-5 fixed h-screen z-10 border-r border-neutral-900 hidden md:block"
    >
      <div id="update-container">
        <h2 className="font-semibold text-purple-700">Follow for updates</h2>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://x.com/mdirfan_23"
          className="text-sm text-slate-300 hover:text-purple-600 hover:font-bold hover:scale-125"
        >
          Twitter @mdirfan_23
        </a>
        <hr className="my-3.5 opacity-15" />
      </div>

      <Link to="" className="font-semibold hover:text-purple-700">
        Dev Design
      </Link>
      <hr className="my-3.5 opacity-15" />
      <div className="flex items-center justify-between">
        <Link to="xsh_shahab" className="font-semibold hover:text-purple-700">
          <h3 className="font-mono text-lg font-semibold">xsh_shahab</h3>
        </Link>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 hover:text-purple-700"
          href="https://github.com/xshshahab"
        >
          <FiGithub size={20} />
        </a>
      </div>
    </div>
  );
};

export default DevLeft;
