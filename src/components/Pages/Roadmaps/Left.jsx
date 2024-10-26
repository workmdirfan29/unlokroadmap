import React from "react";
import { Link } from "react-router-dom";
import FrontendTree from "./Frontend/FrontendTree";
import BackendTree from "./Backend/BackendTree";

const Left = () => {
  return (
    <div className="flex flex-col p-2 mb-2">
      <h4 className="mb-2 font-semibold text-purple-700">Follow for updates</h4>
      <a
        className="mb-2 text-sm text-slate-400 hover:text-purple-500 hover:font-bold"
        target="_blank"
        href="https://x.com/xsh_shahab"
        rel="noopener noreferrer"
      >
        Twitter @xsh_shahab
      </a>
      <Link to="" className="mb-2 font-semibold hover:text-purple-600">
        Roadmap
      </Link>
      <Link to="frontend" className="mb-2">
        <FrontendTree />
      </Link>
      <Link to="backend" className="mb-2">
        <BackendTree />
      </Link>
    </div>
  );
};

export default Left;
