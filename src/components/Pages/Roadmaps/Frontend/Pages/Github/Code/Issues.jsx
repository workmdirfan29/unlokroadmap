import { useState } from "react";
import { FiClipboard } from "react-icons/fi";
import { LuCheck } from "react-icons/lu";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Issues = () => {
  const codeString = `
### How to Manage Issues in Git Using VSCode Terminal and GitHub

#### Using VSCode Terminal

1. **Open Your Project in VSCode**:
   - Launch VSCode and navigate to your project directory.

2. **Open the Terminal**:
   - Go to **View > Terminal** or press \`Ctrl + \` (backtick).

3. **Check Issues on GitHub**:
   - Issues are typically managed directly on GitHub. You can view and manage issues in the **"Issues"** tab of your repository.

4. **Create a New Issue**:
   - You can create a new issue on GitHub via the web interface. Alternatively, if you're using the GitHub CLI (if installed), you can create an issue using:
     \`\`\`bash
     gh issue create --title "Issue Title" --body "Description of the issue"
     \`\`\`

5. **View Existing Issues**:
   - To view existing issues, use the GitHub CLI:
     \`\`\`bash
     gh issue list
     \`\`\`

6. **Close an Issue**:
   - To close an issue via the GitHub CLI, use:
     \`\`\`bash
     gh issue close ISSUE_NUMBER
     \`\`\`

#### Using GitHub Web Interface

1. **Open Your Repository on GitHub**:
   - Go to your repository on GitHub.

2. **Navigate to the Issues Tab**:
   - Click on the **"Issues"** tab located at the top of the repository page.

3. **Create a New Issue**:
   - Click on the **"New issue"** button. Fill in the title and description, then click **"Submit new issue"**.

4. **View Existing Issues**:
   - You will see a list of existing issues. Click on any issue to view details and comments.

5. **Close an Issue**:
   - To close an issue, open the issue and click the **"Close issue"** button at the bottom of the issue discussion.
`;

  const [copy, setCopy] = useState(false);

  return (
    <div className="max-w-2xl min-w-[50rem] overflow-hidden rounded-md ml-1 my-2">
      <div className="flex items-center justify-between bg-[#3a404d] px-4 py-1 text-white font-medium text-[15px]">
        <p className="">Issue Management Instructions</p>
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

export default Issues;
