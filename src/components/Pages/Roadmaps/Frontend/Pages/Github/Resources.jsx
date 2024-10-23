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
      name: "Chai aur code",
      link: "https://youtu.be/q8EevlEpQ2A?si=H2swGNP_tlQVKJiu",
      description:
        " - Interesting coding concepts and tips presented in Hindi.",
    },
    {
      name: "Engineering Digest",
      link: "https://www.youtube.com/playlist?list=PLA3GkZPtsafYYWC-N6vicOLP0w-4fiQ2S",
      description:
        " - A collection of tutorials focusing on engineering and technology in Hindi.",
    },
    {
      name: "Traversy Media",
      link: "https://www.youtube.com/user/TechGuyWeb",
      description: " - Great tutorials on Git and GitHub.",
    },
    {
      name: "The Net Ninja",
      link: "https://www.youtube.com/c/TheNetNinja",
      description: " - Offers a series on Git and GitHub.",
    },
    {
      name: "GitHub Training & Guides",
      link: "https://www.youtube.com/c/GitHubGuides",
      description: " - Official GitHub tutorials and tips.",
    },
  ];

  const documentation = [
    {
      name: "Git Documentation",
      link: "https://git-scm.com/doc",
      description: " - Official documentation for Git.",
    },
    {
      name: "GitHub Docs",
      link: "https://docs.github.com/en",
      description: " - Comprehensive documentation on GitHub features.",
    },
    {
      name: "Atlassian Git Tutorial",
      link: "https://www.atlassian.com/git/tutorials",
      description: " - In-depth tutorials and guides on Git.",
    },
  ];

  const interactivePlatforms = [
    {
      name: "Learn Git Branching",
      link: "https://learngitbranching.js.org/",
      description: " - An interactive way to learn Git branches.",
    },
    {
      name: "Codecademy - Learn Git",
      link: "https://www.codecademy.com/learn/learn-git",
      description: " - Interactive course on Git basics.",
    },
  ];

  const books = [
    "Pro Git by Scott Chacon and Ben Straub",
    "Git Pocket Guide by Richard E. Silverman",
    "Version Control with Git by Jon Loeliger and Matthew McCullough",
  ];

  const tools = [
    {
      name: "GitHub Desktop",
      link: "https://desktop.github.com/",
      description: " - A GUI client for managing GitHub repositories.",
    },
    {
      name: "SourceTree",
      link: "https://www.sourcetreeapp.com/",
      description: " - A free Git client for Windows and Mac.",
    },
    {
      name: "GitKraken",
      link: "https://www.gitkraken.com/",
      description: " - A popular Git GUI client for managing repositories.",
    },
  ];

  const forums = [
    {
      name: "Stack Overflow",
      link: "https://stackoverflow.com/questions/tagged/git",
      description: " - A community for asking questions about Git.",
    },
    {
      name: "Reddit - Git",
      link: "https://www.reddit.com/r/git/",
      description: " - A community for discussing Git topics.",
    },
    {
      name: "Discord Git Communities",
      description: " - Join servers focused on Git for real-time help.",
    },
  ];

  const practiceProjects = [
    "Contribute to an open-source project on GitHub.",
    "Create a personal portfolio site using GitHub Pages.",
    "Build a collaborative project with friends using Git.",
    "Set up a local Git repository and practice branching and merging.",
  ];

  return (
    <div className="max-w-5xl p-5 mx-auto">
      <h1 className="mb-6 text-3xl font-bold text-center">
        Learning Git and GitHub Resources
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
