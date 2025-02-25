import { useState } from "react";
import { FiClipboard } from "react-icons/fi";
import { LuCheck } from "react-icons/lu";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Objects = () => {
  const codeString = `// Declaring an object
const person = {
  name: "Alice",
  age: 25,
  city: "New York",
  greet: function() {
    return \`Hello, my name is \${this.name}\`;
  }
};

// Accessing properties
console.log(person.name); // Alice
console.log(person["age"]); // 25

// Adding a new property
person.email = "alice@example.com";

// Calling a method
console.log(person.greet()); // Hello, my name is Alice

// Iterating through an object
for (const key in person) {
  console.log(\`\${key}: \${person[key]}\`);
}`;

  // State for copy notification
  const [copy, setCopy] = useState(false);

  return (
    <div className="max-w-2xl min-w-[50rem] overflow-hidden rounded-md ml-1 my-2">
      <div className="flex items-center justify-between bg-[#3a404d] px-4 py-1 text-white font-medium text-[15px]">
        <p className="">javascript</p>
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
        language="javascript"
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

export default Objects;
