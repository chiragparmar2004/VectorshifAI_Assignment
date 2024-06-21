import { useState } from "react";
import { Handle, Position } from "reactflow";
import AbstractNode from "./baseNode";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customNumberInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Number");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  const handles = [
    { type: "source", position: Position.Right, id: `${id}-value` },
  ];

  return (
    <AbstractNode id={id} type="Number Input" handles={handles}>
      <label>
        Name:
        <input type="text" value={currName} onChange={handleNameChange} />
      </label>
      <label>
        Type:
        <select value={inputType} onChange={handleTypeChange}>
          <option value="Number">Number</option>
        </select>
      </label>
    </AbstractNode>
  );
};

export default InputNode;
