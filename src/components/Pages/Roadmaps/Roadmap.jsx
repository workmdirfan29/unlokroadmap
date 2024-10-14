import React from "react";
import { Outlet } from "react-router-dom";
import Left from "./Left";

const Roadmap = () => {
  return (
    <>
      <div id="main" className="flex w-full min-h-screen px-10 mt-16">
        <div className="fixed w-[20vw] border-r border-gray-800 h-full top-16 z-10 hidden md:block">
          <Left />
        </div>

        <div
          id="right"
          className="ml-0 md:ml-[22vw] w-full md:w-[75vw] py-2 min-h-screen"
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Roadmap;
