import { useState } from "react";
import { FiClipboard } from "react-icons/fi";
import { LuCheck } from "react-icons/lu";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const PullRequests = () => {
  const codeString = `
### How to Create a Pull Request in Git Using VSCode Terminal

1. **Open Your Project in VSCode**:
   - Launch VSCode and navigate to your project directory.

2. **Open the Terminal**:
   - Go to **View > Terminal** or press \`Ctrl + \` (backtick).

3. **Check Out the Feature Branch**:
   - Make sure you are on the branch that contains your changes:
     \`\`\`bash
     git checkout feature-branch-name
     \`\`\`

4. **Push Your Changes**:
   - If you haven't already pushed your feature branch, do so now:
     \`\`\`bash
     git push origin feature-branch-name
     \`\`\`

5. **Create a Pull Request**:
   - After pushing, you can create a pull request via GitHub. Typically, you would go to your repository on GitHub and click the **"Compare & pull request"** button.
   - Alternatively, you can use the GitHub CLI (if installed):
     \`\`\`bash
     gh pr create --base target-branch-name --head feature-branch-name --title "Your Pull Request Title" --body "Description of the changes"
     \`\`\`

6. **Review and Merge**:
   - Once the pull request is created, you or other collaborators can review the changes, discuss, and eventually merge the pull request.
`;

  const [copy, setCopy] = useState(false);

  return (
    <div className="max-w-2xl min-w-[50rem] overflow-hidden rounded-md ml-1 my-2">
      <div className="flex items-center justify-between bg-[#3a404d] px-4 py-1 text-white font-medium text-[15px]">
        <p className="">Pull Request Instructions</p>
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
            Copy Pull Request Info
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

export default PullRequests;
