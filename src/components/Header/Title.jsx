import React from "react";
import Logo from "../../assets/Logo.jpg";

const Title = ({ onClick }) => {
  return (
    <div onClick={onClick} className="flex items-center gap-2 cursor-pointer 
    ">
      <img
        src={Logo}
        className="rounded-lg mix-blend-screen"
        alt="logo"
        width={72}
        

      />
      <h1 className="hidden text-2xl font-bold md:block">
        <span className="text-orange-400">Roadmap</span>
      </h1>
    </div>
  );
};

export default Title;
