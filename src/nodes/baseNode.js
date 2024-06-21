import React from "react";
import { Handle } from "reactflow";

const AbstractNode = ({ id, type, handles, children, style }) => {
  return (
    <div
      style={{
        border: "1px solid #6366f1",
        padding: "8px",
        borderRadius: "15px",
        width: "200px",
        ...style,
      }}
    >
      <div>
        <span>{type}</span>
      </div>
      <div>{children}</div>
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={handle.style}
        />
      ))}
    </div>
  );
};

export default AbstractNode;
