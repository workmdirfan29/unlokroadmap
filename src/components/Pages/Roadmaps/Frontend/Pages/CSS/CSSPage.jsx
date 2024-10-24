import React, { Suspense, lazy, memo } from "react";
import { cssTopics } from "./cssTopics"; // Assuming cssTopics is defined in another file
import Resources from "./Resources";
import NavigationButton from "../../../../../Button/NavigationButton";
import Spinner from "../../../../../Spinner/Spinner";

// Lazy load CSS components
const components = {
  BoilerPlate: lazy(() => import("./Code/BoilerPlate")),
  Selectors: lazy(() => import("./Code/Selectors")),
  Combinators: lazy(() => import("./Code/Combinators")),
  PseudoClasses: lazy(() => import("./Code/PseudoClasses")),
  PseudoElements: lazy(() => import("./Code/PseudoElements")),
  BoxModel: lazy(() => import("./Code/BoxModel")),
  DisplayProperty: lazy(() => import("./Code/DisplayProperty")),
  Flexbox: lazy(() => import("./Code/Flexbox")),
  GridLayout: lazy(() => import("./Code/GridLayout")),
  ResponsiveDesign: lazy(() => import("./Code/ResponsiveDesign")),
};

// Memoized DaySection component to prevent unnecessary re-renders
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
const CssPage = () => {
  return (
    <div className="flex flex-col p-2 text-gray-100 rounded-lg shadow-lg">
      <div id="headings">
        <h1 className="mb-4 text-2xl font-semibold">
          CSS <span className="text-purple-700">Roadmap</span>
        </h1>
        <p className="mb-4 text-slate-200">
          CSS (Cascading Style Sheets) is used to style and layout web pages.
        </p>
        <hr className="mb-2 opacity-20" />
        <p className="mb-4 text-slate-200">
          Here's a comprehensive 10-day CSS roadmap to help you learn
          effectively:
        </p>
      </div>

      {cssTopics.map(({ day, title, topics, exampleComponent }) => (
        <DaySection
          day={day}
          title={title}
          topics={topics}
          exampleComponent={exampleComponent}
          key={day} // Ensure key is unique for each DaySection
        />
      ))}

      <div className="resources">
        <Suspense fallback={<Spinner />}>
          <Resources />
        </Suspense>
      </div>

      <hr className="mb-4 opacity-20" />
      <div id="success">
        <h3 className="mb-4 text-3xl font-semibold text-center">
          Tips for Success:
        </h3>
        <ul className="mb-1 list-disc md:ml-5">
          <li className="mb-2">
            <b>Practice:</b> After completing the examples, try modifying them
            or creating your own variations.
          </li>
          <li className="mb-2">
            <b>Explore:</b> Use resources like MDN Web Docs for more in-depth
            explanations.
          </li>
          <li className="mb-2">
            <b>Build Projects:</b> After the 10 days, start building small
            projects to apply what you've learned.
          </li>
        </ul>
      </div>
      <div id="navigate" className="flex justify-between mt-4 mb-2">
        <NavigationButton
          direction="left"
          path={"/roadmap/html"}
          title={"Html"}
        />
        <NavigationButton path={"/roadmap/javascript"} title={"Js"} />
      </div>
    </div>
  );
};

export default CssPage;
