import { useState } from "react";
import { FiClipboard } from "react-icons/fi";
import { LuCheck } from "react-icons/lu";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const FinalProject = () => {
  const codeString = `
### Building Your Final Project on GitHub

#### Step 1: Create a New Repository
1. Go to GitHub and create a new repository named \`final-project\`.

#### Step 2: Clone the Repository
Clone your new repository to your local machine:
\`\`\`bash
git clone https://github.com/yourusername/final-project.git
cd final-project
\`\`\`

#### Step 3: Set Up Your Project
1. Initialize your project with npm:
\`\`\`bash
npm init -y
\`\`\`
2. Install any necessary packages. For example, if you’re using React:
\`\`\`bash
npx create-react-app .
\`\`\`

#### Step 4: Develop Your Application
1. Start coding your application. Use components, state management, and any APIs you need.
2. Test your application locally:
\`\`\`bash
npm start
\`\`\`

#### Step 5: Commit Your Changes
Once you're satisfied with your changes:
\`\`\`bash
git add .
git commit -m "Initial project setup"
\`\`\`

#### Step 6: Push Your Code to GitHub
Push your changes to the remote repository:
\`\`\`bash
git push origin main
\`\`\`

#### Step 7: Deploy Your Application
You can deploy your application using GitHub Pages or another service. To deploy using GitHub Pages:
1. Install the GitHub Pages package:
\`\`\`bash
npm install gh-pages --save-dev
\`\`\`
2. Add the following to your \`package.json\`:
\`\`\`json
"homepage": "https://yourusername.github.io/final-project",
\`\`\`
3. Add deployment scripts:
\`\`\`json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
\`\`\`
4. Deploy your application:
\`\`\`bash
npm run deploy
\`\`\`

### Conclusion
Now your final project is live on GitHub! You can share the link with others and continue to improve your application.

### Additional Resources
- [GitHub Documentation](https://docs.github.com/en)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
`;

  const [copy, setCopy] = useState(false);

  return (
    <div className="max-w-2xl min-w-[50rem] overflow-hidden rounded-md ml-1 my-2">
      <div className="flex items-center justify-between bg-[#3a404d] px-4 py-1 text-white font-medium text-[15px]">
        <p className="">Final Project Setup Guide</p>
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
            Copy Setup Guide
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

export default FinalProject;
