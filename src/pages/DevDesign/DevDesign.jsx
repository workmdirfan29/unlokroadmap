import React from "react";
import { Link, Outlet } from "react-router-dom";
import DevLeft from "./Dev/DevLeft";

const DevDesign = () => {
  return (
    <div className="container relative flex mx-auto mt-[70px]">
      <DevLeft />
      <div
        id="right"
        className="w-full md:w-[75vw] md:ml-[20vw] md:px-5 px-8 min-h-screen overflow-y-auto"
      >
        <Outlet />
      </div>
    </div>
  );
};

export default DevDesign;
