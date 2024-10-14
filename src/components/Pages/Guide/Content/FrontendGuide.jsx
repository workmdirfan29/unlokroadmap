import React from "react";
import { ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 140 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export default function FrontendGuide() {
  return (
    <div id="Wrapper" className="w-full min-h-screen border">
      <div style={{ width: "100vw", height: "100vh" }}>
        <ReactFlow nodes={initialNodes} edges={initialEdges} />
      </div>
    </div>
  );
}
