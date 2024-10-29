import { useState } from "react";
import { FiClipboard } from "react-icons/fi";
import { LuCheck } from "react-icons/lu";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const BackupRestore = () => {
    const codeString = `// Backup and Restore MongoDB
// Backup using mongodump
// Command: mongodump --db mydatabase --out /path/to/backup

// Restore using mongorestore
// Command: mongorestore --db mydatabase /path/to/backup/mydatabase

// Backup within Node.js using exec
const { exec } = require('child_process');

const backupDatabase = () => {
    exec('mongodump --db mydatabase --out /path/to/backup', (err, stdout, stderr) => {
        if (err) {
            console.error('Error during backup:', err);
            return;
        }
        console.log('Backup completed:', stdout);
    });
};

// Restore a database
const restoreDatabase = () => {
    exec('mongorestore --db mydatabase /path/to/backup/mydatabase', (err, stdout, stderr) => {
        if (err) {
            console.error('Error during restore:', err);
            return;
        }
        console.log('Restore completed:', stdout);
    });
};`;

    const [copy, setCopy] = useState(false);

    return (
        <div className="max-w-2xl min-w-[50rem] overflow-hidden rounded-md ml-1 my-2">
            <div className="flex items-center justify-between bg-[#3a404d] px-4 py-1 text-white font-medium text-[15px]">
                <p className="">Backup and Restore</p>
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

export default BackupRestore;
