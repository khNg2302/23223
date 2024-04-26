import { DropItemClass } from "@/types/classes/DropDocument/DropItem";
import Drag from "../drag-and-drop/Drag";
import Drop from "../drag-and-drop/Drop";

const DropItem: DropItemClass = ({
  handleSetActiveMoveItem,
  handleSetDragItem,
}) => ({
  ...Drag(),
  ...Drop(),
  setActiveMoveItem: () => {
    handleSetActiveMoveItem(true);
  },
  setDragIndexItem: (indexDropItem) => {
    handleSetDragItem(indexDropItem);
  }
});

export default DropItem;
