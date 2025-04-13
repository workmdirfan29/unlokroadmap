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
                            className="text-orange-400 hover:underline"
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
            description: "In-depth tutorials on Express.js and related technologies.",
        },
        {
            name: "Traversy Media",
            link: "https://www.youtube.com/c/TraversyMedia",
            description: "Offers tutorials on Express.js and full-stack development.",
        },
        {
            name: "The Net Ninja",
            link: "https://www.youtube.com/c/TheNetNinja",
            description: "Comprehensive series on Express.js and building APIs.",
        },
        {
            name: "Programming with Mosh",
            link: "https://www.youtube.com/c/programmingwithmosh",
            description: "Provides solid introductions to Express.js and its ecosystem.",
        },
        {
            name: "Web Dev Simplified",
            link: "https://www.youtube.com/c/WebDevSimplified",
            description: "Tutorials on building web applications using Express.js.",
        },
    ];

    const documentation = [
        {
            name: "Express.js Official Documentation",
            link: "https://expressjs.com/",
            description: "The official documentation for learning and reference.",
        },
        {
            name: "MDN Web Docs - Express.js",
            link: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
            description: "Comprehensive resources for learning Express.js.",
        },
        {
            name: "Node.js Best Practices",
            link: "https://github.com/goldbergyoni/nodebestpractices",
            description: "A collection of best practices that includes Express.js usage.",
        },
    ];

    const interactivePlatforms = [
        {
            name: "NodeSchool",
            link: "https://nodeschool.io/",
            description: "Open source workshops that teach web software skills, including Express.js.",
        },
        {
            name: "Codecademy",
            link: "https://www.codecademy.com/learn/learn-express",
            description: "Interactive lessons specifically focused on Express.js.",
        },
        {
            name: "freeCodeCamp",
            link: "https://www.freecodecamp.org/learn/back-end-development-and-apis/",
            description: "Includes sections for learning Express.js along with full-stack projects.",
        },
    ];

    const books = [
        "Express in Action by Evan Hahn",
        "Web Development with Node and Express by Ethan Brown",
        "Learning Node.js Development by Andrew Mead (covers Express.js)",
        "Node.js Design Patterns by Mario Casciaro and Luciano Mammino (includes Express patterns)",
    ];

    const tools = [
        {
            name: "Postman",
            link: "https://www.postman.com/",
            description: "An API development environment for testing your Express APIs.",
        },
        {
            name: "Insomnia",
            link: "https://insomnia.rest/",
            description: "A REST client for testing and debugging APIs.",
        },
    ];

    const forums = [
        {
            name: "Stack Overflow",
            link: "https://stackoverflow.com/questions/tagged/express",
            description: "Ask questions and find answers about Express.js.",
        },
        {
            name: "Express.js Discord",
            link: "https://discord.gg/expressjs",
            description: "Join the Express.js community on Discord to discuss and ask questions.",
        },
        {
            name: "Reddit - Express.js",
            link: "https://www.reddit.com/r/expressjs/",
            description: "A subreddit for discussing all things Express.js.",
        },
    ];

    const practiceProjects = [
        "Create a RESTful API using Express.js and a MongoDB database.",
        "Build a task management application using Express.js.",
        "Develop a blog application with user authentication using Express.js.",
        "Implement a simple chat application using Express.js and WebSockets.",
    ];

    return (
        <div className="max-w-5xl p-5 mx-auto">
            <h1 className="mb-6 text-3xl font-bold text-center">
                Learning Express.js Resources
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
