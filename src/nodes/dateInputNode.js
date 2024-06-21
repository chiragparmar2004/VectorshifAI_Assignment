import React, { useState } from "react";
import { Handle, Position } from "reactflow";
import AbstractNode from "./baseNode";

const DateInputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customDateInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Date");

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
    <AbstractNode id={id} type="Date Input" handles={handles}>
      <label>
        Name:
        <input type="text" value={currName} onChange={handleNameChange} />
      </label>
      <label>
        Type:
        <select value={inputType} onChange={handleTypeChange}>
          <option value="Date">Date</option>
        </select>
      </label>
    </AbstractNode>
  );
};

export default DateInputNode;
