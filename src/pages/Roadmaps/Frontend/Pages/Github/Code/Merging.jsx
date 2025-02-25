import { useState } from "react";
import { FiClipboard } from "react-icons/fi";
import { LuCheck } from "react-icons/lu";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Merging = () => {
  const codeString = `
### How to Merge Branches in Git Using VSCode Terminal

1. **Open Your Project in VSCode**:
   - Launch VSCode and open the project folder.

2. **Open the Terminal**:
   - Go to **View > Terminal** or use the shortcut: \`Ctrl + \` (backtick).

3. **Switch to the Target Branch** (the branch you want to merge into):
   - Run:
     \`\`\`bash
     git checkout target-branch-name
     \`\`\`

4. **Merge the Branch**:
   - To merge a specific branch into the current branch, run:
     \`\`\`bash
     git merge branch-to-merge-name
     \`\`\`

5. **Resolve Conflicts** (if any):
   - If there are conflicts, resolve them manually in the files indicated by Git. After resolving, stage the changes:
     \`\`\`bash
     git add .
     \`\`\`
   - Then, complete the merge with:
     \`\`\`bash
     git commit
     \`\`\`
`;

  const [copy, setCopy] = useState(false);

  return (
    <div className="max-w-2xl min-w-[50rem] overflow-hidden rounded-md ml-1 my-2">
      <div className="flex items-center justify-between bg-[#3a404d] px-4 py-1 text-white font-medium text-[15px]">
        <p className="">Merge Instructions</p>
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
            Copy Merge Info
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

export default Merging;
