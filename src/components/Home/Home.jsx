import React from "react";
import Hero from "../Hero/Hero.jsx";
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full min-h-screen px-4 py-12 bg-[#060606] text-center">
      <div className="md:mt-20 h-screen">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
          Developer <span className="text-[#FF9524]">Roadmap</span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mb-10 mx-auto">
          Learn how to become a modern developer step-by-step with curated roadmaps, resources, and tips.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
          {/* Frontend Card */}
          <div className="bg-orange-200 shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">Frontend Developer</h2>
            <p className="text-gray-600 mb-4">Master HTML, CSS, JavaScript, React, and more.</p>
            <a
              href="./roadmap/frontend"
              // target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-[#DF8236] text-white rounded hover:bg-[#e87429] transition duration-300"
            >
              View Roadmap
            </a>
          </div>

          <div className="bg-orange-200 shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">Backend Developer</h2>
            <p className="text-gray-600 mb-4">Learn Node.js, databases, APIs, authentication, and more.</p>
            <a
              href="./roadmap/backend"
              // target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-[#DF8236] text-white rounded hover:bg-[#e87429] transition duration-300"
            >
              View Roadmap
            </a>
          </div>
          {/* DevOps Card */}

          <div className="bg-orange-200 shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">DevOps Engineer</h2>
            <p className="text-gray-600 mb-4">Explore CI/CD, Docker, Kubernetes, and cloud tools.</p>
            <a
              href="./roadmap/backend"
              // target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-[#DF8236] text-white rounded hover:bg-[#e87429] transition duration-300"
            >
              View Roadmap
            </a>
          </div>
        </div>

        <div className="mt-12">
          <button className="px-8 py-3 text-lg bg-[#DF8236] text-white rounded-full hover:bg-[#e87429] transition duration-300">
            Get Started
          </button>
        </div>
      </div>
          <Hero />
    </div>
  );
};

export default Home;
