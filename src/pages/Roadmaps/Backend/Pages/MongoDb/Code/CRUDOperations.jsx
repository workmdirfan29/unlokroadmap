import { useState } from "react";
import { FiClipboard } from "react-icons/fi";
import { LuCheck } from "react-icons/lu";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CRUDOperations = () => {
    const codeString = `// CRUD Operations with Mongoose
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema
const itemSchema = new mongoose.Schema({
    name: String,
    price: Number,
});

// Create a model
const Item = mongoose.model('Item', itemSchema);

// Create a new item
const createItem = async () => {
    const newItem = new Item({ name: 'Banana', price: 0.3 });
    await newItem.save();
    console.log('Item created!');
};

// Read items
const readItems = async () => {
    const items = await Item.find();
    console.log('Items:', items);
};

// Update an item
const updateItem = async (id) => {
    await Item.updateOne({ _id: id }, { price: 0.4 });
    console.log('Item updated!');
};

// Delete an item
const deleteItem = async (id) => {
    await Item.deleteOne({ _id: id });
    console.log('Item deleted!');
};`;

    const [copy, setCopy] = useState(false);

    return (
        <div className="max-w-2xl min-w-[50rem] overflow-hidden rounded-md ml-1 my-2">
            <div className="flex items-center justify-between bg-[#3a404d] px-4 py-1 text-white font-medium text-[15px]">
                <p className="">CRUD Operations</p>
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

export default CRUDOperations;

