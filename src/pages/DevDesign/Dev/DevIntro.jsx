import React from "react";
import Docs from "./assets/Docs.png";

const DevIntro = () => {
  return (
    <div className="p-4 rounded-lg shadow-md">
      <h1 className="mb-1.5 text-3xl font-bold text-gray-200">
        Dev <span className="text-orange-400">Design</span>
      </h1>
      <p className="mt-1 text-gray-300">
        Welcome to the development design section! Here, developers can connect
        their GitHub accounts to create and manage personalized roadmaps and
        flowcharts.
      </p>
      <p className="mt-3 text-gray-300">
        Click on your username to access your dedicated page, where you can add
        valuable resources to help the community grow.
      </p>
      <p className="mt-3 text-gray-300">
        Join us in creating a collaborative space for developers to share their
        insights and experiences!
      </p>
      <div
        id="image-container"
        className="flex md:my-4 h-[30vh] md:h-[80vh] rounded-lg shadow-md"
      >
        <img
          src={Docs}
          alt="dev-docs"
          className="object-center w-full h-full rotate-180 rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default DevIntro;
