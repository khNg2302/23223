import { DragInterface } from "@/types/classes/DrapAndDrop/DragInterface";
import { ParentComponent } from "@/types/common/ParentComponent";

interface ToolItemInterface<Data> extends ParentComponent, DragInterface<Data> {
  item: Data;
}

export type { ToolItemInterface };
