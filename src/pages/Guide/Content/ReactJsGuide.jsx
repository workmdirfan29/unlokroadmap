import React from "react";
import {
  Background,
  Controls,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { FiDownload } from "react-icons/fi";

const initialNodes = [
  // Main Title
  {
    id: "1",
    position: { x: 480, y: 20 },
    data: { label: "React.js Roadmap", icon: "📚" },
  },

  // Week 1: Basics of React
  {
    id: "2",
    position: { x: 240, y: 100 },
    data: { label: "Day 1: Introduction to React", icon: "🌅" },
  },
  {
    id: "3",
    position: { x: 100, y: 200 },
    data: { label: "What is React?", icon: "📝" },
  },
  {
    id: "4",
    position: { x: 400, y: 200 },
    data: { label: "Creating Your First App", icon: "👨‍💻" },
  },
  {
    id: "5",
    position: { x: 720, y: 100 },
    data: { label: "Day 2: JSX", icon: "🔤" },
  },
  {
    id: "6",
    position: { x: 600, y: 200 },
    data: { label: "JSX Syntax", icon: "📖" },
  },
  {
    id: "7",
    position: { x: 840, y: 200 },
    data: { label: "Rendering Elements", icon: "🎨" },
  },
  {
    id: "8",
    position: { x: 240, y: 300 },
    data: { label: "Day 3: Components", icon: "🧩" },
  },
  {
    id: "9",
    position: { x: 100, y: 400 },
    data: { label: "Functional vs Class Components", icon: "🔄" },
  },
  {
    id: "10",
    position: { x: 400, y: 400 },
    data: { label: "Props and State", icon: "⚙️" },
  },
  {
    id: "11",
    position: { x: 720, y: 300 },
    data: { label: "Day 4: Event Handling", icon: "🖱️" },
  },
  {
    id: "12",
    position: { x: 600, y: 400 },
    data: { label: "Handling Events", icon: "📋" },
  },
  {
    id: "13",
    position: { x: 840, y: 400 },
    data: { label: "Forms and Controlled Components", icon: "📝" },
  },
  {
    id: "14",
    position: { x: 240, y: 500 },
    data: { label: "Day 5: Lifecycle Methods", icon: "⏳" },
  },
  {
    id: "15",
    position: { x: 100, y: 600 },
    data: { label: "Component Lifecycle", icon: "🔄" },
  },
  {
    id: "16",
    position: { x: 400, y: 600 },
    data: { label: "Using Effects", icon: "⚡" },
  },
  {
    id: "17",
    position: { x: 720, y: 500 },
    data: { label: "Day 6: Hooks Basics", icon: "🪝" },
  },
  {
    id: "18",
    position: { x: 600, y: 600 },
    data: { label: "useState", icon: "🛠️" },
  },
  {
    id: "19",
    position: { x: 840, y: 600 },
    data: { label: "useEffect", icon: "⚙️" },
  },
  {
    id: "20",
    position: { x: 240, y: 700 },
    data: { label: "Day 7: Custom Hooks", icon: "🔧" },
  },

  // Week 2: Advanced Concepts
  {
    id: "21",
    position: { x: 720, y: 700 },
    data: { label: "Day 8: Context API", icon: "🌐" },
  },
  {
    id: "22",
    position: { x: 600, y: 800 },
    data: { label: "Managing State with Context", icon: "📊" },
  },
  {
    id: "23",
    position: { x: 840, y: 800 },
    data: { label: "Provider and Consumer", icon: "🔌" },
  },
  {
    id: "24",
    position: { x: 240, y: 900 },
    data: { label: "Day 9: React Router", icon: "🛣️" },
  },
  {
    id: "25",
    position: { x: 100, y: 1000 },
    data: { label: "Routing Basics", icon: "📍" },
  },
  {
    id: "26",
    position: { x: 400, y: 1000 },
    data: { label: "Dynamic Routing", icon: "🔄" },
  },
  {
    id: "27",
    position: { x: 720, y: 900 },
    data: { label: "Day 10: State Management with Redux", icon: "📈" },
  },
  {
    id: "28",
    position: { x: 600, y: 1000 },
    data: { label: "Redux Basics", icon: "⚙️" },
  },
  {
    id: "29",
    position: { x: 840, y: 1000 },
    data: { label: "Redux Toolkit", icon: "🧰" },
  },
  {
    id: "30",
    position: { x: 240, y: 1100 },
    data: { label: "Day 11: React Hook Form", icon: "📝" },
  },
  {
    id: "31",
    position: { x: 720, y: 1100 },
    data: { label: "Day 12: Zustand", icon: "🧩" },
  },

  // Week 3: Advanced Features and Testing
  {
    id: "32",
    position: { x: 240, y: 1200 },
    data: { label: "Day 13: Testing in React", icon: "🧪" },
  },
  {
    id: "33",
    position: { x: 720, y: 1200 },
    data: { label: "Day 14: React Testing Library", icon: "📚" },
  },
  {
    id: "34",
    position: { x: 600, y: 1300 },
    data: { label: "Unit and Integration Testing", icon: "🔍" },
  },
  {
    id: "35",
    position: { x: 240, y: 1300 },
    data: { label: "Day 15: Deployment", icon: "🚀" },
  },
  {
    id: "36",
    position: { x: 720, y: 1300 },
    data: { label: "Day 16: Build Tools", icon: "🛠️" },
  },
  {
    id: "37",
    position: { x: 600, y: 1400 },
    data: { label: "Deploying on Vercel/Netlify", icon: "🌐" },
  },

  // Week 4: Advanced Topics and Best Practices
  {
    id: "38",
    position: { x: 240, y: 1400 },
    data: { label: "Day 17: Performance Optimization", icon: "⚡" },
  },
  {
    id: "39",
    position: { x: 720, y: 1400 },
    data: { label: "Day 18: Code Splitting", icon: "🗂️" },
  },
  {
    id: "40",
    position: { x: 600, y: 1500 },
    data: { label: "Lazy Loading Components", icon: "🔄" },
  },
  {
    id: "41",
    position: { x: 240, y: 1500 },
    data: { label: "Day 19: Version Control with Git", icon: "🔧" },
  },
  {
    id: "42",
    position: { x: 720, y: 1500 },
    data: { label: "Day 20: Best Practices and Wrap-Up", icon: "✅" },
  },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e1-5", source: "1", target: "5", animated: true },

  // Week 1
  { id: "e2-3", source: "2", target: "3", animated: true },
  { id: "e2-4", source: "2", target: "4", animated: true },
  { id: "e5-6", source: "5", target: "6", animated: true },
  { id: "e5-7", source: "5", target: "7", animated: true },
  { id: "e2-8", source: "2", target: "8", animated: true },
  { id: "8-9", source: "8", target: "9", animated: true },
  { id: "8-10", source: "8", target: "10", animated: true },
  { id: "e5-11", source: "5", target: "11", animated: true },
  { id: "11-12", source: "11", target: "12", animated: true },
  { id: "11-13", source: "11", target: "13", animated: true },
  { id: "e2-14", source: "2", target: "14", animated: true },
  { id: "14-15", source: "14", target: "15", animated: true },
  { id: "14-16", source: "14", target: "16", animated: true },
  { id: "e5-17", source: "5", target: "17", animated: true },
  { id: "17-18", source: "17", target: "18", animated: true },
  { id: "17-19", source: "17", target: "19", animated: true },
  { id: "e2-20", source: "2", target: "20", animated: true },

  // Week 2
  { id: "e2-21", source: "2", target: "21", animated: true },
  { id: "21-22", source: "21", target: "22", animated: true },
  { id: "21-23", source: "21", target: "23", animated: true },
  { id: "e5-24", source: "5", target: "24", animated: true },
  { id: "24-25", source: "24", target: "25", animated: true },
  { id: "24-26", source: "24", target: "26", animated: true },
  { id: "e5-27", source: "5", target: "27", animated: true },
  { id: "27-28", source: "27", target: "28", animated: true },
  { id: "27-29", source: "27", target: "29", animated: true },
  { id: "e2-30", source: "2", target: "30", animated: true },
  { id: "e5-31", source: "5", target: "31", animated: true },

  // Week 3
  { id: "e2-32", source: "2", target: "32", animated: true },
  { id: "32-33", source: "32", target: "33", animated: true },
  { id: "33-34", source: "33", target: "34", animated: true },
  { id: "e5-35", source: "5", target: "35", animated: true },
  { id: "35-36", source: "35", target: "36", animated: true },
  { id: "36-37", source: "36", target: "37", animated: true },

  // Week 4
  { id: "e2-38", source: "2", target: "38", animated: true },
  { id: "38-39", source: "38", target: "39", animated: true },
  { id: "39-40", source: "39", target: "40", animated: true },
  { id: "e2-41", source: "2", target: "41", animated: true },
  { id: "e2-42", source: "2", target: "42", animated: true },
];

const downloadFlow = async () => {
  console.log("Download feature coming soon!");
};

const ReactJsGuide = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div id="Wrapper" className="relative w-full min-h-screen text-black">
      <div className="flex text-white rounded-md shadow-md">
        <p className="mb-2 text-sm">
          <span className="text-base font-semibold text-purple-500">Note:</span>{" "}
          You can adjust and zoom in/out. The download feature is not yet
          implemented but will be added soon.
        </p>
      </div>
      <div
        onClick={downloadFlow}
        className="absolute flex items-center p-2 mt-4 text-white bg-gray-600 rounded cursor-pointer top-4 right-4"
      >
        <FiDownload />
      </div>
      <div style={{ width: "960px", height: "680px" }}>
        <ReactFlow
          nodes={nodes.map((node) => ({
            ...node,
            data: {
              label: (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ marginRight: "8px" }}>{node.data.icon}</span>
                  {node.data.label}
                </div>
              ),
            },
          }))}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
};

export default ReactJsGuide;
