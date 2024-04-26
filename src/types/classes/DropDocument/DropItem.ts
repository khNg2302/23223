import { Dispatch, DragEvent, SetStateAction } from "react";
import { DragInterface } from "../DrapAndDrop/DragInterface";
import { DropInterface } from "../DrapAndDrop/DropInterface";

interface DropItemProps {
  handleSetActiveMoveItem: Dispatch<SetStateAction<boolean>>;
  handleSetDragItem: Dispatch<SetStateAction<number>>;
}

interface DropItemInterface<Data>
  extends DragInterface<Data>,
    DropInterface<Data> {
  setActiveMoveItem: () => void;
  setDragIndexItem: (indexDropItem: number) => void;
}

type DropItemClass = <Data>(props: DropItemProps) => DropItemInterface<Data>;

export type { DropItemClass, DropItemProps };
