import React from "react";
import { Link, Outlet } from "react-router-dom";
import Left from "./Left";

const Roadmap = () => {
  return (
    <>
      <div id="main" className="flex w-full min-h-screen px-10 mt-16">
        {/* Left Sidebar */}
        <Left />

        {/* Right Content */}
        <div id="right" className="w-full md:w-[75%] min-h-screen md:pl-4 py-2">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Roadmap;
