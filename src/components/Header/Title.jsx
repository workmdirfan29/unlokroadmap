import React from "react";
import Logo from "../../assets/Logo.png";

const Title = ({ onClick }) => {
  return (
    <div onClick={onClick} className="flex items-center gap-2 cursor-pointer">
      <img src={Logo} alt="logo" width={32} />
      <h1 className="hidden text-2xl font-bold md:block">
        Unlok <span className="text-purple-500">Roadmap</span>
      </h1>
    </div>
  );
};

export default Title;
