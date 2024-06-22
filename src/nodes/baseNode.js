import React from "react";
import { Handle, Position } from "reactflow";

const AbstractNode = ({ id, type, handles, children, style }) => {
  console.log("handles", handles);
  return (
    <div
      className="border-purple-300 border-[1px] p-2 rounded-lg bg-white shadow-md transition-transform transform hover:border-[2px] duration-300"
      style={{
        width: "200px",
        ...style,
      }}
    >
      <div className="font-semibold mb-2 text-purple-500">
        <span>{type}</span>
      </div>
      <div className="w-full">{children}</div>
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          title={handle.id} // This will show the handle id on hover
          style={{
            ...handle.style,
            left: handle.position === Position.Left ? -7 : undefined,
            right: handle.position === Position.Right ? -6 : undefined,
          }}
          className="!w-3 !h-3 !bg-purple-500 !border-[2px] !border-purple-700"
        />
      ))}
    </div>
  );
};

export default AbstractNode;
