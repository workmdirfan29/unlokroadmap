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
              className="text-orange-400hover:underline"
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
      description: "In-depth tutorials on TypeScript and integrating it with frameworks like React.",
    },
    {
      name: "TypeScript Academy",
      link: "https://www.youtube.com/c/TypeScriptAcademy",
      description: "Focuses solely on TypeScript concepts, from basics to advanced topics.",
    },
    {
      name: "Traversy Media",
      link: "https://www.youtube.com/c/TraversyMedia",
      description: "Offers tutorials on TypeScript and its applications in web development.",
    },
    {
      name: "The Net Ninja",
      link: "https://www.youtube.com/c/TheNetNinja",
      description: "A comprehensive series on TypeScript that covers practical examples.",
    },
    {
      name: "Academind",
      link: "https://www.youtube.com/c/Academind",
      description: "Covers TypeScript in the context of various frameworks, especially Angular and React.",
    },
    {
      name: "Programming with Mosh",
      link: "https://www.youtube.com/c/programmingwithmosh",
      description: "Provides a solid introduction to TypeScript and its use cases in modern development.",
    },
  ];

  const documentation = [
    {
      name: "TypeScript Official Documentation",
      link: "https://www.typescriptlang.org/docs/",
      description: "The official documentation is the best place to start learning TypeScript.",
    },
    {
      name: "MDN Web Docs - TypeScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeScript",
      description: "Learn TypeScript basics and advanced concepts.",
    },
    {
      name: "TypeScript Deep Dive",
      link: "https://basarat.gitbook.io/typescript/",
      description: "A comprehensive book available online for free that covers TypeScript in detail.",
    },
  ];

  const interactivePlatforms = [
    {
      name: "TypeScript Playground",
      link: "https://www.typescriptlang.org/play",
      description: "An interactive online editor to experiment with TypeScript code.",
    },
    {
      name: "Codecademy",
      link: "https://www.codecademy.com/learn/learn-typescript",
      description: "Interactive lessons on TypeScript basics and applications.",
    },
    {
      name: "freeCodeCamp",
      link: "https://www.freecodecamp.org/learn",
      description: "Includes sections for learning TypeScript along with full-stack projects.",
    },
  ];

  const books = [
    "Pro TypeScript by Steve Fenton",
    "Programming TypeScript by Boris Cherny",
    "TypeScript Quickly by Yakov Fain and Anton Moiseev",
    "Effective TypeScript by Dan Vanderkam",
  ];

  const tools = [
    {
      name: "Visual Studio Code",
      link: "https://code.visualstudio.com/",
      description: "A popular code editor with excellent TypeScript support and extensions.",
    },
    {
      name: "TypeScript ESLint",
      link: "https://typescript-eslint.io/",
      description: "Integrate TypeScript with ESLint for better code quality.",
    },
  ];

  const forums = [
    {
      name: "Stack Overflow",
      link: "https://stackoverflow.com/questions/tagged/typescript",
      description: "Ask questions and find answers about TypeScript.",
    },
    {
      name: "TypeScript Discord",
      link: "https://discord.gg/typescript",
      description: "Join the TypeScript community on Discord to discuss and ask questions.",
    },
    {
      name: "Reddit - TypeScript",
      link: "https://www.reddit.com/r/typescript/",
      description: "A subreddit for discussing all things TypeScript.",
    },
  ];

  const practiceProjects = [
    "Create a simple TypeScript-based to-do list application.",
    "Build a weather application using TypeScript and a public API.",
    "Develop a single-page application (SPA) with TypeScript and React.",
    "Implement a CRUD application using TypeScript and a backend API.",
  ];

  return (
    <div className="max-w-5xl p-5 mx-auto">
      <h1 className="mb-6 text-3xl font-bold text-center">
        Learning TypeScript Resources
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
