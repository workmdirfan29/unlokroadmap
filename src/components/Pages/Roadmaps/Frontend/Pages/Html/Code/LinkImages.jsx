import { useState } from "react";
import { FiClipboard } from "react-icons/fi";
import { LuCheck } from "react-icons/lu";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs"; // Changed theme to dracula

const LinkImages = () => {
  const codeString = `<h3>My Favorite Website</h3>
<p>Visit <a href="https://www.example.com" target="_blank">Example</a> for more info!</p>

<h3>My Favorite Animal</h3>
<img src="https://via.placeholder.com/150" alt="Placeholder Image" />

<h3>My Favorite Video</h3>
<video width="320" height="240" controls>
  <source src="https://www.example.com/dummy-video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
`;

  const [copy, setCopy] = useState();

  return (
    <div className="max-w-2xl min-w-[50rem] overflow-hidden rounded-md ml-1 my-2 ">
      <div className="flex items-center justify-between bg-[#3a404d] px-4 py-1 text-white font-medium text-[15px]">
        <p className="">html</p>
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
        language="html"
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

export default LinkImages;
