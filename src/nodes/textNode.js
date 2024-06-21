import { useState } from "react";
import AbstractNode from "./baseNode";
import { Handle, Position } from "reactflow";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const handles = [
    {
      type: "source",
      position: Position.Right,
      id: `${id}-output`,
    },
    {
      type: "target",
      position: Position.Left,
      id: `${id}-output2`,
      style: { top: `${100 / 3}%` },
    },
    {
      type: "target",
      position: Position.Left,
      id: `${id}-output3`,
      style: { top: `${200 / 3}%` },
    },
  ];

  return (
    <AbstractNode id={id} type="Text" handles={handles}>
      <label>
        Text:
        <input type="text" value={currText} onChange={handleTextChange} />
      </label>
    </AbstractNode>
  );
};

export default TextNode;
