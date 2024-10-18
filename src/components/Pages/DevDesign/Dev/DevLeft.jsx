import React from "react";
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
          href="https://x.com/xsh_shahab"
          className="text-sm text-slate-300 hover:text-purple-600 hover:font-bold hover:scale-125"
        >
          Twitter @xsh_shahab
        </a>
        <hr className="my-3.5 opacity-15" />
      </div>

      <Link to="" className="font-semibold hover:text-purple-700">
        Dev Design
      </Link>
      <hr className="my-3.5 opacity-15" />
    </div>
  );
};

export default DevLeft;
