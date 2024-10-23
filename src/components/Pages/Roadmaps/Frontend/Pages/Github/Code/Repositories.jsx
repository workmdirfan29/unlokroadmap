import { useState } from "react";
import { FiClipboard } from "react-icons/fi";
import { LuCheck } from "react-icons/lu";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Repositories = () => {
  const codeString = `# How to Create a GitHub Repository

1. **Sign in to GitHub**:
   Go to [GitHub](https://github.com) and sign in to your account.

2. **Create a New Repository**:
   - Click on the "+" icon in the upper right corner and select "New repository".

3. **Fill Out Repository Details**:
   - **Repository Name**: Enter a name for your repository.
   - **Description** (optional): Add a brief description of your project.
   - **Visibility**: Choose between Public or Private.

4. **Initialize the Repository**:
   - Optionally, check "Initialize this repository with a README" if you want to include a README file.

5. **Create Repository**:
   - Click on the "Create repository" button to finalize the creation of your repository.

6. **Clone the Repository**:
   - Copy the URL provided and use it to clone the repository locally using:
     \`git clone <repository-url>\`

7. **Add Your Code**:
   - Add your project files to the cloned repository folder.

8. **Commit Your Changes**:
   - Use the following commands:
     \`git add .\`
     \`git commit -m "Initial commit"\`

9. **Push to GitHub**:
   - Push your changes to GitHub using:
     \`git push origin main\` (or \`git push origin master\` if your default branch is master).

# Example Code for React Component
\`\`\`javascript
import React from "react";

const Repositories = () => {
  return <div>Repositories</div>;
};

export default Repositories;
\`\`\`
`;

  const [copy, setCopy] = useState(false);

  return (
    <div className="max-w-2xl min-w-[50rem] overflow-hidden rounded-md ml-1 my-2">
      <div className="flex items-center justify-between bg-[#3a404d] px-4 py-1 text-white font-medium text-[15px]">
        <p className="">markdown</p>
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

export default Repositories;
