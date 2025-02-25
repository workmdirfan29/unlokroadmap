import React, { Suspense, lazy, memo } from "react";
import Spinner from "../../../../../Spinner/Spinner";
import NavigationButton from "../../../../../Button/NavigationButton";
import reactTopics from "./reactTopics"; // Import the reactTopics data

// Lazy load components
const Resources = lazy(() => import("./Resources"));
const Tips = lazy(() => import("../../../Tips/Tips"));

const components = {
  JSX: lazy(() => import("./Code/JSX")),
  Components: lazy(() => import("./Code/Components")),
  Props: lazy(() => import("./Code/Props")),
  State: lazy(() => import("./Code/State")),
  Events: lazy(() => import("./Code/Events")),
  ConditionalRendering: lazy(() => import("./Code/ConditionalRendering")),
  ListsAndKeys: lazy(() => import("./Code/ListsAndKeys")),
  Forms: lazy(() => import("./Code/Forms")),
  Hooks: lazy(() => import("./Code/Hooks")),
  ContextAPI: lazy(() => import("./Code/ContextAPI")),
  Routing: lazy(() => import("./Code/Routing")),
  ErrorBoundaries: lazy(() => import("./Code/ErrorBoundaries")),
  PerformanceOptimization: lazy(() => import("./Code/PerformanceOptimization")),
  Testing: lazy(() => import("./Code/Testing")),
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
const ReactJsPage = () => {
  return (
    <div className="flex flex-col p-2 text-gray-100 rounded-lg shadow-lg">
      <div id="headings">
        <h1 className="mb-4 text-2xl font-semibold">
          React.js <span className="text-purple-700">Roadmap</span>
        </h1>
        <p className="mb-4 text-slate-200">
          React is a popular library for building user interfaces.
        </p>
        <hr className="mb-2 opacity-20" />
        <p className="mb-4 text-slate-200">
          Here's a comprehensive 10-day React roadmap, complete with resources
          to help you learn effectively:
        </p>
      </div>

      {reactTopics.map(({ day, title, topics, exampleComponent }) => (
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
      <Suspense fallback={<Spinner />}>
        <Tips />
      </Suspense>
      <div id="navigate" className="flex justify-between mt-4 mb-2">
        <NavigationButton
          direction="left"
          path={"/roadmap/github"}
          title={"Github"}
        />
        <NavigationButton path={"/roadmap/typescript"} title={"TypeScript"} />
      </div>
    </div>
  );
};

export default ReactJsPage;
