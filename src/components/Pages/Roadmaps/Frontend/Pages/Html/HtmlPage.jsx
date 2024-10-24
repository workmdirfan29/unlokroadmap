import React, { Suspense, lazy, memo } from "react";
import NavigationButton from "../../../../../Button/NavigationButton";
import Spinner from "../../../../../Spinner/Spinner";
import htmlTopics from "./htmlTopics";

// Lazy load components
const Resources = lazy(() => import("./Resources"));

const components = {
  BoilerPlate: lazy(() => import("./Code/BoilerPlate")),
  Text: lazy(() => import("./Code/Text")),
  Lists: lazy(() => import("./Code/Lists")),
  LinkImages: lazy(() => import("./Code/LinkImages")),
  TableCode: lazy(() => import("./Code/TableCode")),
  FormCode: lazy(() => import("./Code/FormCode")),
  Semantic: lazy(() => import("./Code/Semantic")),
  Multimedia: lazy(() => import("./Code/Multimedia")),
  Entities: lazy(() => import("./Code/Entities")),
  Everything: lazy(() => import("./Code/Everything")),
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
const HtmlPage = () => {
  return (
    <div className="flex flex-col p-2 text-gray-100 rounded-lg shadow-lg">
      <div id="headings">
        <h1 className="mb-4 text-2xl font-semibold">
          HTML <span className="text-purple-700">Roadmap</span>
        </h1>
        <p className="mb-4 text-slate-200">
          HTML (HyperText Markup Language) is the standard language used to
          create and structure content on the web.
        </p>
        <hr className="mb-2 opacity-20" />
        <p className="mb-4 text-slate-200">
          Here's a comprehensive 10-day HTML roadmap, complete with resources to
          help you learn effectively:
        </p>
      </div>

      {htmlTopics.map(({ day, title, topics, exampleComponent }) => (
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
      <div id="navigate" className="flex justify-end my-2">
        <NavigationButton path={"/roadmap/css"} title={"CSS"} />
      </div>
    </div>
  );
};

export default HtmlPage;
