import DropItem from "@/classes/DropDocument/DropItem";
import { ReportItemComponentProps } from "@/types/features/custom-report/ReportItems/ReportItem";
import { DragEvent, FC } from "react";

const ReportItem: FC<ReportItemComponentProps> = ({
  children,
  isActiveMoveItem,
  indexItemMovingTo,
  indexDropItem,
  indexDragItem,
  handleSetIndexItemMovingTo,
  handleSetActiveMoveItem,
  handleSetDragItem,
}) => {
  const {
    setActiveMoveItem,
    getDragData,
    ableDrop,
    setDragIndexItem,
    setDragData,
  } = DropItem({
    handleSetActiveMoveItem,
    handleSetDragItem,
  });

  const dragItem = (e: DragEvent) => {
    setDragData(e, indexDropItem);
  };

  const dragEnd = () => {
    handleSetActiveMoveItem(false);
    handleSetIndexItemMovingTo(-1);
    handleSetDragItem(-1);
  };

  const onMoveMode = () => {
    setActiveMoveItem();
    setDragIndexItem(indexDropItem);
  };
  return (
    <>
      <div className="relative w-[200px] h-[100px] flex items-center justify-center resize overflow-auto">
        {!isActiveMoveItem && (
          <div className="absolute w-full h-full flex flex-col items-center justify-center z-50 opacity-0 hover:opacity-100 duration-75">
            <h6 onMouseDown={onMoveMode}>Move</h6>
            <h6>Edit</h6>
          </div>
        )}
        <div
          className={`${
            isActiveMoveItem && indexDragItem === indexDropItem
              ? "cursor-move"
              : "cursor-default"
          } w-full h-full flex relative justify-end `}
          draggable={isActiveMoveItem && indexDragItem === indexDropItem}
          onDragStart={dragItem}
          onDragEnd={dragEnd}
        >
          {isActiveMoveItem && (
            <div
              onDragOver={
                indexDragItem === indexDropItem ? undefined : ableDrop
              }
              onDragEnter={() => handleSetIndexItemMovingTo(indexDropItem)}
              className="absolute w-full h-full border border-orange-400 bg-white z-0"
            >
              move to here
            </div>
          )}
          <div
            className={`${isActiveMoveItem ? "pointer-events-none" : ""} ${
              indexDropItem === indexItemMovingTo &&
              indexDragItem !== indexDropItem
                ? "w-[50%]"
                : "w-full"
            } h-full z-10 duration-75`}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportItem;
