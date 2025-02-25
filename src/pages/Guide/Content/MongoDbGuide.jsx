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
        data: { label: "MongoDB Roadmap", icon: "📚" },
    },

    // Day 1: Introduction to MongoDB (Left)
    {
        id: "2",
        position: { x: 240, y: 100 },
        data: { label: "Day 1: Introduction to MongoDB", icon: "🌅" },
    },
    {
        id: "3",
        position: { x: 100, y: 200 },
        data: { label: "What is MongoDB?", icon: "📝" },
    },
    {
        id: "4",
        position: { x: 400, y: 200 },
        data: { label: "Benefits of MongoDB", icon: "📑" },
    },

    // Day 2: Setting Up MongoDB (Right)
    {
        id: "5",
        position: { x: 720, y: 100 },
        data: { label: "Day 2: Setting Up MongoDB", icon: "🔧" },
    },
    {
        id: "6",
        position: { x: 600, y: 200 },
        data: { label: "Installing MongoDB", icon: "📦" },
    },
    {
        id: "7",
        position: { x: 840, y: 200 },
        data: { label: "Connecting to MongoDB", icon: "⚙️" },
    },

    // Day 3: CRUD Operations (Left)
    {
        id: "8",
        position: { x: 240, y: 300 },
        data: { label: "Day 3: CRUD Operations", icon: "🔠" },
    },
    {
        id: "9",
        position: { x: 100, y: 400 },
        data: { label: "Create Documents", icon: "📝" },
    },
    {
        id: "10",
        position: { x: 400, y: 400 },
        data: { label: "Read Documents", icon: "📖" },
    },
    {
        id: "11",
        position: { x: 100, y: 500 },
        data: { label: "Update Documents", icon: "🔄" },
    },
    {
        id: "12",
        position: { x: 400, y: 500 },
        data: { label: "Delete Documents", icon: "🗑️" },
    },

    // Day 4: Data Modeling (Right)
    {
        id: "13",
        position: { x: 720, y: 300 },
        data: { label: "Day 4: Data Modeling", icon: "🛠️" },
    },
    {
        id: "14",
        position: { x: 600, y: 400 },
        data: { label: "Schemas and Collections", icon: "📂" },
    },

    // Day 5: Aggregation Framework (Left)
    {
        id: "15",
        position: { x: 240, y: 600 },
        data: { label: "Day 5: Aggregation Framework", icon: "📊" },
    },
    {
        id: "16",
        position: { x: 100, y: 700 },
        data: { label: "Aggregation Pipeline", icon: "🔗" },
    },

    // Day 6: Indexing (Right)
    {
        id: "17",
        position: { x: 720, y: 600 },
        data: { label: "Day 6: Indexing", icon: "🔍" },
    },
    {
        id: "18",
        position: { x: 600, y: 700 },
        data: { label: "Creating Indexes", icon: "🆕" },
    },

    // Day 7: Data Validation (Left)
    {
        id: "19",
        position: { x: 240, y: 800 },
        data: { label: "Day 7: Data Validation", icon: "✅" },
    },
    {
        id: "20",
        position: { x: 100, y: 900 },
        data: { label: "Schema Validation", icon: "🛡️" },
    },

    // Day 8: Aggregation Operators (Right)
    {
        id: "21",
        position: { x: 720, y: 800 },
        data: { label: "Day 8: Aggregation Operators", icon: "🔢" },
    },
    {
        id: "22",
        position: { x: 600, y: 900 },
        data: { label: "Common Operators", icon: "⚙️" },
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
    { id: "8-11", source: "8", target: "11", animated: true },
    { id: "8-12", source: "8", target: "12", animated: true },

    // Day 4
    { id: "e5-13", source: "5", target: "13", animated: true },
    { id: "13-14", source: "13", target: "14", animated: true },

    // Day 5
    { id: "e2-15", source: "2", target: "15", animated: true },
    { id: "15-16", source: "15", target: "16", animated: true },

    // Day 6
    { id: "e5-17", source: "5", target: "17", animated: true },
    { id: "17-18", source: "17", target: "18", animated: true },

    // Day 7
    { id: "e2-19", source: "2", target: "19", animated: true },
    { id: "19-20", source: "19", target: "20", animated: true },

    // Day 8
    { id: "e5-21", source: "5", target: "21", animated: true },
    { id: "21-22", source: "21", target: "22", animated: true },

    // Additional edges can be added here
];

const downloadFlow = async () => {
    console.log("Download feature coming soon!");
};

const MongoDbGuide = () => {
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

export default MongoDbGuide;
