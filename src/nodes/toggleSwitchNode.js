import React, { useState } from "react";
import { Handle, Position } from "reactflow";
import AbstractNode from "./baseNode";

const ToggleSwitchNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customToggleSwitch-", "toggle_")
  );
  const [isChecked, setIsChecked] = useState(data.isChecked || false);

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleCheckedChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handles = [
    { type: "source", position: Position.Right, id: `${id}-value` },
  ];

  return (
    <AbstractNode id={id} type="Toggle Switch" handles={handles}>
      <label>
        Name:
        <input type="text" value={currName} onChange={handleNameChange} />
      </label>
      <label>
        Enabled:
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckedChange}
        />
      </label>
    </AbstractNode>
  );
};

export default ToggleSwitchNode;
