import React from "react";
import { Link } from "react-router-dom";
import FrontendTree from "./Frontend/FrontendTree";
import BackendTree from "./Backend/BackendTree";

const Left = () => {
  return (
    <div className="flex flex-col p-2 mb-2">
      <h4 className="mb-2 font-semibold text-orange-400">Follow for updates</h4>
      <a
        className="mb-2 text-sm text-slate-400 hover:text-orange-400 hover:font-bold"
        target="_blank"
        href="https://x.com/mdirfan_23"
        rel="noopener noreferrer"
      >
        Twitter @mdirfan_23
      </a>
      <Link to="" className="mb-2 font-semibold hover:text-orange-400">
        Roadmap
      </Link>
      <Link to="frontend" className="mb-2 ">
        <FrontendTree />
      </Link>
      <Link to="backend" className="mb-2">
        <BackendTree />
      </Link>
    </div>
  );
};

export default Left;
