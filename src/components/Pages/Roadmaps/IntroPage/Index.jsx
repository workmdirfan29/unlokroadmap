import React from "react";
import TechStack from "./TechStack";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen pl-6 text-gray-200">
      <h1 className="mb-4 text-4xl font-bold text-purple-700">
        Welcome to Your Tech Roadmap
      </h1>
      <p className="mb-6 text-gray-300 ">
        Unlok Archive is a community-driven platform offering roadmaps and
        guides to help developers choose their learning paths and grow their
        skills.
      </p>
      <TechStack />
    </div>
  );
};

export default Index;
