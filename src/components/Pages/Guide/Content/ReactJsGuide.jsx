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
  {
    id: "1",
    position: { x: 220, y: 10 },
    data: { label: "React Guide", icon: "📖" },
  },

  // Introduction to React
  {
    id: "2",
    position: { x: 240, y: 100 },
    data: { label: "Introduction to React", icon: "🌍" },
  },
  {
    id: "3",
    position: { x: 100, y: 200 },
    data: { label: "What is React?", icon: "📝" },
  },
  {
    id: "4",
    position: { x: 400, y: 200 },
    data: { label: "JSX", icon: "🔍" },
  },

  // Components
  {
    id: "5",
    position: { x: 240, y: 300 },
    data: { label: "Components", icon: "🧩" },
  },
  {
    id: "6",
    position: { x: 100, y: 400 },
    data: { label: "Functional Components", icon: "⚛️" },
  },
  {
    id: "7",
    position: { x: 400, y: 400 },
    data: { label: "Class Components", icon: "🏗️" },
  },

  // State and Props
  {
    id: "8",
    position: { x: 240, y: 500 },
    data: { label: "State and Props", icon: "📊" },
  },
  {
    id: "9",
    position: { x: 100, y: 600 },
    data: { label: "useState", icon: "📈" },
  },
  {
    id: "10",
    position: { x: 400, y: 600 },
    data: { label: "Props", icon: "📬" },
  },

  // Hooks
  {
    id: "11",
    position: { x: 240, y: 700 },
    data: { label: "Hooks", icon: "🔗" },
  },
  {
    id: "12",
    position: { x: 100, y: 800 },
    data: { label: "useEffect", icon: "⚙️" },
  },
  {
    id: "13",
    position: { x: 400, y: 800 },
    data: { label: "Custom Hooks", icon: "🛠️" },
  },

  // Advanced Concepts
  {
    id: "14",
    position: { x: 240, y: 900 },
    data: { label: "Advanced Concepts", icon: "🌟" },
  },
  {
    id: "15",
    position: { x: 100, y: 1000 },
    data: { label: "Context API", icon: "🌐" },
  },
  {
    id: "16",
    position: { x: 400, y: 1000 },
    data: { label: "Error Boundaries", icon: "🚧" },
  },

  // State Management
  {
    id: "17",
    position: { x: 240, y: 1100 },
    data: { label: "State Management", icon: "🔄" },
  },
  {
    id: "18",
    position: { x: 100, y: 1200 },
    data: { label: "Redux", icon: "⚡" },
  },
  {
    id: "19",
    position: { x: 400, y: 1200 },
    data: { label: "Zustand", icon: "🗝️" },
  },
  {
    id: "20",
    position: { x: 720, y: 1000 },
    data: { label: "Recoil", icon: "🌀" },
  },

  // Routing
  {
    id: "21",
    position: { x: 240, y: 1300 },
    data: { label: "Routing", icon: "🛣️" },
  },
  {
    id: "22",
    position: { x: 100, y: 1400 },
    data: { label: "React Router", icon: "🛤️" },
  },

  // Testing
  {
    id: "23",
    position: { x: 720, y: 1300 },
    data: { label: "Testing", icon: "🔬" },
  },
  {
    id: "24",
    position: { x: 600, y: 1400 },
    data: { label: "Jest", icon: "🧪" },
  },
  {
    id: "25",
    position: { x: 840, y: 1400 },
    data: { label: "React Testing Library", icon: "📚" },
  },

  // Deployment
  {
    id: "26",
    position: { x: 240, y: 1500 },
    data: { label: "Deployment", icon: "🚀" },
  },
  {
    id: "27",
    position: { x: 100, y: 1600 },
    data: { label: "Netlify", icon: "🌍" },
  },
  {
    id: "28",
    position: { x: 400, y: 1600 },
    data: { label: "Vercel", icon: "⚡" },
  },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e2-3", source: "2", target: "3", animated: true },
  { id: "e2-4", source: "2", target: "4", animated: true },

  // Components
  { id: "e2-5", source: "2", target: "5", animated: true },
  { id: "5-6", source: "5", target: "6", animated: true },
  { id: "5-7", source: "5", target: "7", animated: true },

  // State and Props
  { id: "e5-8", source: "5", target: "8", animated: true },
  { id: "8-9", source: "8", target: "9", animated: true },
  { id: "8-10", source: "8", target: "10", animated: true },

  // Hooks
  { id: "e8-11", source: "8", target: "11", animated: true },
  { id: "11-12", source: "11", target: "12", animated: true },
  { id: "11-13", source: "11", target: "13", animated: true },

  // Advanced Concepts
  { id: "e11-14", source: "11", target: "14", animated: true },
  { id: "14-15", source: "14", target: "15", animated: true },
  { id: "14-16", source: "14", target: "16", animated: true },

  // State Management
  { id: "e14-17", source: "14", target: "17", animated: true },
  { id: "17-18", source: "17", target: "18", animated: true },
  { id: "17-19", source: "17", target: "19", animated: true },
  { id: "17-20", source: "17", target: "20", animated: true },

  // Routing
  { id: "e17-21", source: "17", target: "21", animated: true },
  { id: "21-22", source: "21", target: "22", animated: true },

  // Testing
  { id: "e21-23", source: "21", target: "23", animated: true },
  { id: "23-24", source: "23", target: "24", animated: true },
  { id: "23-25", source: "23", target: "25", animated: true },

  // Deployment
  { id: "e23-26", source: "23", target: "26", animated: true },
  { id: "26-27", source: "26", target: "27", animated: true },
  { id: "26-28", source: "26", target: "28", animated: true },
];

const downloadFlow = async () => {
  console.log("Download feature coming soon!");
};

const ReactGuide = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div id="Wrapper" className="relative w-full min-h-screen p-4 text-black">
      <div className="flex mb-4 text-white rounded-md shadow-md">
        <p className="mb-3 text-sm">
          <span className="text-base font-semibold text-purple-500">Note:</span>{" "}
          This roadmap covers everything from the basics to advanced topics in
          React.
        </p>
      </div>
      <div
        onClick={downloadFlow}
        className="absolute flex items-center p-2 mt-4 text-white rounded cursor-pointer top-4 right-4 hover:bg-gray-800"
      >
        <FiDownload size={20} />
      </div>
      <div style={{ width: "940px", height: "550px" }}>
        <ReactFlow
          nodes={nodes.map((node) => ({
            ...node,
            data: {
              label: (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "5px",
                  }}
                >
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

export default ReactGuide;
