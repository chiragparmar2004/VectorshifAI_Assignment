import { Handle, Position } from "reactflow";
import AbstractNode from "./baseNode";

export const LLMNode = ({ id, data }) => {
  const handles = [
    {
      type: "target",
      position: Position.Left,
      id: `${id}-system`,
      style: { top: `${100 / 3}%` },
    },
    {
      type: "target",
      position: Position.Left,
      id: `${id}-prompt`,
      style: { top: `${200 / 3}%` },
    },
    { type: "source", position: Position.Right, id: `${id}-response` },
  ];

  return (
    <AbstractNode id={id} type="LLM" handles={handles}>
      <span>This is a LLM Node.</span>
    </AbstractNode>
  );
};

export default LLMNode;
