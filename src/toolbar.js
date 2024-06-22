import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-gray-700">
        Pipeline Toolbar
      </h3>
      <div className="flex flex-wrap gap-4">
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="dateInput" label="Date Input" />
        <DraggableNode type="colorInput" label="Color Input" />
        <DraggableNode type="dropdown" label="Dropdown" />
        <DraggableNode type="slider" label="Slider" />
        <DraggableNode type="toggleSwitch" label="Toggle Switch" />
      </div>
    </div>
  );
};
