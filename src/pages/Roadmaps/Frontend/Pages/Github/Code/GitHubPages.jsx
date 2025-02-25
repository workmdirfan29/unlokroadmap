import { useState } from "react";
import { FiClipboard } from "react-icons/fi";
import { LuCheck } from "react-icons/lu";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const GitHubPages = () => {
  const codeString = `
### How to Deploy Your Website Using GitHub Pages

#### Step 1: Create a GitHub Repository
1. Go to GitHub and create a new repository.
2. Name your repository \`<username>.github.io\` (replace \`<username>\` with your GitHub username).

#### Step 2: Clone the Repository
Clone your repository to your local machine:
\`\`\`bash
git clone https://github.com/<username>/<username>.github.io.git
\`\`\`

#### Step 3: Add Your Website Files
1. Add your HTML, CSS, JavaScript files, and any other assets to the cloned repository folder.
2. Ensure your main HTML file is named \`index.html\`.

#### Step 4: Stage and Commit Your Changes
Navigate to your repository folder and run:
\`\`\`bash
git add .
git commit -m "Initial commit for GitHub Pages"
\`\`\`

#### Step 5: Push to GitHub
Push your changes to the GitHub repository:
\`\`\`bash
git push origin main
\`\`\`

#### Step 6: Enable GitHub Pages
1. Go to your repository on GitHub.
2. Click on the **"Settings"** tab.
3. Scroll down to the **"Pages"** section.
4. Under **"Source,"** select the branch you want to use (usually \`main\`).
5. Click **"Save."**

#### Step 7: Access Your Website
Your website will be available at:
\`https://<username>.github.io/\`

### Additional Notes
- Ensure your repository is public for others to access your site.
- You can update your site by making changes locally and pushing them to GitHub.

### Useful Links
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Creating a GitHub Pages Site](https://pages.github.com/)
  `;

  const [copy, setCopy] = useState(false);

  return (
    <div className="max-w-2xl min-w-[50rem] overflow-hidden rounded-md ml-1 my-2">
      <div className="flex items-center justify-between bg-[#3a404d] px-4 py-1 text-white font-medium text-[15px]">
        <p className="">GitHub Pages Deployment Guide</p>
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
            Copy Deployment Guide
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

export default GitHubPages;
