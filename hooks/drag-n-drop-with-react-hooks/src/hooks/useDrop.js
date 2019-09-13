import { useState, useEffect } from "react";

const useDrop = ({ ref, onDrop }) => {
  const [dropState, updateDropState] = useState("droppable");
  const dropOverCb = ev => {
    ev.preventDefault();
    updateDropState("dragging over");
  };

  const dropCb = ev => {
    ev.preventDefault();
    onDrop(ev.dataTransfer.getData("source"));
    updateDropState("dropped");
  };
  useEffect(() => {
    const elem = ref.current;
    if (elem) {
      elem.addEventListener("dragover", dropOverCb);
      elem.addEventListener("drop", dropCb);
      return () => {
        elem.removeEventListener("dragover", dropOverCb);
        elem.removeEventListener("drop", dropCb);
      };
    }
  });
  return {
    dropState
  };
};

export default useDrop;
