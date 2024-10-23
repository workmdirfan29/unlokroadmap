import React, { Suspense, lazy } from "react";
import Spinner from "./Spinner/Spinner";
import NavigationButton from "./NavigationButton";
const Resources = lazy(() => import("./Resources"));
const Tips = lazy(() => import("./Tips"));

const components = {
  Repositories: lazy(() => import("./Code/Repositories")),
  Commits: lazy(() => import("./Code/Commits")),
  Branching: lazy(() => import("./Code/Branching")),
  Merging: lazy(() => import("./Code/Merging")),
  PullRequests: lazy(() => import("./Code/PullRequests")),
  Issues: lazy(() => import("./Code/Issues")),
  Collaboration: lazy(() => import("./Code/Collaboration")),
  GitHubPages: lazy(() => import("./Code/GitHubPages")),
  CI_CD: lazy(() => import("./Code/CI_CD")),
  FinalProject: lazy(() => import("./Code/FinalProject")),
};

const DaySection = ({ day, title, topics, exampleComponent }) => (
  <div id={`day-${day}`} key={day}>
    <h3 className="mb-2 text-xl font-semibold">{title}</h3>
    <ul className="mb-1 list-disc md:ml-5">
      <li>
        <span className="mb-1 font-semibold">Topics :</span>
        <ul className="list-disc md:ml-5">
          {topics.map((topic, index) => (
            <li key={index} className="mb-1">
              {topic}
            </li>
          ))}
        </ul>
      </li>
      <li className="mb-1 font-semibold">Example Code:</li>
    </ul>
    <div id="code" className="my-4">
      <Suspense fallback={<Spinner />}>
        {React.createElement(components[exampleComponent])}
      </Suspense>
    </div>
    <hr className="my-5 opacity-20" />
  </div>
);

const gitTopics = [
  {
    day: 1,
    title: "Day 1: Introduction to GitHub",
    topics: [
      "What is GitHub?",
      "Setting up your GitHub account",
      "Basic Git concepts (git vs GitHub)",
    ],
    exampleComponent: "Repositories",
  },
  {
    day: 2,
    title: "Day 2: Repositories and Commits",
    topics: [
      "Creating a repository",
      "Making your first commit",
      "Understanding commit messages",
    ],
    exampleComponent: "Commits",
  },
  {
    day: 3,
    title: "Day 3: Branching",
    topics: [
      "Understanding branches",
      "Creating and switching branches",
      "Best practices for branching",
    ],
    exampleComponent: "Branching",
  },
  {
    day: 4,
    title: "Day 4: Merging",
    topics: [
      "Merging branches",
      "Resolving merge conflicts",
      "Fast-forward merges",
    ],
    exampleComponent: "Merging",
  },
  {
    day: 5,
    title: "Day 5: Pull Requests",
    topics: [
      "Creating pull requests",
      "Reviewing pull requests",
      "Merging pull requests",
    ],
    exampleComponent: "PullRequests",
  },
  {
    day: 6,
    title: "Day 6: Issues and Project Management",
    topics: [
      "Creating and managing issues",
      "Using labels and milestones",
      "Project boards",
    ],
    exampleComponent: "Issues",
  },
  {
    day: 7,
    title: "Day 7: Collaboration on GitHub",
    topics: [
      "Collaborating with others",
      "Forking repositories",
      "Working with teams",
    ],
    exampleComponent: "Collaboration",
  },
  {
    day: 8,
    title: "Day 8: GitHub Pages",
    topics: [
      "Setting up GitHub Pages",
      "Deploying a static site",
      "Custom domains",
    ],
    exampleComponent: "GitHubPages",
  },
  {
    day: 9,
    title: "Day 9: Continuous Integration and Deployment",
    topics: [
      "Understanding CI/CD",
      "Setting up GitHub Actions",
      "Automating your workflow",
    ],
    exampleComponent: "CI_CD",
  },
  {
    day: 10,
    title: "Day 10: Final Project",
    topics: [
      "Combine all concepts to create a collaborative project",
      "Best practices for open-source contributions",
    ],
    exampleComponent: "FinalProject",
  },
];

const GitHubPage = () => {
  return (
    <div className="flex flex-col p-2 text-gray-100 rounded-lg shadow-lg">
      <div id="headings">
        <h1 className="mb-4 text-2xl font-semibold">
          GitHub <span className="text-purple-700">Roadmap</span>
        </h1>
        <p className="mb-4 text-slate-200">
          GitHub is a powerful platform for version control and collaboration.
        </p>
        <hr className="mb-2 opacity-20" />
        <p className="mb-4 text-slate-200">
          Here's a comprehensive 10-day GitHub roadmap, complete with resources
          to help you learn effectively:
        </p>
      </div>

      {gitTopics.map(({ day, title, topics, exampleComponent }) => (
        <DaySection
          day={day}
          title={title}
          topics={topics}
          exampleComponent={exampleComponent}
          key={day}
        />
      ))}

      <div className="resources">
        <Suspense fallback={<Spinner />}>
          <Resources />
        </Suspense>
      </div>

      <hr className="mb-4 opacity-20" />
      <Tips />
      <div id="navigate" className="flex justify-between mt-4 mb-2">
        <NavigationButton
          direction="left"
          path={"/roadmap/javascript"}
          title={"JavaScript"}
        />
        <NavigationButton path={"/roadmap/reactjs"} title={"React Js"} />
      </div>
    </div>
  );
};

export default GitHubPage;
