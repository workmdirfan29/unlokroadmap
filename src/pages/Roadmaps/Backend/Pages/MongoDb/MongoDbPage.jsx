import React, { Suspense, lazy, memo } from "react";
import NavigationButton from "../../../../../components/Button/NavigationButton"
import Spinner from "../../../../../Spinner";
import mongoDbTopics from "./mongoDbTopics";

// Lazy load components
const Resources = lazy(() => import("./Resources"));
const Tips = lazy(() => import("../../../Tips/Tips"));

const components = {
    Introduction: lazy(() => import("./Code/Introduction")),
    CRUDOperations: lazy(() => import("./Code/CRUDOperations")),
    MongoDBQueries: lazy(() => import("./Code/MongoDBQueries")),
    Indexing: lazy(() => import("./Code/Indexing")),
    AggregationFramework: lazy(() => import("./Code/AggregationFramework")),
    DataModeling: lazy(() => import("./Code/DataModeling")),
    MongoDBWithNode: lazy(() => import("./Code/MongoDBWithNode")),
    Transactions: lazy(() => import("./Code/Transactions")),
    DataValidation: lazy(() => import("./Code/DataValidation")),
    Security: lazy(() => import("./Code/Security")),
    BackupRestore: lazy(() => import("./Code/BackupRestore")),
    Scaling: lazy(() => import("./Code/Scaling")),
    PerformanceTuning: lazy(() => import("./Code/PerformanceTuning")),
    Integration: lazy(() => import("./Code/Integration")),
    RealTimeData: lazy(() => import("./Code/RealTimeData")),
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
const MongoDbPage = () => {
    return (
        <div className="flex flex-col p-2 text-gray-100 rounded-lg shadow-lg">
            <div id="headings">
                <h1 className="mb-4 text-2xl font-semibold">
                    MongoDB <span className="text-orange-400">Roadmap</span>
                </h1>
                <p className="mb-4 text-slate-200">
                    MongoDB is a NoSQL database designed for modern applications.
                </p>
                <hr className="mb-2 opacity-20" />
                <p className="mb-4 text-slate-200">
                    Here's a comprehensive roadmap to help you learn MongoDB effectively:
                </p>
            </div>

            {mongoDbTopics.map(({ day, title, topics, exampleComponent }) => (
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
                    path={"/roadmap/express-js"}
                    title={"Express.js"}
                />
                <NavigationButton path={"/roadmap/postgresql"} title={"PostgreSQL"} />
            </div>
        </div>
    );
};

export default MongoDbPage;
