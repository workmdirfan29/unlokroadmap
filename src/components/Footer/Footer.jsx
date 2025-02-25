import React from "react";

function Footer() {
  return (
    <footer className="z-10 border-t border-neutral-800 w-full p-2.5 text-center bg-[#040404] ">
      <p className="text-sm font-normal">
      &copy; {new Date().getFullYear()} Unlok <span className="text-indigo-500">Roadmap.</span> All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
