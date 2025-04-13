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
  // Root Node
  {
    id: "1",
    position: { x: 400, y: 20 },
    data: { label: "JavaScript Roadmap", icon: "📚" },
  },
  // Beginner Node
  {
    id: "2",
    position: { x: 100, y: 100 },
    data: { label: "Beginner Topics", icon: "👶" },
  },
  // Intermediate Node
  {
    id: "3",
    position: { x: 300, y: 100 },
    data: { label: "Intermediate Topics", icon: "🧑‍🎓" },
  },
  // Advanced Node
  {
    id: "4",
    position: { x: 500, y: 100 },
    data: { label: "Advanced Topics", icon: "👨‍🎓" },
  },
  // Project Node
  {
    id: "5",
    position: { x: 700, y: 100 },
    data: { label: "Projects", icon: "🛠️" },
  },
  // Beginner Topics
  ...Array.from({ length: 7 }, (_, i) => ({
    id: (i + 6).toString(),
    position: { x: 100, y: 160 + i * 60 },
    data: {
      label: `Day ${i + 1}: ${
        [
          "What is JS?",
          "JS Syntax",
          "Variables",
          "Data Types",
          "Operators",
          "Control Flow",
          "Functions",
        ][i]
      }`,
      icon: ["📖", "✍️", "🔑", "🔢", "➕", "🔀", "🔧"][i],
    },
  })),
  // Intermediate Topics
  ...Array.from({ length: 7 }, (_, i) => ({
    id: (i + 13).toString(),
    position: { x: 300, y: 160 + i * 60 },
    data: {
      label: `Day ${i + 1}: ${
        [
          "Closures",
          "Promises",
          "Async/Await",
          "Fetch API",
          "Advanced DOM",
          "AJAX",
          "Review",
        ][i]
      }`,
      icon: ["🔒", "📅", "⏳", "🌐", "🔗", "📡", "🔍"][i],
    },
  })),
  // Advanced Topics
  ...Array.from({ length: 6 }, (_, i) => ({
    id: (i + 20).toString(),
    position: { x: 500, y: 160 + i * 60 },
    data: {
      label: `Day ${i + 1}: ${
        [
          "Advanced Functions",
          "Design Patterns",
          "Performance Optimization",
          "Security",
          "Testing",
          "Final Review",
        ][i]
      }`,
      icon: ["⚙️", "🧩", "🚀", "🔒", "🧪", "✅"][i],
    },
  })),
  // Basic Projects
  ...Array.from({ length: 5 }, (_, i) => ({
    id: (i + 26).toString(),
    position: { x: 700, y: 160 + i * 60 },
    data: {
      label: `Basic Project ${i + 1}: ${
        ["Todo List", "Calculator", "Weather App", "Quiz App", "Notes App"][i]
      }`,
      icon: ["📝", "🔢", "☀️", "❓", "🗒️"][i],
    },
  })),
  // Advanced Projects
  ...Array.from({ length: 5 }, (_, i) => ({
    id: (i + 31).toString(),
    position: { x: 700, y: 360 + i * 60 },
    data: {
      label: `Advanced Project ${i + 1}: ${
        [
          "E-commerce Site",
          "Chat App",
          "Blog Platform",
          "Social Media App",
          "Portfolio Website",
        ][i]
      }`,
      icon: ["🛒", "💬", "📝", "🌐", "📁"][i],
    },
  })),
];

const initialEdges = [
  // Root to Level Nodes
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e1-3", source: "1", target: "3", animated: true },
  { id: "e1-4", source: "1", target: "4", animated: true },
  { id: "e1-5", source: "1", target: "5", animated: true },

  // Beginner to Topics
  ...Array.from({ length: 7 }, (_, i) => ({
    id: `e2-${i + 6}`,
    source: "2",
    target: (i + 6).toString(),
    animated: true,
  })),

  // Intermediate to Topics
  ...Array.from({ length: 7 }, (_, i) => ({
    id: `e3-${i + 13}`,
    source: "3",
    target: (i + 13).toString(),
    animated: true,
  })),

  // Advanced to Topics
  ...Array.from({ length: 6 }, (_, i) => ({
    id: `e4-${i + 20}`,
    source: "4",
    target: (i + 20).toString(),
    animated: true,
  })),

  // Projects to Basic Projects
  ...Array.from({ length: 5 }, (_, i) => ({
    id: `e5-${i + 26}`,
    source: "5",
    target: (i + 26).toString(),
    animated: true,
  })),

  // Projects to Advanced Projects
  ...Array.from({ length: 5 }, (_, i) => ({
    id: `e5-${i + 31}`,
    source: "5",
    target: (i + 31).toString(),
    animated: true,
  })),
];

const downloadFlow = async () => {
  console.log("Download feature coming soon!");
};

const JsGuide = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div id="Wrapper" className="relative w-full min-h-screen text-black">
      <div className="flex p-2 rounded-md shadow-md">
        <p className="mb-2 text-sm text-white">
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
      <div style={{ width: "960px", height: "700px" }} className="mx-auto">
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

export default JsGuide;
