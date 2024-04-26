import { DrapClass } from "@/types/classes/DrapAndDrop/DragInterface";

const Drag: DrapClass = () => ({
  setDragData: (e, data) => {
    e.dataTransfer.setData("data", JSON.stringify(data));
  },
});

export default Drag;
