import { useState } from "react";
import { FiClipboard } from "react-icons/fi";
import { LuCheck } from "react-icons/lu";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CICD = () => {
  const codeString = `
### Setting Up CI/CD with GitHub Actions

#### Step 1: Create Your GitHub Repository
1. Go to GitHub and create a new repository for your project.

#### Step 2: Create a Workflow File
1. In your repository, create a new directory named \`.github/workflows\`.
2. Inside the \`workflows\` directory, create a file named \`ci-cd.yml\`.

#### Step 3: Define Your Workflow
Add the following YAML configuration to your \`ci-cd.yml\` file:

\`\`\`yaml
name: CI/CD Pipeline

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14'

      - name: Install Dependencies
        run: npm install

      - name: Run Tests
        run: npm test

      - name: Build
        run: npm run build

      - name: Deploy
        run: npm run deploy
\`\`\`

#### Step 4: Configure Your Scripts
Make sure you have the necessary scripts defined in your \`package.json\`:

\`\`\`json
{
  "scripts": {
    "test": "your-test-command",
    "build": "your-build-command",
    "deploy": "your-deploy-command"
  }
}
\`\`\`

#### Step 5: Push Changes
Commit and push your changes to the repository:
\`\`\`bash
git add .
git commit -m "Add CI/CD pipeline"
git push origin main
\`\`\`

#### Step 6: Monitor Your Workflow
1. Go to the **Actions** tab in your GitHub repository.
2. You will see your CI/CD workflow running on every push to the main branch.

### Additional Resources
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [CI/CD Best Practices](https://www.atlassian.com/continuous-delivery/ci-cd)
  `;

  const [copy, setCopy] = useState(false);

  return (
    <div className="max-w-2xl min-w-[50rem] overflow-hidden rounded-md ml-1 my-2">
      <div className="flex items-center justify-between bg-[#3a404d] px-4 py-1 text-white font-medium text-[15px]">
        <p className="">CI/CD Setup Guide</p>
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
            Copy CI/CD Guide
          </button>
        )}
      </div>
      <SyntaxHighlighter
        language="yaml"
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

export default CICD;
