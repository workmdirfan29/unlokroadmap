import React, { Suspense, lazy, memo } from "react";
import NavigationButton from "../../../../../components/Button/NavigationButton"
import Spinner from "../../../../../Spinner";
import jsTopics from "./jsTopics";

// Lazy load components
const Resources = lazy(() => import("./Resources"));
const Tips = lazy(() => import("../../../Tips/Tips"));

const components = {
  Variables: lazy(() => import("./Code/Variables")),
  Functions: lazy(() => import("./Code/Functions")),
  DOMManipulation: lazy(() => import("./Code/DOMManipulation")),
  Events: lazy(() => import("./Code/Events")),
  Arrays: lazy(() => import("./Code/Arrays")),
  Objects: lazy(() => import("./Code/Objects")),
  Promises: lazy(() => import("./Code/Promises")),
  AsyncAwait: lazy(() => import("./Code/AsyncAwait")),
  ES6Features: lazy(() => import("./Code/ES6Features")),
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
const JsPage = () => {
  return (
    <div className="flex flex-col p-2 text-gray-100 rounded-lg shadow-lg">
      <div id="headings">
        <h1 className="mb-4 text-2xl font-semibold">
          JavaScript <span className="text-orange-400">Roadmap</span>
        </h1>
        <p className="mb-4 text-slate-200">
          JavaScript is a versatile programming language used for web
          development.
        </p>
        <hr className="mb-2 opacity-20" />
        <p className="mb-4 text-slate-200">
          Here's a comprehensive 10-day JavaScript roadmap, complete with
          resources to help you learn effectively:
        </p>
      </div>

      {jsTopics.map(({ day, title, topics, exampleComponent }) => (
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
          path={"/roadmap/css"}
          title={"CSS"}
        />
        <NavigationButton path={"/roadmap/github"} title={"Github"} />
      </div>
    </div>
  );
};

export default JsPage;
