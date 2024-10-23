import React, { Suspense, lazy } from "react";
import Spinner from "./Spinner/Spinner";
import NavigationButton from "./NavigationButton";
const Resources = lazy(() => import("./Resources"));
const Tips = lazy(() => import("./Tips"));

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

const jsTopics = [
  {
    day: 1,
    title: "Day 1: Introduction to JavaScript",
    topics: [
      "What is JavaScript?",
      "Setting up your environment (browser console, code editor)",
      "Basic syntax and comments",
    ],
    exampleComponent: "Variables",
  },
  {
    day: 2,
    title: "Day 2: Variables and Data Types",
    topics: [
      "Understanding variables (let, const, var)",
      "Primitive data types (string, number, boolean, null, undefined)",
    ],
    exampleComponent: "Variables",
  },
  {
    day: 3,
    title: "Day 3: Functions",
    topics: [
      "Function declarations and expressions",
      "Arrow functions",
      "Understanding scope",
    ],
    exampleComponent: "Functions",
  },
  {
    day: 4,
    title: "Day 4: DOM Manipulation",
    topics: [
      "Selecting elements",
      "Changing content and styles",
      "Creating and removing elements",
    ],
    exampleComponent: "DOMManipulation",
  },
  {
    day: 5,
    title: "Day 5: Events",
    topics: [
      "Understanding events",
      "Adding event listeners",
      "Event propagation",
    ],
    exampleComponent: "Events",
  },
  {
    day: 6,
    title: "Day 6: Arrays",
    topics: [
      "Array methods (push, pop, map, filter, reduce)",
      "Looping through arrays",
    ],
    exampleComponent: "Arrays",
  },
  {
    day: 7,
    title: "Day 7: Objects",
    topics: ["Creating and accessing objects", "Object methods and properties"],
    exampleComponent: "Objects",
  },
  {
    day: 8,
    title: "Day 8: Promises and Fetch API",
    topics: ["Understanding promises", "Working with the Fetch API"],
    exampleComponent: "Promises",
  },
  {
    day: 9,
    title: "Day 9: Async/Await",
    topics: [
      "Converting promises to async/await",
      "Error handling with try/catch",
    ],
    exampleComponent: "AsyncAwait",
  },
  {
    day: 10,
    title: "Day 10: Final Project",
    topics: [
      "Combine all concepts to build a simple application",
      "Deploying your project",
    ],
    exampleComponent: "FinalProject",
  },
];

const JsPage = () => {
  return (
    <div className="flex flex-col p-2 text-gray-100 rounded-lg shadow-lg">
      <div id="headings">
        <h1 className="mb-4 text-2xl font-semibold">
          JavaScript <span className="text-purple-700">Roadmap</span>
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
      <Tips />
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
