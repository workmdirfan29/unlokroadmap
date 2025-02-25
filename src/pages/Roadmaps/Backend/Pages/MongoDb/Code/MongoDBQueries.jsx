import { useState } from "react";
import { FiClipboard } from "react-icons/fi";
import { LuCheck } from "react-icons/lu";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const MongoDBQueries = () => {
    const codeString = `// MongoDB Queries with Mongoose
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

const itemSchema = new mongoose.Schema({ name: String, price: Number });
const Item = mongoose.model('Item', itemSchema);

// Find all items
const findAllItems = async () => {
    const items = await Item.find();
    console.log('All items:', items);
};

// Find a single item
const findItemByName = async (name) => {
    const item = await Item.findOne({ name });
    console.log('Found item:', item);
};

// Find items with a price filter
const findItemsByPrice = async (minPrice) => {
    const items = await Item.find({ price: { $gte: minPrice } });
    console.log('Items priced above:', minPrice, items);
};`;

    const [copy, setCopy] = useState(false);

    return (
        <div className="max-w-2xl min-w-[50rem] overflow-hidden rounded-md ml-1 my-2">
            <div className="flex items-center justify-between bg-[#3a404d] px-4 py-1 text-white font-medium text-[15px]">
                <p className="">MongoDB Queries</p>
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

export default MongoDBQueries;
