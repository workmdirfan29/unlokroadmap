import { useState } from "react";
import { FiClipboard } from "react-icons/fi";
import { LuCheck } from "react-icons/lu";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const FinalProject = () => {
    const codeString = `// Final Project: Simple Shopping List with MongoDB and Express
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json()); // Middleware to parse JSON bodies

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/shoppinglist', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('Connected to MongoDB!'))
.catch(err => console.error('Could not connect to MongoDB:', err));

// Define a schema
const itemSchema = new mongoose.Schema({
    name: String,
    quantity: Number,
});

// Create a model
const Item = mongoose.model('Item', itemSchema);

// API route to get all items
app.get('/api/items', async (req, res) => {
    const items = await Item.find();
    res.send(items);
});

// API route to create a new item
app.post('/api/items', async (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        quantity: req.body.quantity,
    });
    await newItem.save();
    res.status(201).send(newItem);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(\`Server running on port \${PORT}\`);
});`;

    const [copy, setCopy] = useState(false);

    return (
        <div className="max-w-2xl min-w-[50rem] overflow-hidden rounded-md ml-1 my-2">
            <div className="flex items-center justify-between bg-[#3a404d] px-4 py-1 text-white font-medium text-[15px]">
                <p className="">Final Project: Shopping List</p>
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

export default FinalProject;
