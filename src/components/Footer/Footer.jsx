import React from "react";

function Footer() {
  return (
    <footer className="z-10 border-t border-neutral-800 w-full p-2.5 text-center bg-[#040404] ">
      <p>
        &copy; {new Date().getFullYear()} Unlok Archive. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
