import React from "react";

const GuideShow = () => {
  return (
    <div className="flex flex-col p-4 mx-2 rounded-lg shadow-xl md:p-2 md:mx-3">
      <h1 className="mb-6 text-3xl font-bold">
        Archive <span className="text-orange-400">Guide</span>
      </h1>

      <p className="mb-4 text-gray-300 text-md ">
        Welcome to <b>Unlok Archive</b>, a comprehensive platform where you can
        find roadmaps for various tech stacks.
      </p>

      <p className="mb-4 text-gray-300 text-md ">
        This website provides a visual representation of learning paths, guiding
        you through the necessary steps to master each technology. Whether
        you’re a beginner or looking to advance your skills, you’ll find
        structured paths tailored to your goals, including timelines to help you
        plan your learning journey effectively.
      </p>

      <div className="p-2 mb-6 bg-gray-800 border-l-4 border-orange-500 rounded-lg">
        <h2 className="text-xl font-semibold text-purple-300">
          Currently Live:
        </h2>
        <p className="text-gray-300 text-md">
          The website is live on Vercel, and you can check it out{" "}
          <a
            href="https://unlokthmify.vercel.app/"
            className="text-orange-400 underline transition duration-300 hover:text-orange-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            here.
          </a>
        </p>
      </div>

      <p className="text-gray-300 text-md">
        On this website, you'll find a collection of buttons and backgrounds
        that you can easily integrate into your website or React projects
        without any installation. Unlok Thmify is free and open source, allowing
        you to collaborate and contribute to its development. There are many
        exciting changes still to come, so stay tuned!
      </p>
      <hr className="my-6 opacity-15" />
    </div>
  );
};

export default GuideShow;
