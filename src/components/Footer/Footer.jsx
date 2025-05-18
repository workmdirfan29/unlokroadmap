import React from "react";

function Footer() {
  return (
    <footer className="z-10 border-t border-neutral-800 w-full p-2.5 text-center bg-[#040404] ">
      <p className="text-sm font-normal">
        Powered by <span className="text-orange-400">Unlok Dev</span> | Crafted with care by{" "}
        <a
          href="https://twitter.com/mdirfan29"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-400hover:underline"
        >
          @mdirfan29
        </a>
      </p>
    </footer>
  );
}

export default Footer;
