import { useState } from "react";
import { FiClipboard } from "react-icons/fi";
import { LuCheck } from "react-icons/lu";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Collaboration = () => {
  const codeString = `
### How to Collaborate on GitHub Using VSCode Terminal and GitHub Web Interface

#### Using VSCode Terminal

1. **Clone the Repository**:
   - To collaborate on a project, first clone the repository to your local machine using:
     \`\`\`bash
     git clone REPO_URL
     \`\`\`

2. **Create a New Branch**:
   - Before making changes, create a new branch for your work:
     \`\`\`bash
     git checkout -b feature-branch-name
     \`\`\`

3. **Make Changes**:
   - Edit the files in your favorite code editor (e.g., VSCode).

4. **Stage Your Changes**:
   - Once you've made your changes, stage them:
     \`\`\`bash
     git add .
     \`\`\`

5. **Commit Your Changes**:
   - Commit your changes with a descriptive message:
     \`\`\`bash
     git commit -m "Description of the changes made"
     \`\`\`

6. **Push Your Changes**:
   - Push your branch to the remote repository:
     \`\`\`bash
     git push origin feature-branch-name
     \`\`\`

7. **Create a Pull Request**:
   - After pushing, go to GitHub to create a Pull Request (PR) for your changes.

#### Using GitHub Web Interface

1. **Fork the Repository** (if you don't have write access):
   - Navigate to the repository on GitHub and click the **"Fork"** button at the top right.

2. **Clone Your Forked Repository**:
   - Use the terminal to clone your forked repository:
     \`\`\`bash
     git clone YOUR_FORK_URL
     \`\`\`

3. **Create a New Branch**:
   - Create a new branch for your feature or bug fix:
     \`\`\`bash
     git checkout -b feature-branch-name
     \`\`\`

4. **Make Changes and Commit**:
   - Edit files, then stage and commit your changes using the commands above.

5. **Push Your Changes**:
   - Push your branch to your forked repository:
     \`\`\`bash
     git push origin feature-branch-name
     \`\`\`

6. **Open a Pull Request**:
   - Go to your fork on GitHub, and you'll see a prompt to create a Pull Request for the branch you just pushed. Click **"Compare & pull request"**, fill in the details, and submit it.

### Collaboration Best Practices
- Always communicate with your team about the changes you're making.
- Regularly pull updates from the main repository to stay up to date.
- Review Pull Requests from teammates and provide constructive feedback.

  `;

  const [copy, setCopy] = useState(false);

  return (
    <div className="max-w-2xl min-w-[50rem] overflow-hidden rounded-md ml-1 my-2">
      <div className="flex items-center justify-between bg-[#3a404d] px-4 py-1 text-white font-medium text-[15px]">
        <p className="">Collaboration Guide</p>
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
            Copy Collaboration Guide
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

export default Collaboration;
