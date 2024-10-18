import React from "react";

const DevIntro = () => {
  return (
    <div className="rounded-lg shadow-md ">
      <h1 className="mb-1 text-3xl font-bold text-gray-200">
        Dev <span className="text-purple-600">Design</span>
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
    </div>
  );
};

export default DevIntro;
