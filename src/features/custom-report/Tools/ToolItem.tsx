import { ToolItemInterface } from "@/types/features/custom-report/Tools/ToolItem";
import { DragEvent, FC } from "react";

const ToolItem: FC<ToolItemInterface<>> = ({ children, item, setDragData }) => {
  const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
    setDragData(e, item);
  };
  return (
    <div className="p-5 border border-transparent hover:border-black duration-75" draggable onDragStart={handleDragStart}>
      {children}
    </div>
  );
};

export default ToolItem;
