import { DragEvent } from "react";

interface DragInterface<Data> {
  setDragData: (e: DragEvent, data: Data) => void;
}

type DrapClass = <Data>() => DragInterface<Data>;

export type { DrapClass, DragInterface };
