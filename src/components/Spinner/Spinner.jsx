import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="z-10 flex items-center justify-center w-full h-screen">
      <div className="loader"></div>
    </div>
  );
};

export default Spinner;
