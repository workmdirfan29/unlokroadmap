import { Link } from "react-router-dom";
import Hero from "../Hero/Hero.jsx";
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full min-h-screen px-4 py-12 bg-[#060606] text-center">
      <div className="h-screen md:mt-20">
        <h1 className="mb-6 text-6xl font-bold text-white md:text-8xl">
          Developer <span className="text-[#FF9524]">Roadmap</span>
        </h1>

        <p className="max-w-2xl mx-auto mb-10 text-lg text-gray-300 md:text-2xl">
          Learn how to become a modern developer step-by-step with curated
          roadmaps, resources, and tips.
        </p>

        <div className="grid w-full max-w-6xl grid-cols-1 gap-6 mx-auto md:grid-cols-3">
          <div className="p-6 transition duration-300 bg-orange-200 rounded-lg shadow-md hover:shadow-xl">
            <h2 className="mb-2 text-2xl font-semibold text-gray-900">
              Frontend Developer
            </h2>
            <p className="mb-4 text-gray-600">
              Master HTML, CSS, JavaScript, React, and more.
            </p>
            <Link
              to="/roadmap/frontend"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-[#DF8236] text-white rounded hover:bg-[#e87429] transition duration-300"
            >
              View Roadmap
            </Link>
          </div>

          <div className="p-6 transition duration-300 bg-orange-200 rounded-lg shadow-md hover:shadow-xl">
            <h2 className="mb-2 text-2xl font-semibold text-gray-900">
              Backend Developer
            </h2>
            <p className="mb-4 text-gray-600">
              Learn Node.js, databases, APIs, authentication, and more.
            </p>
            <Link
              to="./roadmap/backend"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-[#DF8236] text-white rounded hover:bg-[#e87429] transition duration-300"
            >
              View Roadmap
            </Link>
          </div>

          <div className="p-6 transition duration-300 bg-orange-200 rounded-lg shadow-md hover:shadow-xl">
            <h2 className="mb-2 text-2xl font-semibold text-gray-900">
              DevOps Engineer
            </h2>
            <p className="mb-4 text-gray-600">
              Explore CI/CD, Docker, Kubernetes, and cloud tools.
            </p>
            <Link
              to="./roadmap/devops"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-[#DF8236] text-white rounded hover:bg-[#e87429] transition duration-300"
            >
              View Roadmap
            </Link>
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
