"use client";

import React, { useCallback, useState, useEffect } from "react";
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  MarkerType,
} from "reactflow";
import "reactflow/dist/style.css";

// Nodi desktop (layout orizzontale)
const desktopNodes = [
  {
    id: "1",
    position: { x: 0, y: 250 },
    data: { label: "🎓 Accademy Betacom\n500 ore Java\n(Maggio 2022)" },
  },
  {
    id: "2",
    position: { x: 300, y: 250 },
    data: { label: "💼 Enel Grid in Betacom\nPrimo progetto" },
  },
  {
    id: "3",
    position: { x: 600, y: 150 },
    data: { label: "🗺️ GISWrapper (Angular)\nTesting rete elettrica Enel" },
  },
  {
    id: "4",
    position: { x: 900, y: 150 },
    data: { label: "🌐 GISViewer (React)\nMicrofrontend per dati geospaziali" },
  },
  {
    id: "5",
    position: { x: 1200, y: 250 },
    data: {
      label:
        "🏨 Blastness (2025)\nSiti hotel di lusso\nUI curata e performante",
    },
  },
  {
    id: "6",
    position: { x: 1500, y: 250 },
    data: {
      label:
        "🚀 Portfolio personale\nNext.js + React\nGrafici, API, autenticazione",
    },
  },
  {
    id: "7",
    position: { x: 600, y: 400 },
    data: { label: "📚 Corsi\nJavaScript & React\nApprofondimenti front-end" },
  },
];

// Nodi mobile (layout verticale logico)
const mobileNodes = [
  {
    id: "1",
    position: { x: 50, y: 0 },
    data: { label: "🎓 Accademy Betacom\n500 ore Java\n(Maggio 2022)" },
  },
  {
    id: "2",
    position: { x: 50, y: 120 },
    data: { label: "💼 Enel Grid in Betacom\nPrimo progetto" },
  },
  {
    id: "7",
    position: { x: 50, y: 240 },
    data: { label: "📚 Corsi\nJavaScript & React\nApprofondimenti front-end" },
  },
  {
    id: "3",
    position: { x: 50, y: 360 },
    data: { label: "🗺️ GISWrapper (Angular)\nTesting rete elettrica Enel" },
  },
  {
    id: "4",
    position: { x: 50, y: 480 },
    data: { label: "🌐 GISViewer (React)\nMicrofrontend per dati geospaziali" },
  },
  {
    id: "5",
    position: { x: 50, y: 600 },
    data: {
      label:
        "🏨 Blastness (2025)\nSiti hotel di lusso\nUI curata e performante",
    },
  },
  {
    id: "6",
    position: { x: 50, y: 720 },
    data: {
      label:
        "🚀 Portfolio personale\nNext.js + React\nGrafici, API, autenticazione",
    },
  },
];

const edges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
    style: { stroke: "#FFD700" },
    markerEnd: { type: MarkerType.ArrowClosed, color: "#FFD700" },
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    animated: true,
    style: { stroke: "#FFD700" },
    markerEnd: { type: MarkerType.ArrowClosed, color: "#FFD700" },
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    animated: true,
    style: { stroke: "#FFD700" },
    markerEnd: { type: MarkerType.ArrowClosed, color: "#FFD700" },
  },
  {
    id: "e4-5",
    source: "4",
    target: "5",
    animated: true,
    style: { stroke: "#FFD700" },
    markerEnd: { type: MarkerType.ArrowClosed, color: "#FFD700" },
  },
  {
    id: "e5-6",
    source: "5",
    target: "6",
    animated: true,
    style: { stroke: "#FFD700" },
    markerEnd: { type: MarkerType.ArrowClosed, color: "#FFD700" },
  },
  {
    id: "e2-7",
    source: "2",
    target: "7",
    animated: true,
    style: { stroke: "#FFA500" },
    markerEnd: { type: MarkerType.ArrowClosed, color: "#FFA500" },
  },
  {
    id: "e7-4",
    source: "7",
    target: "4",
    animated: true,
    style: { stroke: "#FFA500" },
    markerEnd: { type: MarkerType.ArrowClosed, color: "#FFA500" },
  },
];

export default function FlowChart() {
  const [nodes, setNodes, onNodesChange] = useNodesState(desktopNodes);
  const [edgesState, setEdges, onEdgesChange] = useEdgesState(edges);
  const [isMobile, setIsMobile] = useState(false);

  const onConnect = useCallback(
    (params: any) =>
      setEdges(
        addEdge(
          {
            ...params,
            style: { stroke: "#FFD700" },
            markerEnd: { type: MarkerType.ArrowClosed, color: "#FFD700" },
          },
          edgesState
        )
      ),
    [setEdges, edgesState]
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setNodes(isMobile ? mobileNodes : desktopNodes);
  }, [isMobile, setNodes]);

  return (
<div
  style={{
    background: "linear-gradient(135deg, rgba(15,32,39,0.9), rgba(32,58,67,0.5), rgba(44,83,100,0.5))",
    padding: "20px",
    minHeight: "100vh", // assicura che l'intero viewport sia riempito
    boxSizing: "border-box",
    width: "100%",
  }}
>
  <h2
    style={{
      textAlign: "center",
      color: "#FFD700",
      marginBottom: "30px",
      fontSize: "2.2rem",
      fontWeight: 600,
      lineHeight: 1.3,
      textShadow: "0 4px 16px rgba(0,0,0,0.5)",
      background: "transparent",
    }}
  >
    Percorso conseguito in Betacom! 💼
  </h2>

  <div
    style={{
      width: "100%",
      height: "80vh", // altezza fissa visibile per ReactFlow
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 12px 24px rgba(0,0,0,1.5)",
    }}
  >
    <ReactFlow
      nodes={nodes.map((n) => ({
        ...n,
        style: {
          background: "rgba(255, 255, 255, 0.08)",
          border: "2px solid #FFD700",
          borderRadius: "14px",
          padding: "12px 16px",
          color: "#f0e6d2",
          fontWeight: 500,
          fontSize: "0.95rem",
          boxShadow: "0 8px 20px rgba(0,0,0,1)",
          transition: "all 0.3s ease",
        },
      }))}
      edges={edgesState.map((e) => ({
        ...e,
        style: {
          stroke: e.source === "2" && e.target === "7" ? "#FFA500" : "#FFD700",
          strokeWidth: 2,
        },
        animated: true,
      }))}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      minZoom={0.2}
      maxZoom={2}
      style={{ width: "100%", height: "100%" }} // fondamentale per riempire il contenitore
    >
      <Controls />
      <Background gap={20} color="#444" />
    </ReactFlow>
  </div>
</div>

  
  );
  
}
