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
      name: "Chai aur Code",
      link: "https://www.youtube.com/playlist?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37",
      description: " - Hindi tutorials on programming and technology.",
    },
    {
      name: "CodeWithHarry",
      link: "https://www.youtube.com/c/CodeWithHarry",
      description: " - A popular Hindi channel offering coding tutorials.",
    },
    {
      name: "Shradha Khapra",
      link: "https://www.youtube.com/playlist?list=PLGjplNEQ1it_oTvuLRNqXfz_v_0pq6unW",
      description: " - Hindi channel focusing on technology and programming.",
    },
    {
      name: "Traversy Media",
      link: "https://www.youtube.com/user/TechGuyWeb",
      description: " - Great tutorials on JavaScript and web development.",
    },
    {
      name: "The Net Ninja",
      link: "https://www.youtube.com/c/TheNetNinja",
      description: " - Offers a wide range of JavaScript tutorials.",
    },

    {
      name: "freeCodeCamp",
      link: "https://www.youtube.com/c/Freecodecamp",
      description: " - Extensive coding tutorials including JavaScript.",
    },
  ];

  const documentation = [
    {
      name: "MDN Web Docs",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      description: " - Comprehensive documentation on JavaScript.",
    },
    {
      name: "W3Schools",
      link: "https://www.w3schools.com/js/",
      description: " - Offers tutorials and references on JavaScript.",
    },
    {
      name: "JavaScript.info",
      link: "https://javascript.info/",
      description: " - A modern tutorial for JavaScript.",
    },
    {
      name: "Codecademy",
      link: "https://www.codecademy.com/learn/introduction-to-javascript",
      description: " - Interactive JavaScript coding lessons.",
    },
    {
      name: "Khan Academy",
      link: "https://www.khanacademy.org/computing/computer-programming/programming/JavaScript",
      description: " - Offers courses on JavaScript programming.",
    },
  ];

  const interactivePlatforms = [
    {
      name: "freeCodeCamp",
      link: "https://www.freecodecamp.org/",
      description: " - Offers a free curriculum including JavaScript.",
    },
    {
      name: "SoloLearn",
      link: "https://www.sololearn.com/Course/JavaScript/",
      description: " - Mobile-friendly platform with interactive lessons.",
    },
    {
      name: "Scrimba",
      link: "https://scrimba.com/learn/javascript",
      description: " - Interactive coding screencasts focusing on JavaScript.",
    },
  ];

  const books = [
    "Eloquent JavaScript by Marijn Haverbeke",
    "You Don’t Know JS (book series) by Kyle Simpson",
    "JavaScript: The Good Parts by Douglas Crockford",
  ];

  const tools = [
    {
      name: "CodePen",
      link: "https://codepen.io/",
      description:
        " - A social development environment for front-end designers.",
    },
    {
      name: "JSFiddle",
      link: "https://jsfiddle.net/",
      description: " - An online editor for testing HTML, CSS, and JavaScript.",
    },
    {
      name: "Visual Studio Code",
      link: "https://code.visualstudio.com/",
      description: " - A popular code editor with extensions for JavaScript.",
    },
  ];

  const forums = [
    {
      name: "Stack Overflow",
      link: "https://stackoverflow.com/",
      description: " - A community for asking questions about JavaScript.",
    },
    {
      name: "Reddit - JavaScript",
      link: "https://www.reddit.com/r/javascript/",
      description: " - A community for discussing JavaScript topics.",
    },
    {
      name: "Discord Communities",
      description: " - Join servers focused on JavaScript for real-time help.",
    },
  ];

  const practiceProjects = [
    "Create a simple to-do list application.",
    "Build a quiz app that tracks user scores.",
    "Develop a weather app using an API.",
    "Implement a simple game (e.g., tic-tac-toe).",
  ];

  return (
    <div className="max-w-5xl p-5 mx-auto">
      <h1 className="mb-6 text-3xl font-bold text-center">
        Learning JavaScript Resources
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
