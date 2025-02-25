import React, { Suspense, lazy, memo } from "react";
import NavigationButton from "../../../../../components/Button/NavigationButton"
import Spinner from "../../../../../Spinner";
import tsTopics from "./tsTopics";

// Lazy load components
const Resources = lazy(() => import("./Resources"));
const Tips = lazy(() => import("../../../Tips/Tips"));

const components = {
  Introduction: lazy(() => import("./Code/Introduction")),
  Variables: lazy(() => import("./Code/Variables")),
  Interfaces: lazy(() => import("./Code/Interfaces")),
  Functions: lazy(() => import("./Code/Functions")),
  Classes: lazy(() => import("./Code/Classes")),
  EnumsAndTuples: lazy(() => import("./Code/EnumsAndTuples")),
  Generics: lazy(() => import("./Code/Generics")),
  AdvancedTypes: lazy(() => import("./Code/AdvancedTypes")),
  Modules: lazy(() => import("./Code/Modules")),
  DOMInteraction: lazy(() => import("./Code/DOMInteraction")),
  AsyncAwait: lazy(() => import("./Code/AsyncAwait")),
  ReactIntegration: lazy(() => import("./Code/ReactIntegration")),
  Testing: lazy(() => import("./Code/Testing")),
  Tooling: lazy(() => import("./Code/Tooling")),
  AdvancedPatterns: lazy(() => import("./Code/AdvancedPatterns")),
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
const TSPage = () => {
  return (
    <div className="flex flex-col p-2 text-gray-100 rounded-lg shadow-lg">
      <div id="headings">
        <h1 className="mb-4 text-2xl font-semibold">
          TypeScript <span className="text-purple-700">Roadmap</span>
        </h1>
        <p className="mb-4 text-slate-200">
          TypeScript is a superset of JavaScript that adds static typing.
        </p>
        <hr className="mb-2 opacity-20" />
        <p className="mb-4 text-slate-200">
          Here's a comprehensive roadmap to help you learn TypeScript effectively:
        </p>
      </div>

      {tsTopics.map(({ day, title, topics, exampleComponent }) => (
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
          path={"/roadmap/reactjs"}
          title={"React Js"}
        />
        <NavigationButton path={"/roadmap/backend"} title={"Backend"} />
      </div>
    </div>
  );
};

export default TSPage;
