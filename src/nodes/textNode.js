import React, { useState, useEffect, useRef } from "react";
import { Handle, Position, useUpdateNodeInternals } from "reactflow";
import AbstractNode from "./baseNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [height, setHeight] = useState(100); // Initial height
  const maxHeight = 200; // Maximum height for textarea
  const [variableHandles, setVariableHandles] = useState([]);

  const inputRef = useRef(null);
  const updateNodeInternals = useUpdateNodeInternals();

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  useEffect(() => {
    const variablePattern = /\{\{\s*(\w+)\s*\}\}/g;
    const variableMatches = [...currText.matchAll(variablePattern)].map(
      (match, index) => ({
        type: "target",
        position: Position.Left,
        id: `${id}-${match[1]}-${index}`, // Ensure unique key by appending index
        data: { label: match[1] },
        style: {
          top: `${
            (index + 1) * (90 / (currText.match(variablePattern)?.length || 1))
          }%`,
          // left: -8,
        },
      })
    );

    setVariableHandles(variableMatches);
  }, [currText, id]);

  const handles = [
    {
      type: "source",
      position: Position.Right,
      id: `${id}-output`,
    },
    ...variableHandles,
  ];

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const adjustHeight = () => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      const newHeight = Math.min(inputRef.current.scrollHeight, maxHeight);
      inputRef.current.style.height = `${newHeight}px`;
      setHeight(newHeight);
      updateNodeInternals(id); // Update node internals after adjusting height
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [currText]);

  return (
    <AbstractNode id={id} type="Text" handles={handles} style={{ width: 200 }}>
      <label className="text-gray-500 block">
        Text:
        <textarea
          className="border-[1px] rounded-md border-gray-300 focus:border-purple-500 focus:ring-purple-500"
          ref={inputRef}
          value={currText}
          onChange={handleTextChange}
          style={{
            width: "98%",
            resize: "none",
            overflowY: height >= maxHeight ? "scroll" : "hidden",
          }}
          rows={1}
        />
      </label>
    </AbstractNode>
  );
};

export default TextNode;
