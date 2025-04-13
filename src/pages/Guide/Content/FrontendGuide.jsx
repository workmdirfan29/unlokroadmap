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
    position: { x: 300, y: 0 },
    data: { label: "Frontend Development", icon: "📚" },
  },
  {
    id: "2",
    position: { x: 150, y: 100 },
    data: { label: "HTML", icon: "🔤" },
  },
  {
    id: "3",
    position: { x: 100, y: 200 },
    data: { label: "HTML Basics", icon: "📜" },
  },
  {
    id: "4",
    position: { x: 200, y: 200 },
    data: { label: "Semantic HTML", icon: "🏷️" },
  },
  {
    id: "5",
    position: { x: 300, y: 100 },
    data: { label: "CSS", icon: "🎨" },
  },
  {
    id: "6",
    position: { x: 250, y: 200 },
    data: { label: "CSS Basics", icon: "📖" },
  },
  {
    id: "7",
    position: { x: 350, y: 200 },
    data: { label: "Tailwind CSS", icon: "🌬️" },
  },
  {
    id: "8",
    position: { x: 450, y: 200 },
    data: { label: "Responsive Design", icon: "📱" },
  },
  {
    id: "9",
    position: { x: 450, y: 100 },
    data: { label: "JavaScript", icon: "💻" },
  },
  {
    id: "10",
    position: { x: 400, y: 200 },
    data: { label: "JS Basics", icon: "📘" },
  },
  {
    id: "11",
    position: { x: 500, y: 200 },
    data: { label: "DOM Manipulation", icon: "🖥️" },
  },
  {
    id: "12",
    position: { x: 600, y: 200 },
    data: { label: "ES6 Features", icon: "⚡" },
  },
  {
    id: "13",
    position: { x: 300, y: 300 },
    data: { label: "Git & GitHub", icon: "🔄" },
  },
  {
    id: "14",
    position: { x: 200, y: 400 },
    data: { label: "JavaScript Frameworks", icon: "📚" },
  },
  {
    id: "15",
    position: { x: 150, y: 500 },
    data: { label: "React.js", icon: "⚛️" },
  },
  {
    id: "16",
    position: { x: 100, y: 600 },
    data: { label: "React Basics", icon: "📚" },
  },
  {
    id: "17",
    position: { x: 100, y: 700 },
    data: { label: "React Router", icon: "🗺️" },
  },
  {
    id: "18",
    position: { x: 100, y: 800 },
    data: { label: "Redux", icon: "📦" },
  },
  {
    id: "19",
    position: { x: 100, y: 900 },
    data: { label: "React Hooks", icon: "🔗" },
  },
  {
    id: "20",
    position: { x: 300, y: 900 },
    data: { label: "Testing", icon: "✅" },
  },
  {
    id: "21",
    position: { x: 300, y: 1000 },
    data: { label: "Unit Testing", icon: "🧪" },
  },
  {
    id: "22",
    position: { x: 300, y: 1100 },
    data: { label: "Integration Testing", icon: "🔗" },
  },
  {
    id: "23",
    position: { x: 300, y: 1200 },
    data: { label: "End-to-End Testing", icon: "🔄" },
  },
  {
    id: "24",
    position: { x: 600, y: 900 },
    data: { label: "Deployment", icon: "🚀" },
  },
  {
    id: "25",
    position: { x: 600, y: 1000 },
    data: { label: "Vercel", icon: "🌍" },
  },
  {
    id: "26",
    position: { x: 600, y: 1100 },
    data: { label: "Netlify", icon: "🌐" },
  },
  {
    id: "27",
    position: { x: 600, y: 1200 },
    data: { label: "GitHub Pages", icon: "📄" },
  },
  {
    id: "28",
    position: { x: 300, y: 500 },
    data: { label: "Angular.js", icon: "🅰️" },
  },
  {
    id: "29",
    position: { x: 300, y: 600 },
    data: { label: "Angular Basics", icon: "📘" },
  },
  {
    id: "30",
    position: { x: 300, y: 700 },
    data: { label: "Components", icon: "🔧" },
  },
  {
    id: "31",
    position: { x: 300, y: 800 },
    data: { label: "Services", icon: "🛠️" },
  },
  {
    id: "32",
    position: { x: 300, y: 900 },
    data: { label: "RxJS", icon: "⚡" },
  },
  {
    id: "33",
    position: { x: 400, y: 500 },
    data: { label: "Vue.js", icon: "🌐" },
  },
  {
    id: "34",
    position: { x: 400, y: 600 },
    data: { label: "Vue Basics", icon: "📖" },
  },
  {
    id: "35",
    position: { x: 400, y: 700 },
    data: { label: "Vue Router", icon: "🗺️" },
  },
  {
    id: "36",
    position: { x: 400, y: 800 },
    data: { label: "Vuex", icon: "📦" },
  },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e1-5", source: "1", target: "5", animated: true },
  { id: "e1-9", source: "1", target: "9", animated: true },
  { id: "2-3", source: "2", target: "3", animated: true },
  { id: "2-4", source: "2", target: "4", animated: true },
  { id: "5-6", source: "5", target: "6", animated: true },
  { id: "5-7", source: "5", target: "7", animated: true },
  { id: "5-8", source: "5", target: "8", animated: true },
  { id: "9-10", source: "9", target: "10", animated: true },
  { id: "9-11", source: "9", target: "11", animated: true },
  { id: "9-12", source: "9", target: "12", animated: true },
  { id: "9-13", source: "9", target: "13", animated: true },
  { id: "13-14", source: "13", target: "14", animated: true },
  { id: "14-15", source: "14", target: "15", animated: true },
  { id: "14-28", source: "14", target: "28", animated: true },
  { id: "14-33", source: "14", target: "33", animated: true },
  { id: "15-16", source: "15", target: "16", animated: true },
  { id: "15-17", source: "15", target: "17", animated: true },
  { id: "15-18", source: "15", target: "18", animated: true },
  { id: "15-19", source: "15", target: "19", animated: true },
  { id: "15-20", source: "15", target: "20", animated: true },
  { id: "20-21", source: "20", target: "21", animated: true },
  { id: "20-22", source: "20", target: "22", animated: true },
  { id: "20-23", source: "20", target: "23", animated: true },
  { id: "15-24", source: "15", target: "24", animated: true },
  { id: "24-25", source: "24", target: "25", animated: true },
  { id: "24-26", source: "24", target: "26", animated: true },
  { id: "24-27", source: "24", target: "27", animated: true },
  { id: "28-29", source: "28", target: "29", animated: true },
  { id: "28-30", source: "28", target: "30", animated: true },
  { id: "28-31", source: "28", target: "31", animated: true },
  { id: "28-32", source: "28", target: "32", animated: true },
  { id: "33-34", source: "33", target: "34", animated: true },
  { id: "33-35", source: "33", target: "35", animated: true },
  { id: "33-36", source: "33", target: "36", animated: true },
];

const downloadFlow = async () => {
  console.log("Download feature coming soon!");
};

export default function FrontendGuide() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div id="Wrapper" className="relative w-full min-h-screen text-black">
      <div className="flex text-white rounded-md shadow-md">
        <p className="mb-2 text-sm">
          <span className="text-base font-semibold text-orange-400">Note:</span>{" "}
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
      <div style={{ width: "970px", height: "580px" }}>
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
}
