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
        position: { x: 400, y: 0 },
        data: { label: "Backend Development", icon: "🔙" },
    },
    {
        id: "2",
        position: { x: 200, y: 100 },
        data: { label: "Node.js", icon: "🌐" },
    },
    {
        id: "3",
        position: { x: 100, y: 200 },
        data: { label: "Node.js Basics", icon: "📖" },
    },
    {
        id: "4",
        position: { x: 300, y: 200 },
        data: { label: "Asynchronous Programming", icon: "🔄" },
    },
    {
        id: "5",
        position: { x: 600, y: 100 },
        data: { label: "Express.js", icon: "📦" },
    },
    {
        id: "6",
        position: { x: 500, y: 200 },
        data: { label: "Middleware", icon: "⚙️" },
    },
    {
        id: "7",
        position: { x: 700, y: 200 },
        data: { label: "Routing", icon: "🗺️" },
    },
    {
        id: "8",
        position: { x: 600, y: 300 },
        data: { label: "REST APIs", icon: "🖥️" },
    },
    {
        id: "9",
        position: { x: 400, y: 100 },
        data: { label: "MongoDB", icon: "📊" },
    },
    {
        id: "10",
        position: { x: 300, y: 300 },
        data: { label: "CRUD Operations", icon: "🛠️" },
    },
    {
        id: "11",
        position: { x: 500, y: 300 },
        data: { label: "Mongoose", icon: "🔗" },
    },
    {
        id: "12",
        position: { x: 600, y: 400 },
        data: { label: "Schema Design", icon: "📄" },
    },
    {
        id: "13",
        position: { x: 400, y: 500 },
        data: { label: "Authentication", icon: "🔑" },
    },
    {
        id: "14",
        position: { x: 300, y: 600 },
        data: { label: "JWT", icon: "🔐" },
    },
    {
        id: "15",
        position: { x: 400, y: 600 },
        data: { label: "OAuth", icon: "🔒" },
    },
    {
        id: "16",
        position: { x: 500, y: 600 },
        data: { label: "Error Handling", icon: "❗" },
    },
    {
        id: "17",
        position: { x: 400, y: 700 },
        data: { label: "Testing", icon: "✅" },
    },
    {
        id: "18",
        position: { x: 400, y: 800 },
        data: { label: "Deployment", icon: "🚀" },
    },
    {
        id: "19",
        position: { x: 300, y: 900 },
        data: { label: "Heroku", icon: "🌍" },
    },
    {
        id: "20",
        position: { x: 400, y: 900 },
        data: { label: "AWS", icon: "☁️" },
    },
    {
        id: "21",
        position: { x: 500, y: 900 },
        data: { label: "Docker", icon: "🐳" },
    },
];

const initialEdges = [
    { id: "e1-2", source: "1", target: "2", animated: true },
    { id: "e1-5", source: "1", target: "5", animated: true },
    { id: "e1-9", source: "1", target: "9", animated: true },
    { id: "e2-3", source: "2", target: "3", animated: true },
    { id: "e2-4", source: "2", target: "4", animated: true },
    { id: "e5-6", source: "5", target: "6", animated: true },
    { id: "e5-7", source: "5", target: "7", animated: true },
    { id: "e5-8", source: "5", target: "8", animated: true },
    { id: "e9-10", source: "9", target: "10", animated: true },
    { id: "e9-11", source: "9", target: "11", animated: true },
    { id: "e11-12", source: "11", target: "12", animated: true },
    { id: "e1-13", source: "1", target: "13", animated: true },
    { id: "e13-14", source: "13", target: "14", animated: true },
    { id: "e13-15", source: "13", target: "15", animated: true },
    { id: "e13-16", source: "13", target: "16", animated: true },
    { id: "e16-17", source: "16", target: "17", animated: true },
    { id: "e17-18", source: "17", target: "18", animated: true },
    { id: "18-19", source: "18", target: "19", animated: true },
    { id: "18-20", source: "18", target: "20", animated: true },
    { id: "18-21", source: "18", target: "21", animated: true },
];

const downloadFlow = async () => {
    console.log("Download feature coming soon!");
};

export default function BackendGuide() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    return (
        <div id="Wrapper" className="relative w-full min-h-screen text-black">
            <div className="flex mb-4 text-white rounded-md shadow-md">
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
            <div style={{ width: "970px", height: "800px" }}>
                <ReactFlow
                    nodes={nodes.map((node) => ({
                        ...node,
                        data: {
                            label: (
                                <div style={{ display: "flex", alignItems: "center", fontSize: "16px" }}>
                                    <span style={{ marginRight: "8px" }}>{node.data.icon}</span>
                                    <strong>{node.data.label}</strong>
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
