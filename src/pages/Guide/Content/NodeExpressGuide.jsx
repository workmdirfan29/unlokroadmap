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

// Initial nodes and edges for the flowchart
const initialNodes = [
    {
        id: "1",
        position: { x: 480, y: 20 },
        data: { label: "Node.js & Express.js Guide", icon: "📚" },
    },
    // Week 1: Introduction to Node.js
    {
        id: "2",
        position: { x: 220, y: 100 }, // Adjusted position
        data: { label: "Week 1: Introduction to Node.js", icon: "🌅" },
    },
    {
        id: "3",
        position: { x: 100, y: 240 }, // Increased gap
        data: { label: "What is Node.js?", icon: "📝" },
    },
    {
        id: "4",
        position: { x: 340, y: 240 }, // Increased gap
        data: { label: "Setting Up Node.js", icon: "⚙️" },
    },
    {
        id: "5",
        position: { x: 220, y: 380 }, // Increased gap
        data: { label: "Node.js Modules", icon: "📦" },
    },
    {
        id: "6",
        position: { x: 340, y: 380 }, // Increased gap
        data: { label: "NPM Basics", icon: "📜" },
    },
    // Week 2: Introduction to Express.js
    {
        id: "7",
        position: { x: 740, y: 100 }, // Increased gap
        data: { label: "Week 2: Introduction to Express.js", icon: "🔖" },
    },
    {
        id: "8",
        position: { x: 600, y: 240 }, // Increased gap
        data: { label: "Setting Up Express.js", icon: "🚀" },
    },
    {
        id: "9",
        position: { x: 880, y: 240 }, // Increased gap
        data: { label: "Routing Basics", icon: "🛣️" },
    },
    // Week 3: Middleware and Request Handling
    {
        id: "10",
        position: { x: 220, y: 500 }, // Increased gap
        data: { label: "Week 3: Middleware", icon: "🔌" },
    },
    {
        id: "11",
        position: { x: 100, y: 640 }, // Increased gap
        data: { label: "What is Middleware?", icon: "🔍" },
    },
    {
        id: "12",
        position: { x: 340, y: 640 }, // Increased gap
        data: { label: "Built-in Middleware", icon: "⚙️" },
    },
    {
        id: "13",
        position: { x: 600, y: 640 }, // Increased gap
        data: { label: "Third-Party Middleware", icon: "🤝" },
    },
    // Week 4: RESTful APIs and CRUD Operations
    {
        id: "14",
        position: { x: 740, y: 500 }, // Increased gap
        data: { label: "Week 4: RESTful APIs", icon: "🌐" },
    },
    {
        id: "15",
        position: { x: 600, y: 640 }, // Increased gap
        data: { label: "CRUD Operations", icon: "🛠️" },
    },
    // Week 5: Advanced Topics
    {
        id: "16",
        position: { x: 220, y: 800 }, // Increased gap
        data: { label: "Week 5: Advanced Topics", icon: "📈" },
    },
    {
        id: "17",
        position: { x: 100, y: 940 }, // Increased gap
        data: { label: "Error Handling", icon: "⚠️" },
    },
    {
        id: "18",
        position: { x: 340, y: 940 }, // Increased gap
        data: { label: "File Uploads", icon: "📤" },
    },
    {
        id: "19",
        position: { x: 600, y: 940 }, // Increased gap
        data: { label: "Authentication", icon: "🔒" },
    },
    // Week 6: Deployment and Best Practices
    {
        id: "20",
        position: { x: 740, y: 800 }, // Increased gap
        data: { label: "Week 6: Deployment", icon: "🚢" },
    },
    {
        id: "21",
        position: { x: 600, y: 940 }, // Increased gap
        data: { label: "Best Practices", icon: "📋" },
    },
];

// Initial edges connecting the nodes
const initialEdges = [
    { id: "e1-2", source: "1", target: "2", animated: true },
    { id: "e1-7", source: "1", target: "7", animated: true },
    { id: "e2-3", source: "2", target: "3", animated: true },
    { id: "e2-4", source: "2", target: "4", animated: true },
    { id: "e2-5", source: "2", target: "5", animated: true },
    { id: "e2-6", source: "2", target: "6", animated: true },
    { id: "e7-8", source: "7", target: "8", animated: true },
    { id: "e7-9", source: "7", target: "9", animated: true },
    { id: "e2-10", source: "2", target: "10", animated: true },
    { id: "10-11", source: "10", target: "11", animated: true },
    { id: "10-12", source: "10", target: "12", animated: true },
    { id: "10-13", source: "10", target: "13", animated: true },
    { id: "e7-14", source: "7", target: "14", animated: true },
    { id: "14-15", source: "14", target: "15", animated: true },
    { id: "e2-16", source: "2", target: "16", animated: true },
    { id: "16-17", source: "16", target: "17", animated: true },
    { id: "16-18", source: "16", target: "18", animated: true },
    { id: "16-19", source: "16", target: "19", animated: true },
    { id: "e7-20", source: "7", target: "20", animated: true },
    { id: "20-21", source: "20", target: "21", animated: true },
];

// Function to handle download action (not implemented yet)
const downloadFlow = () => {
    console.log("Download feature coming soon!");
};

// Main component
const NodeExpressGuide = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    return (
        <div className="relative w-full min-h-screen text-black">
            <div className="flex p-3 text-gray-200 rounded-md shadow-md">
                <p className="mb-2 text-sm">
                    <span className="text-base font-semibold text-purple-600">Note:</span>{" "}
                    Adjust the flow, zoom in/out, and explore each topic. Download feature is coming soon!
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
                                <div style={{ display: "flex", alignItems: "center", fontWeight: 'bold' }}> {/* Added bold font */}
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
                // Add any animation speed prop here if supported (consult documentation for options)
                >
                    <Background />
                    <Controls />
                </ReactFlow>
            </div>
        </div>
    );
};

export default NodeExpressGuide;
