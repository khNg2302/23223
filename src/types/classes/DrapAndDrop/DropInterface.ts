import { DragEvent } from "react";

interface DropInterface<Data> {
  getDragData: (e: DragEvent) => Data;
  ableDrop: (e: DragEvent) => void;
  getTargetEnter: (e: DragEvent) => string;
}

type DropClass = <Data>() => DropInterface<Data>;

export type { DropClass, DropInterface };
