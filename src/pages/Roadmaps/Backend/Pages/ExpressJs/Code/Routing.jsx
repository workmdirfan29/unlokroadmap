import { useState } from "react";
import { FiClipboard } from "react-icons/fi";
import { LuCheck } from "react-icons/lu";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Routing = () => {
    const codeString = `// Basic Routing in Express.js
const express = require('express');
const app = express();

// Route for the home page
app.get('/', (req, res) => {
    res.send('Home Page');
});

// Route for the about page
app.get('/about', (req, res) => {
    res.send('About Page');
});

// Route with parameters
app.get('/users/:id', (req, res) => {
    res.send(\`User ID: \${req.params.id}\`);
});

// Start the server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});`;

    const [copy, setCopy] = useState(false);

    return (
        <div className="max-w-2xl min-w-[50rem] overflow-hidden rounded-md ml-1 my-2">
            <div className="flex items-center justify-between bg-[#3a404d] px-4 py-1 text-white font-medium text-[15px]">
                <p className="">routing</p>
                {copy ? (
                    <button className="inline-flex items-center gap-1 py-1">
                        <LuCheck size={15} />
                        Copied!
                    </button>
                ) : (
                    <button
                        className="inline-flex items-center gap-1 py-1"
                        onClick={() => {
                            navigator.clipboard.writeText(codeString);
                            setCopy(true);
                            setTimeout(() => {
                                setCopy(false);
                            }, 2000);
                        }}
                    >
                        <FiClipboard size={16} />
                        Copy Code
                    </button>
                )}
            </div>
            <SyntaxHighlighter
                language="javascript"
                style={atomOneDark}
                customStyle={{
                    padding: "15px",
                }}
                wrapLongLines={true}
            >
                {codeString}
            </SyntaxHighlighter>
        </div>
    );
};

export default Routing;
