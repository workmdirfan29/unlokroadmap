import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";
import Title from "./Title";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    closeMobileMenu();
    navigate("/");
  };

  return (
    <header
      className={`fixed top-0 left-0 z-[50] w-full transition-all duration-300 ${
        isScrolled ? "bg-black/30 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between p-2 px-10">
        <Title onClick={handleLogoClick} />
        <DesktopNav />
        <MobileMenu
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
          closeMobileMenu={closeMobileMenu}
          handleLogoClick={handleLogoClick}
        />
      </div>
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        closeMobileMenu={closeMobileMenu}
        handleLogoClick={handleLogoClick}
        isMobileMenu={true}
      />
    </header>
  );
};

export default Header;
