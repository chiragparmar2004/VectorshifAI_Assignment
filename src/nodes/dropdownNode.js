import React, { useState } from "react";
import { Handle, Position } from "reactflow";
import AbstractNode from "./baseNode";

const DropdownNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customDropdown-", "dropdown_")
  );
  const [options, setOptions] = useState(
    data.options || ["Option 1", "Option 2"]
  );

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleOptionsChange = (e) => {
    setOptions(e.target.value.split(","));
  };

  const handles = [
    { type: "source", position: Position.Right, id: `${id}-value` },
  ];

  return (
    <AbstractNode id={id} type="Dropdown" handles={handles}>
      <label>
        Name:
        <input type="text" value={currName} onChange={handleNameChange} />
      </label>
      <label>
        Options (comma separated):
        <input
          type="text"
          value={options.join(",")}
          onChange={handleOptionsChange}
        />
      </label>
    </AbstractNode>
  );
};

export default DropdownNode;
