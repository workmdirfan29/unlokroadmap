import { useState } from "react";
import { FiClipboard } from "react-icons/fi";
import { LuCheck } from "react-icons/lu";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const FinalProject = () => {
  const codeString = `// Final Project: To-Do List Application

// HTML structure
const appDiv = document.getElementById('app');
appDiv.innerHTML = \`
  <h1>My To-Do List</h1>
  <input type="text" id="taskInput" placeholder="Add a new task" />
  <button id="addTaskBtn">Add Task</button>
  <ul id="taskList"></ul>
\`;

// Sample tasks data
let tasks = [];

// Function to render tasks
const renderTasks = () => {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = ''; // Clear the list

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => {
      tasks.splice(index, 1); // Remove task
      renderTasks(); // Re-render tasks
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
};

// Function to add a task
const addTask = () => {
  const taskInput = document.getElementById('taskInput');
  const newTask = taskInput.value.trim();
  
  if (newTask) {
    tasks.push(newTask);
    taskInput.value = ''; // Clear input
    renderTasks(); // Re-render tasks
  }
};

// Event listener for button
document.getElementById('addTaskBtn').addEventListener('click', addTask);

// Fetching tasks from a mock API (simulated with a promise)
const fetchTasks = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['Task 1', 'Task 2', 'Task 3']);
    }, 1000);
  });
};

// Async function to load initial tasks
const loadTasks = async () => {
  const initialTasks = await fetchTasks();
  tasks = initialTasks;
  renderTasks();
};

// Load tasks on initial load
loadTasks();
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

export default FinalProject;
