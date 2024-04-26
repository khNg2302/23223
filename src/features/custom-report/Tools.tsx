"use client";
import Drag from "@/classes/drag-and-drop/Drag";
import ToolItem from "./Tools/ToolItem";

const Tools = () => {
  const { setDragData } = Drag<>();
  return (
    <div className="flex flex-wrap">
      <ToolItem item={{name:'text'}} setDragData={setDragData}>
        <p>Text</p>
      </ToolItem>
      <p>Image</p>
      <p>Table</p>
      <p>Rows</p>
    </div>
  );
};

export default Tools;
