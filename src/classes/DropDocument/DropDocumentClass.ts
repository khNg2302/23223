import { DropDocumentClass } from "@/types/classes/DropDocument/DropDocumentInterface";
import Drop from "../drag-and-drop/Drop";

const DropDocument: DropDocumentClass = ({ handleSetAction }) => ({
  ...Drop(),
  addItemToDocument: (item) => {
    handleSetAction((prev) => [...prev, item]);
  },
  deleteItemFromDocument: (indexItem) => {
    handleSetAction((prev) => [...prev.slice(indexItem, 1)]);
  },
  moveItem: (indexItem, position, targetStartAtBetween) => {
    handleSetAction((prev) => {
      const reportSlicedMovedItem = prev.slice(indexItem, 1);
      if (position === "begin")
        return [prev[indexItem], ...reportSlicedMovedItem];
      if (position === "end")
        return [...reportSlicedMovedItem, prev[indexItem]];
      if (position === "between")
        return [
          ...reportSlicedMovedItem.splice(
            targetStartAtBetween as number,
            0,
            prev[indexItem]
          ),
        ];
      return prev;
    });
  },
});

export default DropDocument;
