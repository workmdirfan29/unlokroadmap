import { useState } from "react";
import { FiClipboard } from "react-icons/fi";
import { LuCheck } from "react-icons/lu";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const FormCode = () => {
  const codeString = `<h3>Contact Us</h3>
<form action="/submit" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name"><br>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email"><br>
    
    <label for="gender">Gender:</label>
    <input type="radio" id="male" name="gender" value="male"> Male
    <input type="radio" id="female" name="gender" value="female"> Female<br>
    
    <input type="submit" value="Submit">
</form>
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

export default FormCode;
