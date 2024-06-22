import React from "react";
import { useStore } from "./store";
// import axios from "axios";

export const SubmitButton = () => {
  const { nodes, edges } = useStore((state) => ({
    nodes: state.nodes,
    edges: state.edges,
  }));

  const handleSubmit = async () => {
    // try {
    //   const response = await axios.post(
    //     "http://localhost:8000/pipelines/parse",
    //     {
    //       nodes,
    //       edges,
    //     }
    //   );
    //   const { num_nodes, num_edges, is_dag } = response.data;
    //   alert(
    //     `Number of Nodes: ${num_nodes}\nNumber of Edges: ${num_edges}\nIs DAG: ${is_dag}`
    //   );
    // } catch (error) {
    //   console.error("Error submitting the pipeline:", error);
    //   alert("An error occurred while submitting the pipeline.");
    // }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};
