import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

const socialLinks = [
  {
    href: "https://twitter.com/mdirfan29",
    icon: <FaXTwitter size={21} />,
    label: "Twitter",
  },
  {
    href: "https://github.com/workmdirfan29",
    icon: <FiGithub size={21} />,
    label: "GitHub",
  },
];

const SocialLinks = () => {
  return (
    <>
      {socialLinks.map(({ href, icon, label }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-semibold cursor-pointer hover:text-orange-400"
          aria-label={label}
        >
          {icon}
        </a>
      ))}
    </>
  );
};

export default SocialLinks;
