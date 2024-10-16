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
    position: { x: 400, y: 20 },
    data: { label: "CSS Roadmap", icon: "📚" },
  },

  // Day 1: Introduction to CSS (Left)
  {
    id: "2",
    position: { x: 100, y: 100 },
    data: { label: "Day 1: Introduction to CSS", icon: "🌅" },
  },
  {
    id: "3",
    position: { x: 100, y: 180 },
    data: { label: "CSS Syntax", icon: "📜" },
  },
  {
    id: "4",
    position: { x: 100, y: 260 },
    data: { label: "CSS Selectors", icon: "🔍" },
  },

  // Day 2: Box Model (Right)
  {
    id: "5",
    position: { x: 600, y: 100 },
    data: { label: "Day 2: Box Model", icon: "📦" },
  },
  {
    id: "6",
    position: { x: 600, y: 180 },
    data: { label: "Margin, Padding, Borders", icon: "📏" },
  },

  // Day 3: Positioning (Left)
  {
    id: "7",
    position: { x: 100, y: 400 },
    data: { label: "Day 3: Positioning", icon: "📍" },
  },
  {
    id: "8",
    position: { x: 100, y: 480 },
    data: { label: "Static, Relative, Absolute, Fixed", icon: "📍" },
  },

  // Day 4: Flexbox (Right)
  {
    id: "9",
    position: { x: 600, y: 400 },
    data: { label: "Day 4: Flexbox", icon: "🌀" },
  },
  {
    id: "10",
    position: { x: 600, y: 480 },
    data: { label: "Flex Container and Items", icon: "📦" },
  },

  // Day 5: Grid Layout (Left)
  {
    id: "11",
    position: { x: 100, y: 700 },
    data: { label: "Day 5: Grid Layout", icon: "📐" },
  },
  {
    id: "12",
    position: { x: 100, y: 780 },
    data: { label: "Grid Template Areas", icon: "🗺️" },
  },

  // Day 6: Responsive Design (Right)
  {
    id: "13",
    position: { x: 600, y: 700 },
    data: { label: "Day 6: Responsive Design", icon: "📱" },
  },
  {
    id: "14",
    position: { x: 600, y: 780 },
    data: { label: "Media Queries", icon: "🔄" },
  },

  // Day 7: CSS Variables (Left)
  {
    id: "15",
    position: { x: 100, y: 1000 },
    data: { label: "Day 7: CSS Variables", icon: "⚙️" },
  },

  // Day 8: CSS Animations (Right)
  {
    id: "16",
    position: { x: 600, y: 1000 },
    data: { label: "Day 8: CSS Animations", icon: "✨" },
  },
  {
    id: "17",
    position: { x: 600, y: 1080 },
    data: { label: "Keyframes, Transitions", icon: "🎞️" },
  },

  // Day 9: Preprocessors (Left)
  {
    id: "18",
    position: { x: 100, y: 1300 },
    data: { label: "Day 9: Preprocessors", icon: "🛠️" },
  },
  {
    id: "19",
    position: { x: 100, y: 1380 },
    data: { label: "Sass, LESS", icon: "🛠️" },
  },

  // Day 10: CSS Frameworks (Right)
  {
    id: "20",
    position: { x: 600, y: 1300 },
    data: { label: "Day 10: CSS Frameworks", icon: "📦" },
  },
  {
    id: "21",
    position: { x: 600, y: 1380 },
    data: { label: "Bootstrap, Tailwind", icon: "📦" },
  },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e2-3", source: "2", target: "3", animated: true },
  { id: "e2-4", source: "2", target: "4", animated: true },

  { id: "e2-5", source: "2", target: "5", animated: true },
  { id: "5-6", source: "5", target: "6", animated: true },

  { id: "e5-7", source: "5", target: "7", animated: true },
  { id: "7-8", source: "7", target: "8", animated: true },

  { id: "e7-9", source: "7", target: "9", animated: true },
  { id: "9-10", source: "9", target: "10", animated: true },

  { id: "e9-11", source: "9", target: "11", animated: true },
  { id: "11-12", source: "11", target: "12", animated: true },

  { id: "e11-13", source: "11", target: "13", animated: true },
  { id: "13-14", source: "13", target: "14", animated: true },

  { id: "e13-15", source: "13", target: "15", animated: true },

  { id: "e15-16", source: "15", target: "16", animated: true },
  { id: "16-17", source: "16", target: "17", animated: true },

  { id: "e17-18", source: "17", target: "18", animated: true },
  { id: "18-19", source: "18", target: "19", animated: true },

  { id: "e19-20", source: "19", target: "20", animated: true },
  { id: "20-21", source: "20", target: "21", animated: true },
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
      <div style={{ width: "950px", height: "580px" }}>
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
