import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { quizzes } from "./Data/quizzes";

const XshShahab = () => {
  const [openCategory, setOpenCategory] = useState(null);
  const [openLevel, setOpenLevel] = useState(null);

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
    setOpenLevel(null);
  };

  const toggleLevel = (level) => {
    setOpenLevel(openLevel === level ? null : level);
  };

  const categories = Object.keys(quizzes);

  return (
    <div className="p-4">
      <h2 className="mb-1 text-2xl font-bold">
        <span className="text-purple-600">Unlock Your Potential:</span> DSA
        Essentials for Aspiring Java Developers
      </h2>
      <p className="p-2 mb-4 text-gray-400">
        Challenge yourself: conquer DSA and unleash your true coding potential.
        Each algorithm mastered brings you closer to greatness—don’t just dream,
        become the developer you aspire to be!
      </p>
      <hr className="my-3 opacity-15" />
      {categories.map((category) => (
        <div id="list-box" className="p-2" key={category}>
          <div
            id="list-heading"
            className="mb-2 font-mono text-xl font-bold text-neutral-200"
            onClick={() => toggleCategory(category)}
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background:
                openCategory === category ? "bg-slate-700" : "bg-slate-800",
              transition: "background 0.3s ease",
            }}
          >
            {category}
            {openCategory === category ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <hr className="my-1 opacity-15" />
          <div
            style={{
              overflow: "hidden",
              transition: "max-height 0.3s ease",
              maxHeight: openCategory === category ? "500px" : "0",
            }}
          >
            {["Easy", "Medium", "Hard"].map((level) => (
              <div key={level}>
                <div
                  className="p-2 transition duration-200 rounded hover:bg-neutral-900"
                  onClick={() => toggleLevel(level)}
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <h2 className="text-lg">{level}</h2>
                  {openLevel === level ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                <hr className="my-1 opacity-15" />
                <div
                  style={{
                    transition: "max-height 0.3s ease",
                    maxHeight:
                      openLevel === level
                        ? `${quizzes[category][level].length * 50}px`
                        : "0",
                    overflow: "hidden",
                  }}
                >
                  {openLevel === level && (
                    <ul className="pl-3 mb-2">
                      {quizzes[category][level].map((quiz, i) => (
                        <li
                          key={i}
                          className="flex justify-between items-center p-2.5 my-1 transition duration-200 rounded cursor-pointer bg-neutral-800 hover:bg-neutral-900"
                        >
                          <span>
                            <a
                              href={quiz.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-orange-400"
                            >
                              {quiz.question}
                            </a>
                          </span>
                          <a
                            href={quiz.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FiArrowUpRight
                              size={20}
                              className="ttext-orange-400 hover:text-orange-400"
                            />
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default XshShahab;
