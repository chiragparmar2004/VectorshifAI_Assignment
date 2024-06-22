import { useState } from "react";
import AbstractNode from "./baseNode";
import { Handle, Position } from "reactflow";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  const handles = [
    { type: "target", position: Position.Left, id: `${id}-value` },
  ];

  return (
    <AbstractNode id={id} type="Output" handles={handles}>
      <label>
        Name:
        <input
          type="text"
          value={currName}
          onChange={handleNameChange}
          className="w-[99%] border mt-2 p-1 rounded ring-1 ring-purple-300 hover:ring-purple-400  outline-none"
        />
      </label>
      <label className="">
        Type:
        <select
          value={outputType}
          onChange={handleTypeChange}
          className="border mt-2 rounded "
        >
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </label>
    </AbstractNode>
  );
};

export default OutputNode;
