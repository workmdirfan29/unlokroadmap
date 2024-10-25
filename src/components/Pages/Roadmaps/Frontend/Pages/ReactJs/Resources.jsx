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
              className="text-blue-500 hover:underline"
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
      name: "Chai aur Code",
      link: "https://www.youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige",
      description:
        "A comprehensive Hindi channel that delves deep into React.js concepts, making learning accessible and engaging.",
    },
    {
      name: "CodeWithHarry",
      link: "https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt",
      description:
        "Offers a unique and effective approach to learning React.js through detailed playlists and practical examples.",
    },
    {
      name: "Academind",
      link: "https://www.youtube.com/c/Academind",
      description:
        "Engaging tutorials on React and other web technologies, focusing on real-world applications and best practices.",
    },
    {
      name: "Traversy Media",
      link: "https://www.youtube.com/c/TraversyMedia",
      description:
        "Provides comprehensive tutorials across various web development topics, including in-depth lessons on React.",
    },
    {
      name: "The Net Ninja",
      link: "https://www.youtube.com/c/TheNetNinja",
      description:
        "A well-structured series on React and modern JavaScript, designed for learners at all levels.",
    },
    {
      name: "freeCodeCamp",
      link: "https://www.youtube.com/c/Freecodecamp",
      description:
        "Offers a full course on React for beginners, emphasizing hands-on coding and project-based learning.",
    },
    {
      name: "Codevolution",
      link: "https://www.youtube.com/c/Codevolution",
      description:
        "Focuses on detailed tutorials and projects in React, perfect for both beginners and experienced developers.",
    },
  ];

  const documentation = [
    {
      name: "React Official Documentation",
      link: "https://reactjs.org/docs/getting-started.html",
      description: " - The official React documentation for learning.",
    },
    {
      name: "MDN Web Docs - React",
      link: "https://developer.mozilla.org/en-US/docs/Learn/React",
      description: " - Resources for learning React on MDN.",
    },
    {
      name: "W3Schools - React",
      link: "https://www.w3schools.com/react/",
      description: " - Tutorials and references for React.",
    },
    {
      name: "React Patterns",
      link: "https://reactpatterns.com/",
      description: " - A collection of React patterns and best practices.",
    },
  ];

  const interactivePlatforms = [
    {
      name: "freeCodeCamp",
      link: "https://www.freecodecamp.org/",
      description: " - Free coding curriculum including React.",
    },
    {
      name: "Codecademy",
      link: "https://www.codecademy.com/learn/react-101",
      description: " - Interactive lessons on React.",
    },
    {
      name: "Scrimba",
      link: "https://scrimba.com/learn/react",
      description: " - Interactive coding screencasts for React.",
    },
    {
      name: "Frontend Mentor",
      link: "https://www.frontendmentor.io/",
      description: " - Challenges to practice your React skills.",
    },
  ];

  const books = [
    "React Up & Running by Stoyan Stefanov",
    "Learning React by Alex Banks and Eve Porcello",
    "Fullstack React by Anthony Accomazzo, et al.",
    "The Road to React by Robin Wieruch",
  ];

  const tools = [
    {
      name: "CodeSandbox",
      link: "https://codesandbox.io/",
      description: " - An online editor for React projects.",
    },
    {
      name: "StackBlitz",
      link: "https://stackblitz.com/",
      description: " - Instant development environment for React.",
    },
    {
      name: "Visual Studio Code",
      link: "https://code.visualstudio.com/",
      description: " - A popular code editor with React extensions.",
    },
  ];

  const forums = [
    {
      name: "Stack Overflow",
      link: "https://stackoverflow.com/questions/tagged/reactjs",
      description: " - Ask questions and find answers about React.",
    },
    {
      name: "Reactiflux Discord",
      link: "https://www.reactiflux.com/",
      description: " - A community on Discord for React developers.",
    },
    {
      name: "Reddit - ReactJS",
      link: "https://www.reddit.com/r/reactjs/",
      description: " - A community for discussing React topics.",
    },
  ];

  const practiceProjects = [
    "Create a simple to-do list application with React.",
    "Build a weather application using a public API.",
    "Develop a single-page application (SPA) with React Router.",
    "Implement a CRUD application using React and a backend API.",
  ];

  return (
    <div className="max-w-5xl p-5 mx-auto">
      <h1 className="mb-6 text-3xl font-bold text-center">
        Learning React.js Resources
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
