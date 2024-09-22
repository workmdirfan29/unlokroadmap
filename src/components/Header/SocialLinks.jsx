import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

const SocialLinks = () => {
  return (
    <>
      <a
        href="https://twitter.com/xsh_shahab"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl font-semibold cursor-pointer hover:text-purple-700"
      >
        <FaXTwitter size={21} />
      </a>
      <a
        href="https://github.com/xshshahab/unlokarchive"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl font-semibold cursor-pointer hover:text-purple-700"
      >
        <FiGithub size={21} />
      </a>
    </>
  );
};

export default SocialLinks;
