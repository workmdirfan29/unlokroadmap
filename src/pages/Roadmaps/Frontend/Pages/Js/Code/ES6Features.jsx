import { useState } from "react";
import { FiClipboard } from "react-icons/fi";
import { LuCheck } from "react-icons/lu";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const ES6Features = () => {
  const codeString = `// Arrow Functions
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

// Template Literals
const name = "Alice";
const greeting = \`Hello, \${name}!\`;
console.log(greeting); // Hello, Alice!

// Destructuring
const person = {
  name: "Bob",
  age: 30,
  city: "New York"
};
const { name: personName, age } = person;
console.log(personName); // Bob
console.log(age); // 30

// Default Parameters
const multiply = (a, b = 1) => a * b;
console.log(multiply(5)); // 5
console.log(multiply(5, 2)); // 10

// Spread Operator
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
const combined = [...nums1, ...nums2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Rest Operator
const sum = (...args) => args.reduce((total, num) => total + num, 0);
console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20, 30, 40)); // 100

// Classes
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(\`\${this.name} makes a noise.\`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(\`\${this.name} barks.\`);
  }
}

const dog = new Dog("Rex");
dog.speak(); // Rex barks.
`;

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

export default ES6Features;
