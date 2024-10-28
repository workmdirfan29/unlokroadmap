import { useState } from "react";
import { FiClipboard } from "react-icons/fi";
import { LuCheck } from "react-icons/lu";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Authentication = () => {
    const codeString = `// Basic Authentication in Express.js
const express = require('express');
const app = express();
app.use(express.json());

const users = [{ username: 'user', password: 'pass' }];

// User login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.send('Login successful!');
    } else {
        res.status(401).send('Unauthorized');
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});`;

    const [copy, setCopy] = useState(false);

    return (
        <div className="max-w-2xl min-w-[50rem] overflow-hidden rounded-md ml-1 my-2">
            <div className="flex items-center justify-between bg-[#3a404d] px-4 py-1 text-white font-medium text-[15px]">
                <p className="">authentication</p>
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

export default Authentication;
