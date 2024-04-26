"use client";
import DropDocument from "@/classes/DropDocument/DropDocumentClass";
import { DropDocumentClassProps } from "@/types/classes/DropDocument/DropDocumentInterface";
import { DragEvent, FC, useState } from "react";
import TextItem from "./ReportItems/TextItem";

const ReportWorkPlace = () => {

  const [customReport, setCustomReport] = useState<>([]);
  const [isActiveMoveItem, setActiveMoveItem] = useState<boolean>(false);
  const [indexItemMovingTo, setIndexItemMovingTo] = useState<number>(-1)
  const [indexDragItem, setIndexDragItem] = useState<number>(-1)
  const { getDragData, addItemToDocument, deleteItemFromDocument, ableDrop } =
    DropDocument<>({
      handleSetAction: setCustomReport,
    });
  const handleOnDrop = (e: DragEvent) => {
    const data = getDragData(e);
    addItemToDocument(data);
  };

  const handleDragOver = (e: DragEvent) => {
    ableDrop(e);
  };
  return (
    <div className="w-full flex">
      <TextItem
        isActiveMoveItem={isActiveMoveItem}
        handleSetActiveMoveItem={setActiveMoveItem}
        indexDropItem={0}
        indexItemMovingTo={indexItemMovingTo}
        indexDragItem={indexDragItem}
        handleSetDragItem={setIndexDragItem}
        handleSetIndexItemMovingTo={setIndexItemMovingTo}
      />
      <TextItem
        isActiveMoveItem={isActiveMoveItem}
        handleSetActiveMoveItem={setActiveMoveItem}
        indexDropItem={1}
        indexDragItem={indexDragItem}
        handleSetDragItem={setIndexDragItem}
        indexItemMovingTo={indexItemMovingTo}
        handleSetIndexItemMovingTo={setIndexItemMovingTo}
      />
      <div
        className="w-[200px] border border-slate-600"
        onDrop={handleOnDrop}
        onDragOver={handleDragOver}
      ></div>
    </div>
  );
};

export default ReportWorkPlace;
