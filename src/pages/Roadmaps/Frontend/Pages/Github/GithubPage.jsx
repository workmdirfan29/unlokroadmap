import React, { Suspense, lazy, memo } from "react";
import NavigationButton from "../../../../../components/Button/NavigationButton"
import Spinner from "../../../../../Spinner";
import gitTopics from "./gitTopics"; // Import the gitTopics data

// Lazy load components
const Resources = lazy(() => import("./Resources"));
const Tips = lazy(() => import("../../../Tips/Tips"));


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

// Memoized DaySection component
const DaySection = memo(({ day, title, topics, exampleComponent }) => (
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
));

// Main component
const GitHubPage = () => {
  return (
    <div className="flex flex-col p-2 text-gray-100 rounded-lg shadow-lg">
      <div id="headings">
        <h1 className="mb-4 text-2xl font-semibold">
          GitHub <span className="text-orange-400">Roadmap</span>
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
      <div id="success">
        <Suspense fallback={<Spinner />}>
          <Tips />
        </Suspense>
      </div>
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
