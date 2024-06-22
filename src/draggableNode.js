import React from "react";

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={`draggable-node ${type} flex items-center justify-center cursor-grab rounded-lg bg-purple-400 p-4 shadow-md hover:bg-purple-700 transition-colors duration-200`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      draggable
    >
      <span className="text-black font-normal">{label}</span>
    </div>
  );
};

export default DraggableNode;
