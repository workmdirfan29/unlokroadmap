import React from "react";

const ResourceSection = ({ title, items }) => (
  <div className="mb-8">
    <h2 className="mb-4 text-2xl font-semibold">{title}</h2>
    <ul className="space-y-2 list-disc list-inside">
      {items.map((item, index) => (
        <li key={index}>
          {item.link ? (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:underline"
            >
              {item.name}
            </a>
          ) : (
            item.name
          )}{" "}
          {item.description}
        </li>
      ))}
    </ul>
  </div>
);

const Resources = () => {
  const youtubeChannels = [
    {
      name: "Academind",
      link: "https://www.youtube.com/c/Academind",
      description: "In-depth tutorials on Node.js and integrating it with frameworks like Express.",
    },
    {
      name: "Traversy Media",
      link: "https://www.youtube.com/c/TraversyMedia",
      description: "Offers tutorials on Node.js and full-stack development.",
    },
    {
      name: "The Net Ninja",
      link: "https://www.youtube.com/c/TheNetNinja",
      description: "Comprehensive series on Node.js and Express.js.",
    },
    {
      name: "Programming with Mosh",
      link: "https://www.youtube.com/c/programmingwithmosh",
      description: "Provides solid introductions to Node.js and its ecosystem.",
    },
    {
      name: "TypeScript Academy",
      link: "https://www.youtube.com/c/TypeScriptAcademy",
      description: "Focuses on Node.js with TypeScript.",
    },
  ];

  const documentation = [
    {
      name: "Node.js Official Documentation",
      link: "https://nodejs.org/en/docs/",
      description: "The official documentation for learning and reference.",
    },
    {
      name: "MDN Web Docs - Node.js",
      link: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework",
      description: "Comprehensive resources for learning Node.js.",
    },
    {
      name: "Node.js Best Practices",
      link: "https://github.com/goldbergyoni/nodebestpractices",
      description: "A collection of best practices for Node.js development.",
    },
  ];

  const interactivePlatforms = [
    {
      name: "NodeSchool",
      link: "https://nodeschool.io/",
      description: "Open source workshops that teach web software skills.",
    },
    {
      name: "Codecademy",
      link: "https://www.codecademy.com/learn/learn-node-js",
      description: "Interactive lessons on Node.js basics and applications.",
    },
    {
      name: "freeCodeCamp",
      link: "https://www.freecodecamp.org/learn/back-end-development-and-apis/",
      description: "Includes sections for learning Node.js along with full-stack projects.",
    },
  ];

  const books = [
    "Node.js Design Patterns by Mario Casciaro and Luciano Mammino",
    "Eloquent JavaScript by Marijn Haverbeke (Node.js section)",
    "You Don't Know JS (book series) by Kyle Simpson (covers Node.js concepts)",
    "Learning Node.js Development by Andrew Mead",
  ];

  const tools = [
    {
      name: "Visual Studio Code",
      link: "https://code.visualstudio.com/",
      description: "A popular code editor with excellent Node.js support and extensions.",
    },
    {
      name: "Postman",
      link: "https://www.postman.com/",
      description: "An API development environment for testing your Node.js APIs.",
    },
  ];

  const forums = [
    {
      name: "Stack Overflow",
      link: "https://stackoverflow.com/questions/tagged/node.js",
      description: "Ask questions and find answers about Node.js.",
    },
    {
      name: "Node.js Discord",
      link: "https://discord.gg/nodejs",
      description: "Join the Node.js community on Discord to discuss and ask questions.",
    },
    {
      name: "Reddit - Node.js",
      link: "https://www.reddit.com/r/node/",
      description: "A subreddit for discussing all things Node.js.",
    },
  ];

  const practiceProjects = [
    "Create a simple REST API using Node.js and Express.",
    "Build a weather application using Node.js and a public API.",
    "Develop a chat application using Node.js and WebSockets.",
    "Implement a CRUD application using Node.js, Express, and a MongoDB database.",
  ];

  return (
    <div className="max-w-5xl p-5 mx-auto">
      <h1 className="mb-6 text-3xl font-bold text-center">
        Learning Node.js Resources
      </h1>

      <ResourceSection title="YouTube Channels" items={youtubeChannels} />
      <ResourceSection
        title="Online Documentation and Tutorials"
        items={documentation}
      />
      <ResourceSection
        title="Interactive Learning Platforms"
        items={interactivePlatforms}
      />
      <ResourceSection
        title="Books"
        items={books.map((book) => ({ name: book }))}
      />
      <ResourceSection title="Tools and Editors" items={tools} />
      <ResourceSection title="Forums and Community" items={forums} />

      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Practice Projects</h2>
        <ul className="space-y-2 list-disc list-inside">
          {practiceProjects.map((project, index) => (
            <li key={index}>{project}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resources;
