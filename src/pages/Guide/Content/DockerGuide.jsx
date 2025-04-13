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
        data: { label: "Docker Roadmap", icon: "📚" },
    },

    // Day 1: Introduction to Docker (Left)
    {
        id: "2",
        position: { x: 240, y: 100 },
        data: { label: "Day 1: Introduction to Docker", icon: "🌅" },
    },
    {
        id: "3",
        position: { x: 100, y: 200 },
        data: { label: "What is Docker?", icon: "📝" },
    },
    {
        id: "4",
        position: { x: 400, y: 200 },
        data: { label: "Benefits of Using Docker", icon: "📑" },
    },

    // Day 2: Installing Docker (Right)
    {
        id: "5",
        position: { x: 720, y: 100 },
        data: { label: "Day 2: Installing Docker", icon: "🔧" },
    },
    {
        id: "6",
        position: { x: 600, y: 200 },
        data: { label: "Docker Installation on Windows", icon: "💻" },
    },
    {
        id: "7",
        position: { x: 840, y: 200 },
        data: { label: "Docker Installation on Linux", icon: "🐧" },
    },

    // Day 3: Docker Concepts (Left)
    {
        id: "8",
        position: { x: 240, y: 300 },
        data: { label: "Day 3: Docker Concepts", icon: "🔠" },
    },
    {
        id: "9",
        position: { x: 100, y: 400 },
        data: { label: "Containers vs Virtual Machines", icon: "⚖️" },
    },
    {
        id: "10",
        position: { x: 400, y: 400 },
        data: { label: "Images and Layers", icon: "📦" },
    },
    {
        id: "11",
        position: { x: 100, y: 500 },
        data: { label: "Dockerfile Basics", icon: "📜" },
    },
    {
        id: "12",
        position: { x: 400, y: 500 },
        data: { label: "Docker Compose Overview", icon: "🔄" },
    },

    // Day 4: Managing Docker Containers (Right)
    {
        id: "13",
        position: { x: 720, y: 300 },
        data: { label: "Day 4: Managing Docker Containers", icon: "🛠️" },
    },
    {
        id: "14",
        position: { x: 600, y: 400 },
        data: { label: "Running and Stopping Containers", icon: "⏸️" },
    },
    {
        id: "15",
        position: { x: 600, y: 500 },
        data: { label: "Inspecting Containers", icon: "🔍" },
    },

    // Day 5: Networking in Docker (Left)
    {
        id: "16",
        position: { x: 240, y: 600 },
        data: { label: "Day 5: Networking in Docker", icon: "🌐" },
    },
    {
        id: "17",
        position: { x: 100, y: 700 },
        data: { label: "Docker Networking Basics", icon: "🔗" },
    },
    {
        id: "18",
        position: { x: 400, y: 700 },
        data: { label: "Docker Compose Networking", icon: "📡" },
    },

    // Day 6: Data Management (Right)
    {
        id: "19",
        position: { x: 720, y: 600 },
        data: { label: "Day 6: Data Management", icon: "💾" },
    },
    {
        id: "20",
        position: { x: 600, y: 700 },
        data: { label: "Volumes vs Bind Mounts", icon: "🔒" },
    },

    // Day 7: Docker Registry (Left)
    {
        id: "21",
        position: { x: 240, y: 800 },
        data: { label: "Day 7: Docker Registry", icon: "🔑" },
    },
    {
        id: "22",
        position: { x: 100, y: 900 },
        data: { label: "Using Docker Hub", icon: "🌍" },
    },

    // Day 8: CI/CD with Docker (Right)
    {
        id: "23",
        position: { x: 720, y: 800 },
        data: { label: "Day 8: CI/CD with Docker", icon: "⚙️" },
    },
    {
        id: "24",
        position: { x: 600, y: 900 },
        data: { label: "Integrating Docker with CI/CD Tools", icon: "🔄" },
    },

    // Day 9: Docker Security (Left)
    {
        id: "25",
        position: { x: 240, y: 1000 },
        data: { label: "Day 9: Docker Security", icon: "🔒" },
    },
    {
        id: "26",
        position: { x: 100, y: 1100 },
        data: { label: "Best Practices for Docker Security", icon: "🛡️" },
    },

    // Day 10: Troubleshooting and Best Practices (Right)
    {
        id: "27",
        position: { x: 720, y: 1000 },
        data: { label: "Day 10: Troubleshooting and Best Practices", icon: "🛠️" },
    },
    {
        id: "28",
        position: { x: 600, y: 1100 },
        data: { label: "Common Docker Issues", icon: "❓" },
    },
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
    { id: "8-11", source: "8", target: "11", animated: true },
    { id: "8-12", source: "8", target: "12", animated: true },

    // Day 4
    { id: "e5-13", source: "5", target: "13", animated: true },
    { id: "13-14", source: "13", target: "14", animated: true },
    { id: "13-15", source: "13", target: "15", animated: true },

    // Day 5
    { id: "e2-16", source: "2", target: "16", animated: true },
    { id: "16-17", source: "16", target: "17", animated: true },
    { id: "16-18", source: "16", target: "18", animated: true },

    // Day 6
    { id: "e5-19", source: "5", target: "19", animated: true },
    { id: "19-20", source: "19", target: "20", animated: true },

    // Day 7
    { id: "e2-21", source: "2", target: "21", animated: true },
    { id: "21-22", source: "21", target: "22", animated: true },

    // Day 8
    { id: "e5-23", source: "5", target: "23", animated: true },
    { id: "23-24", source: "23", target: "24", animated: true },

    // Day 9
    { id: "e2-25", source: "2", target: "25", animated: true },
    { id: "25-26", source: "25", target: "26", animated: true },

    // Day 10
    { id: "e5-27", source: "5", target: "27", animated: true },
    { id: "27-28", source: "27", target: "28", animated: true },
];

const downloadFlow = async () => {
    console.log("Download feature coming soon!");
};

const DockerGuide = () => {
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
            <div style={{ width: "960px", height: "580px" }}>
                <ReactFlow
                    nodes={nodes.map((node) => ({
                        ...node,
                        data: {
                            label: (
                                <div style={{ display: "flex", alignItems: "center", fontWeight: "bold" }}>
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

export default DockerGuide;
