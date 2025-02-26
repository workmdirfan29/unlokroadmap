import React from "react";
import Logo from "../../assets/Logo.png";

const Title = ({ onClick }) => {
  return (
    <div onClick={onClick} className="flex items-center gap-2 cursor-pointer">
      <img
        src={Logo}
        className="rounded-lg"
        alt="logo"
        width={42}

      />
      <h1 className="hidden text-2xl font-bold md:block">
        <span className="text-purple-600">Roadmap</span>
      </h1>
    </div>
  );
};

export default Title;
