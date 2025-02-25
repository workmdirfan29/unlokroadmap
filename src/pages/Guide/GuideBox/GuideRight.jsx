import React from "react";
import { Outlet } from "react-router-dom";

const GuideRight = () => {
  return (
    <div className="z-0 min-h-screen mt-14 ">
      <Outlet />
    </div>
  );
};

export default GuideRight;
