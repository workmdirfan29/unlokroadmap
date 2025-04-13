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
    position: { x: 480, y: 20 },
    data: { label: "CSS Roadmap", icon: "📚" },
  },

  // Day 1: Introduction to CSS (Left)
  {
    id: "2",
    position: { x: 240, y: 100 },
    data: { label: "Day 1: Introduction to CSS", icon: "🌅" },
  },
  {
    id: "3",
    position: { x: 100, y: 200 },
    data: { label: "What is CSS?", icon: "📝" },
  },
  {
    id: "4",
    position: { x: 400, y: 200 },
    data: { label: "CSS Syntax", icon: "📑" },
  },

  // Day 2: Selectors and Specificity (Right)
  {
    id: "5",
    position: { x: 720, y: 100 },
    data: { label: "Day 2: Selectors and Specificity", icon: "🎯" },
  },
  {
    id: "6",
    position: { x: 600, y: 200 },
    data: { label: "Types of Selectors", icon: "🔍" },
  },
  {
    id: "7",
    position: { x: 840, y: 200 },
    data: { label: "Specificity Rules", icon: "⚖️" },
  },

  // Day 3: Box Model (Left)
  {
    id: "8",
    position: { x: 240, y: 300 },
    data: { label: "Day 3: Box Model", icon: "📦" },
  },
  {
    id: "9",
    position: { x: 100, y: 400 },
    data: { label: "Content, Padding, Border, Margin", icon: "📏" },
  },
  {
    id: "10",
    position: { x: 400, y: 400 },
    data: { label: "Box Sizing", icon: "🔲" },
  },

  // Day 4: Flexbox (Right)
  {
    id: "11",
    position: { x: 720, y: 300 },
    data: { label: "Day 4: Flexbox", icon: "🧩" },
  },
  {
    id: "12",
    position: { x: 600, y: 400 },
    data: { label: "Flex Container and Items", icon: "🪄" },
  },
  {
    id: "13",
    position: { x: 840, y: 400 },
    data: { label: "Alignment and Justification", icon: "🏷️" },
  },

  // Day 5: Grid Layout (Left)
  {
    id: "14",
    position: { x: 240, y: 500 },
    data: { label: "Day 5: Grid Layout", icon: "📊" },
  },
  {
    id: "15",
    position: { x: 100, y: 600 },
    data: { label: "Grid Template Areas", icon: "🗺️" },
  },
  {
    id: "16",
    position: { x: 400, y: 600 },
    data: { label: "Grid Gap and Alignment", icon: "🔄" },
  },

  // Day 6: Responsive Design (Right)
  {
    id: "17",
    position: { x: 720, y: 500 },
    data: { label: "Day 6: Responsive Design", icon: "📱" },
  },
  {
    id: "18",
    position: { x: 600, y: 600 },
    data: { label: "Media Queries", icon: "🖥️" },
  },
  {
    id: "19",
    position: { x: 840, y: 600 },
    data: { label: "Mobile-First Approach", icon: "📊" },
  },

  // Day 7: CSS Variables (Left)
  {
    id: "20",
    position: { x: 240, y: 700 },
    data: { label: "Day 7: CSS Variables", icon: "🔤" },
  },
  {
    id: "21",
    position: { x: 100, y: 800 },
    data: { label: "Defining Variables", icon: "🛠️" },
  },
  {
    id: "22",
    position: { x: 400, y: 800 },
    data: { label: "Using Variables", icon: "💼" },
  },

  // Day 8: Transitions and Animations (Right)
  {
    id: "23",
    position: { x: 720, y: 700 },
    data: { label: "Day 8: Transitions and Animations", icon: "🎬" },
  },

  // Day 9: Pseudo-classes and Pseudo-elements (Left)
  {
    id: "24",
    position: { x: 240, y: 900 },
    data: { label: "Day 9: Pseudo-classes and Pseudo-elements", icon: "🎭" },
  },
  {
    id: "25",
    position: { x: 100, y: 1000 },
    data: { label: "Common Pseudo-classes", icon: "📜" },
  },
  {
    id: "26",
    position: { x: 400, y: 1000 },
    data: { label: "Using Pseudo-elements", icon: "🎨" },
  },

  // Day 10: CSS Frameworks (Right)
  {
    id: "27",
    position: { x: 720, y: 900 },
    data: { label: "Day 10: CSS Frameworks", icon: "🛠️" },
  },

  // Additional days can be added here up to Day 20
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e1-5", source: "1", target: "5", animated: true },

  // Day 1
  { id: "e2-3", source: "2", target: "3", animated: true },
  { id: "e2-4", source: "2", target: "4", animated: true },

  // Day 2
  { id: "e5-6", source: "5", target: "6", animated: true },
  { id: "e5-7", source: "5", target: "7", animated: true },

  // Day 3
  { id: "e2-8", source: "2", target: "8", animated: true },
  { id: "8-9", source: "8", target: "9", animated: true },
  { id: "8-10", source: "8", target: "10", animated: true },

  // Day 4
  { id: "e5-11", source: "5", target: "11", animated: true },
  { id: "11-12", source: "11", target: "12", animated: true },
  { id: "11-13", source: "11", target: "13", animated: true },

  // Day 5
  { id: "e2-14", source: "2", target: "14", animated: true },
  { id: "14-15", source: "14", target: "15", animated: true },
  { id: "14-16", source: "14", target: "16", animated: true },

  // Day 6
  { id: "e5-17", source: "5", target: "17", animated: true },
  { id: "17-18", source: "17", target: "18", animated: true },
  { id: "17-19", source: "17", target: "19", animated: true },

  // Day 7
  { id: "e2-20", source: "2", target: "20", animated: true },
  { id: "20-21", source: "20", target: "21", animated: true },
  { id: "20-22", source: "20", target: "22", animated: true },

  // Day 8
  { id: "e5-23", source: "5", target: "23", animated: true },

  // Day 9
  { id: "e2-24", source: "2", target: "24", animated: true },
  { id: "24-25", source: "24", target: "25", animated: true },
  { id: "24-26", source: "24", target: "26", animated: true },

  // Day 10
  { id: "e5-27", source: "5", target: "27", animated: true },

  // Additional edges can be added here
];

const downloadFlow = async () => {
  console.log("Download feature coming soon!");
};

const CssGuide = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div id="Wrapper" className="relative w-full min-h-screen text-black">
      <div className="flex text-white rounded-md shadow-md">
        <p className="mb-2 text-sm">
          <span className="text-base font-semibold ttext-orange-400">Note:</span>{" "}
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
      <div style={{ width: "960px", height: "580px" }}>
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

export default CssGuide;
