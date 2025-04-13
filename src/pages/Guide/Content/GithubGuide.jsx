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
    data: { label: "GitHub Guide", icon: "📖" },
  },

  // Day 1: Introduction to Git (Left)
  {
    id: "2",
    position: { x: 240, y: 100 },
    data: { label: "Day 1: Introduction to Git", icon: "🌍" },
  },
  {
    id: "3",
    position: { x: 100, y: 200 },
    data: { label: "What is Git?", icon: "📝" },
  },
  {
    id: "4",
    position: { x: 400, y: 200 },
    data: { label: "Version Control", icon: "📊" },
  },

  // Day 2: Basic Git Commands (Right)
  {
    id: "5",
    position: { x: 720, y: 100 },
    data: { label: "Day 2: Basic Git Commands", icon: "🔑" },
  },
  {
    id: "6",
    position: { x: 600, y: 200 },
    data: { label: "git init", icon: "⚙️" },
  },
  {
    id: "7",
    position: { x: 840, y: 200 },
    data: { label: "git add", icon: "➕" },
  },

  // Day 3: Working with Repositories (Left)
  {
    id: "8",
    position: { x: 240, y: 300 },
    data: { label: "Day 3: Working with Repositories", icon: "📦" },
  },
  {
    id: "9",
    position: { x: 100, y: 400 },
    data: { label: "Clone a Repo", icon: "📋" },
  },
  {
    id: "10",
    position: { x: 400, y: 400 },
    data: { label: "Remote Repositories", icon: "🌐" },
  },

  // Day 4: Committing Changes (Right)
  {
    id: "11",
    position: { x: 720, y: 300 },
    data: { label: "Day 4: Committing Changes", icon: "✍️" },
  },
  {
    id: "12",
    position: { x: 600, y: 400 },
    data: { label: "git commit", icon: "📝" },
  },
  {
    id: "13",
    position: { x: 840, y: 400 },
    data: { label: "Commit Messages", icon: "💬" },
  },

  // Day 5: Branching (Left)
  {
    id: "14",
    position: { x: 240, y: 500 },
    data: { label: "Day 5: Branching", icon: "🌿" },
  },
  {
    id: "15",
    position: { x: 100, y: 600 },
    data: { label: "git branch", icon: "🪄" },
  },
  {
    id: "16",
    position: { x: 400, y: 600 },
    data: { label: "Merging Branches", icon: "🔄" },
  },

  // Day 6: Collaborating on GitHub (Right)
  {
    id: "17",
    position: { x: 720, y: 500 },
    data: { label: "Day 6: Collaborating on GitHub", icon: "🤝" },
  },
  {
    id: "18",
    position: { x: 600, y: 600 },
    data: { label: "Forking a Repo", icon: "🍴" },
  },
  {
    id: "19",
    position: { x: 840, y: 600 },
    data: { label: "Pull Requests", icon: "🔄" },
  },

  // Additional days can be added here
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
];

const downloadFlow = async () => {
  console.log("Download feature coming soon!");
};

const GithubGuide = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div id="Wrapper" className="relative w-full min-h-screen p-4 text-black">
      <div className="flex text-white rounded-md shadow-md">
        <p className="mb-3 text-sm">
          <span className="text-base font-semibold text-orange-400">Note:</span>{" "}
          You can adjust and zoom in/out. The download feature is not yet
          implemented but will be added soon.
        </p>
      </div>
      <div
        onClick={downloadFlow}
        className="absolute flex items-center p-2 mt-4 text-white rounded cursor-pointer top-4 right-4 hover:bg-gray-800"
      >
        <FiDownload size={20} />
      </div>
      <div style={{ width: "940px", height: "560px" }}>
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

export default GithubGuide;
