import { useState } from "react";
import { FiClipboard } from "react-icons/fi";
import { LuCheck } from "react-icons/lu";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Branching = () => {
  const codeString = `
### How to Manage Branches in Git Using VSCode Terminal

1. **Open Your Project in VSCode**:
   - Launch VSCode and open the project folder.

2. **Open the Terminal**:
   - Go to **View > Terminal** or use the shortcut: \`Ctrl + \` (backtick).

3. **Check Current Branch**:
   - Run:
     \`\`\`bash
     git branch
     \`\`\`

4. **Create a New Branch**:
   - Use:
     \`\`\`bash
     git checkout -b new-branch-name
     \`\`\`

5. **Switch to an Existing Branch**:
   - Run:
     \`\`\`bash
     git checkout existing-branch-name
     \`\`\`

6. **List All Branches**:
   - Use:
     \`\`\`bash
     git branch
     \`\`\`

7. **Delete a Branch** (Make sure you are not on that branch):
   - Run:
     \`\`\`bash
     git branch -d branch-name
     \`\`\`
`;

  const [copy, setCopy] = useState(false);

  return (
    <div className="max-w-2xl min-w-[50rem] overflow-hidden rounded-md ml-1 my-2">
      <div className="flex items-center justify-between bg-[#3a404d] px-4 py-1 text-white font-medium text-[15px]">
        <p className="">Branch Management Instructions</p>
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
            Copy Instructions
          </button>
        )}
      </div>
      <SyntaxHighlighter
        language="markdown"
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

export default Branching;
