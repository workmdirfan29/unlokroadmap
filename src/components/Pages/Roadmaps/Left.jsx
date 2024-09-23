import React from "react";
import { Link, NavLink } from "react-router-dom";
import FrontendTree from "./FrontendTree";

const Left = () => {
  return (
    <div
      id="left"
      className="flex-col hidden w-1/5 min-h-screen p-2 mb-2 border-r border-gray-800 md:flex"
    >
      <h4 className="mb-2 font-semibold text-purple-700">Follow for updates</h4>
      <a
        className="mb-2 text-sm text-slate-400 hover:text-purple-500 hover:font-bold"
        target="_blank"
        href="https://x.com/xsh_shahab"
      >
        Twitter @xsh_shahab
      </a>
      <Link to="" className="mb-2 font-semibold hover:text-purple-600">
        Roadmap
      </Link>
      <Link to="frontend" className="mb-2">
        <FrontendTree />
      </Link>
    </div>
  );
};

export default Left;
