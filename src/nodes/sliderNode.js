import React, { useState } from "react";
import { Handle, Position } from "reactflow";
import AbstractNode from "./baseNode";

const SliderNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customSlider-", "slider_")
  );
  const [min, setMin] = useState(data.min || 0);
  const [max, setMax] = useState(data.max || 100);
  const [step, setStep] = useState(data.step || 1);

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleMinChange = (e) => {
    setMin(e.target.value);
  };

  const handleMaxChange = (e) => {
    setMax(e.target.value);
  };

  const handleStepChange = (e) => {
    setStep(e.target.value);
  };

  const handles = [
    { type: "source", position: Position.Right, id: `${id}-value` },
  ];

  return (
    <AbstractNode id={id} type="Slider" handles={handles}>
      <label>
        Name:
        <input type="text" value={currName} onChange={handleNameChange} />
      </label>
      <label>
        Min:
        <input type="number" value={min} onChange={handleMinChange} />
      </label>
      <label>
        Max:
        <input type="number" value={max} onChange={handleMaxChange} />
      </label>
      <label>
        Step:
        <input type="number" value={step} onChange={handleStepChange} />
      </label>
    </AbstractNode>
  );
};

export default SliderNode;
