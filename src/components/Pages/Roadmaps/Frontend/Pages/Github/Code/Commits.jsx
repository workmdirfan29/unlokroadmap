import { useState } from "react";
import { FiClipboard } from "react-icons/fi";
import { LuCheck } from "react-icons/lu";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Commits = () => {
  const codeString = `
### How to Make a Commit in Git Using VSCode Terminal

1. **Open Your Project in VSCode**:
   - Launch VSCode and open the project folder.

2. **Open the Terminal**:
   - Go to **View > Terminal** or use the shortcut: \`Ctrl + \` (backtick).

3. **Check the Current Status**:
   - Run:
     \`\`\`bash
     git status
     \`\`\`

4. **Stage Changes**:
   - To stage specific files:
     \`\`\`bash
     git add path/to/your/file
     \`\`\`
   - To stage all changes:
     \`\`\`bash
     git add .
     \`\`\`

5. **Commit Your Changes**:
   - Use:
     \`\`\`bash
     git commit -m "Your commit message here"
     \`\`\`

6. **Push Changes to Remote Repository (Optional)**:
   - Run:
     \`\`\`bash
     git push origin main
     \`\`\`
`;

  const [copy, setCopy] = useState(false);

  return (
    <div className="max-w-2xl min-w-[50rem] overflow-hidden rounded-md ml-1 my-2">
      <div className="flex items-center justify-between bg-[#3a404d] px-4 py-1 text-white font-medium text-[15px]">
        <p className="">Commit Instructions</p>
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

export default Commits;
