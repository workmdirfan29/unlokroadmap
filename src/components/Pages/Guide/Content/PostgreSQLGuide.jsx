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
        data: { label: "PostgreSQL Roadmap", icon: "📚" },
    },

    // Day 1: Introduction to PostgreSQL (Left)
    {
        id: "2",
        position: { x: 240, y: 100 },
        data: { label: "Day 1: Introduction to PostgreSQL", icon: "🌅" },
    },
    {
        id: "3",
        position: { x: 100, y: 200 },
        data: { label: "What is PostgreSQL?", icon: "📝" },
    },
    {
        id: "4",
        position: { x: 400, y: 200 },
        data: { label: "Benefits of PostgreSQL", icon: "📑" },
    },

    // Day 2: Setting Up PostgreSQL (Right)
    {
        id: "5",
        position: { x: 720, y: 100 },
        data: { label: "Day 2: Setting Up PostgreSQL", icon: "🔧" },
    },
    {
        id: "6",
        position: { x: 600, y: 200 },
        data: { label: "Installing PostgreSQL", icon: "📦" },
    },
    {
        id: "7",
        position: { x: 840, y: 200 },
        data: { label: "Connecting to PostgreSQL", icon: "⚙️" },
    },

    // Day 3: Basic SQL Commands (Left)
    {
        id: "8",
        position: { x: 240, y: 300 },
        data: { label: "Day 3: Basic SQL Commands", icon: "🔠" },
    },
    {
        id: "9",
        position: { x: 100, y: 400 },
        data: { label: "SELECT Statements", icon: "📖" },
    },
    {
        id: "10",
        position: { x: 400, y: 400 },
        data: { label: "INSERT Statements", icon: "➕" },
    },
    {
        id: "11",
        position: { x: 100, y: 500 },
        data: { label: "UPDATE Statements", icon: "🔄" },
    },
    {
        id: "12",
        position: { x: 400, y: 500 },
        data: { label: "DELETE Statements", icon: "🗑️" },
    },

    // Day 4: Data Types and Functions (Right)
    {
        id: "13",
        position: { x: 720, y: 300 },
        data: { label: "Day 4: Data Types and Functions", icon: "🛠️" },
    },
    {
        id: "14",
        position: { x: 600, y: 400 },
        data: { label: "Common Data Types", icon: "📂" },
    },
    {
        id: "15",
        position: { x: 600, y: 500 },
        data: { label: "Built-in Functions", icon: "🔢" },
    },

    // Day 5: Advanced SQL Queries (Left)
    {
        id: "16",
        position: { x: 240, y: 600 },
        data: { label: "Day 5: Advanced SQL Queries", icon: "📊" },
    },
    {
        id: "17",
        position: { x: 100, y: 700 },
        data: { label: "JOIN Operations", icon: "🔗" },
    },
    {
        id: "18",
        position: { x: 400, y: 700 },
        data: { label: "Subqueries", icon: "🔍" },
    },
    {
        id: "19",
        position: { x: 600, y: 700 },
        data: { label: "Window Functions", icon: "📈" },
    },

    // Day 6: Indexing (Right)
    {
        id: "20",
        position: { x: 720, y: 600 },
        data: { label: "Day 6: Indexing", icon: "🔍" },
    },
    {
        id: "21",
        position: { x: 600, y: 700 },
        data: { label: "Creating Indexes", icon: "🆕" },
    },

    // Day 7: Transactions (Left)
    {
        id: "22",
        position: { x: 240, y: 800 },
        data: { label: "Day 7: Transactions", icon: "✅" },
    },
    {
        id: "23",
        position: { x: 100, y: 900 },
        data: { label: "ACID Properties", icon: "⚖️" },
    },

    // Day 8: Data Security (Right)
    {
        id: "24",
        position: { x: 720, y: 800 },
        data: { label: "Day 8: Data Security", icon: "🔒" },
    },
    {
        id: "25",
        position: { x: 600, y: 900 },
        data: { label: "User Roles and Permissions", icon: "🔑" },
    },

    // Day 9: Backup and Restore (Left)
    {
        id: "26",
        position: { x: 240, y: 1000 },
        data: { label: "Day 9: Backup and Restore", icon: "💾" },
    },
    {
        id: "27",
        position: { x: 100, y: 1100 },
        data: { label: "pg_dump and pg_restore", icon: "🔄" },
    },

    // Day 10: PostgreSQL Extensions (Right)
    {
        id: "28",
        position: { x: 720, y: 1000 },
        data: { label: "Day 10: PostgreSQL Extensions", icon: "🔧" },
    },
    {
        id: "29",
        position: { x: 600, y: 1100 },
        data: { label: "Using Extensions (e.g., PostGIS)", icon: "🗺️" },
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
    { id: "16-19", source: "16", target: "19", animated: true },

    // Day 6
    { id: "e5-20", source: "5", target: "20", animated: true },
    { id: "20-21", source: "20", target: "21", animated: true },

    // Day 7
    { id: "e2-22", source: "2", target: "22", animated: true },
    { id: "22-23", source: "22", target: "23", animated: true },

    // Day 8
    { id: "e5-24", source: "5", target: "24", animated: true },
    { id: "24-25", source: "24", target: "25", animated: true },

    // Day 9
    { id: "e2-26", source: "2", target: "26", animated: true },
    { id: "26-27", source: "26", target: "27", animated: true },

    // Day 10
    { id: "e5-28", source: "5", target: "28", animated: true },
    { id: "28-29", source: "28", target: "29", animated: true },
];

const downloadFlow = async () => {
    console.log("Download feature coming soon!");
};

const PostgreSQLGuide = () => {
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

export default PostgreSQLGuide;
