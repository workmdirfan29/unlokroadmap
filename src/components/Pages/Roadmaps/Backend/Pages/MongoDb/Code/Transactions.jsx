import { useState } from "react";
import { FiClipboard } from "react-icons/fi";
import { LuCheck } from "react-icons/lu";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Transactions = () => {
    const codeString = `// Transactions in MongoDB
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

const session = mongoose.startSession();

const itemSchema = new mongoose.Schema({ name: String, price: Number });
const Item = mongoose.model('Item', itemSchema);

const runTransaction = async () => {
    session.startTransaction();
    try {
        const item1 = new Item({ name: 'Grapes', price: 1.5 });
        await item1.save({ session });

        const item2 = new Item({ name: 'Orange', price: 0.8 });
        await item2.save({ session });

        await session.commitTransaction();
        console.log('Transaction committed.');
    } catch (error) {
        await session.abortTransaction();
        console.error('Transaction aborted:', error);
    } finally {
        session.endSession();
    }
};`;

    const [copy, setCopy] = useState(false);

    return (
        <div className="max-w-2xl min-w-[50rem] overflow-hidden rounded-md ml-1 my-2">
            <div className="flex items-center justify-between bg-[#3a404d] px-4 py-1 text-white font-medium text-[15px]">
                <p className="">Transactions</p>
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

export default Transactions;
