import { useState } from "react";
import { FiClipboard } from "react-icons/fi";
import { LuCheck } from "react-icons/lu";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const PerformanceTuning = () => {
    const codeString = `// Performance Tuning in MongoDB
// 1. Use indexes for faster query performance
// 2. Optimize queries to retrieve only necessary data

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

const itemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: { type: String, index: true } // Example of adding an index
});

const Item = mongoose.model('Item', itemSchema);

// Optimize a query using indexes
const findItemsByCategory = async (category) => {
    const items = await Item.find({ category }).select('name price');
    return items;
};`;

    const [copy, setCopy] = useState(false);

    return (
        <div className="max-w-2xl min-w-[50rem] overflow-hidden rounded-md ml-1 my-2">
            <div className="flex items-center justify-between bg-[#3a404d] px-4 py-1 text-white font-medium text-[15px]">
                <p className="">Performance Tuning</p>
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

export default PerformanceTuning;
