import React from "react";

const tipsData = [
    {
        title: "Practice",
        description: "Work on small coding challenges to reinforce your learning.",
    },
    {
        title: "Explore",
        description:
            "Utilize resources like MDN Web Docs for detailed explanations.",
    },
    {
        title: "Build Projects",
        description: "Apply your knowledge by creating small projects.",
    },
];

const Tips = () => {
    return (
        <div id="success">
            <h3 className="mb-4 text-3xl text-indigo-600 font-semibold text-center">
                Tips for Success:
            </h3>
            <ul className="mb-1 list-disc md:ml-5">
                {tipsData.map((tip, index) => (
                    <li key={index} className="mb-2">
                        <b>{tip.title}:</b> {tip.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tips;
