import { Dispatch, SetStateAction } from "react";
import { DropInterface } from "../DrapAndDrop/DropInterface";

type PositionMoveDropItem = "begin" | "end" | "between";
type TargetToAtBetweenMoveItem = number

interface DropDocumentInterface<Data> extends DropInterface<Data> {
  addItemToDocument: (item: Data) => void;
  deleteItemFromDocument: (indexItem: number) => void;
  moveItem: (
    indexItem: number,
    position: PositionMoveDropItem,
    targetStartAtBetween?: TargetToAtBetweenMoveItem
  ) => void;
}

interface DropDocumentClassProps<Data> {
  handleSetAction: Dispatch<SetStateAction<Data[]>>;
}

type DropDocumentClass = <Data>(
  props: DropDocumentClassProps<Data>
) => DropDocumentInterface<Data>;

export type {
  PositionMoveDropItem,
  DropDocumentClass,
  DropDocumentInterface,
  DropDocumentClassProps,
};
