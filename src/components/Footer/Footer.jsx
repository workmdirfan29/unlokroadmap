import React, { useState, useEffect } from "react";

function Footer() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer
      className={`fixed p-2.5 w-full text-center text-slate-300  transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{ bottom: 0 }}
    >
      <p>
        &copy; {new Date().getFullYear()} Unlok Archive. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
