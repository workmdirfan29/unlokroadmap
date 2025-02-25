import React from "react";

const ResourceSection = ({ title, items }) => (
    <div className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">{title}</h2>
        <ul className="space-y-2 list-disc list-inside">
            {items.map((item, index) => (
                <li key={index}>
                    {item.link ? (
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            {item.name}
                        </a>
                    ) : (
                        item.name
                    )}{" "}
                    {item.description}
                </li>
            ))}
        </ul>
    </div>
);

const Resources = () => {
    const youtubeChannels = [
        {
            name: "Academind",
            link: "https://www.youtube.com/c/Academind",
            description: "In-depth tutorials on MongoDB and its integration with Node.js.",
        },
        {
            name: "Traversy Media",
            link: "https://www.youtube.com/c/TraversyMedia",
            description: "Offers tutorials on MongoDB and full-stack development.",
        },
        {
            name: "The Net Ninja",
            link: "https://www.youtube.com/c/TheNetNinja",
            description: "Comprehensive series on MongoDB and Mongoose.",
        },
        {
            name: "MongoDB University",
            link: "https://university.mongodb.com/",
            description: "Free courses from MongoDB on various topics.",
        },
    ];

    const documentation = [
        {
            name: "MongoDB Official Documentation",
            link: "https://docs.mongodb.com/",
            description: "The official documentation for learning and reference.",
        },
        {
            name: "MongoDB University",
            link: "https://university.mongodb.com/",
            description: "Free online courses from MongoDB on various topics.",
        },
        {
            name: "Mongoose Documentation",
            link: "https://mongoosejs.com/docs/index.html",
            description: "Documentation for Mongoose, the MongoDB ODM for Node.js.",
        },
    ];

    const interactivePlatforms = [
        {
            name: "MongoDB Atlas",
            link: "https://www.mongodb.com/cloud/atlas",
            description: "Cloud database service that allows you to practice MongoDB.",
        },
        {
            name: "Codecademy",
            link: "https://www.codecademy.com/learn/learn-mongodb",
            description: "Interactive lessons on MongoDB basics and applications.",
        },
        {
            name: "freeCodeCamp",
            link: "https://www.freecodecamp.org/learn/back-end-development-and-apis/",
            description: "Includes sections for learning MongoDB along with full-stack projects.",
        },
    ];

    const books = [
        "MongoDB: The Definitive Guide by Shannon Bradshaw and Eoin O'Carroll",
        "Learning MongoDB by Jeremy Nelson",
        "MongoDB in Action by Kyle Banker",
        "The Little MongoDB Book by Karl Seguin",
    ];

    const tools = [
        {
            name: "MongoDB Compass",
            link: "https://www.mongodb.com/try/download/compass",
            description: "Official GUI for MongoDB that helps visualize and manage data.",
        },
        {
            name: "Postman",
            link: "https://www.postman.com/",
            description: "An API development environment for testing your MongoDB APIs.",
        },
    ];

    const forums = [
        {
            name: "Stack Overflow",
            link: "https://stackoverflow.com/questions/tagged/mongodb",
            description: "Ask questions and find answers about MongoDB.",
        },
        {
            name: "MongoDB Community Forums",
            link: "https://developer.mongodb.com/community/forums/",
            description: "Join the MongoDB community to discuss and ask questions.",
        },
        {
            name: "Reddit - MongoDB",
            link: "https://www.reddit.com/r/mongodb/",
            description: "A subreddit for discussing all things MongoDB.",
        },
    ];

    const practiceProjects = [
        "Create a simple CRUD application using MongoDB and Express.",
        "Build a blog application that uses MongoDB for storing posts.",
        "Develop an e-commerce application with a MongoDB backend.",
        "Implement a chat application using MongoDB and a real-time framework.",
    ];

    return (
        <div className="max-w-5xl p-5 mx-auto">
            <h1 className="mb-6 text-3xl font-bold text-center">
                Learning MongoDB Resources
            </h1>

            <ResourceSection title="YouTube Channels" items={youtubeChannels} />
            <ResourceSection
                title="Online Documentation and Tutorials"
                items={documentation}
            />
            <ResourceSection
                title="Interactive Learning Platforms"
                items={interactivePlatforms}
            />
            <ResourceSection
                title="Books"
                items={books.map((book) => ({ name: book }))}
            />
            <ResourceSection title="Tools and Editors" items={tools} />
            <ResourceSection title="Forums and Community" items={forums} />

            <div className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">Practice Projects</h2>
                <ul className="space-y-2 list-disc list-inside">
                    {practiceProjects.map((project, index) => (
                        <li key={index}>{project}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Resources;
