import React from "react";

function Footer() {
  return (
    <footer className="z-10 border-t border-neutral-800 w-full p-2.5 text-center bg-[#040404] ">
      <p className="text-sm font-normal">
        Powered by <span className="text-indigo-500">Unlok Dev</span> | Crafted with care by{" "}
        <a
          href="https://twitter.com/xsh_shahab"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-500 hover:underline"
        >
          @xsh_shahab
        </a>
      </p>
    </footer>
  );
}

export default Footer;
