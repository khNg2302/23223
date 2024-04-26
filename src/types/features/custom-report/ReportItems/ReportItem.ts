import { DropItemProps } from "@/types/classes/DropDocument/DropItem";
import { ParentComponent } from "@/types/common/ParentComponent";
import { Dispatch, SetStateAction } from "react";
interface ReportItemComponentProps extends ParentComponent, DropItemProps {
  indexItemMovingTo: number;
  isActiveMoveItem: boolean;
  indexDropItem: number;
  indexDragItem: number;
  handleSetIndexItemMovingTo: Dispatch<SetStateAction<number>>;
}

export type { ReportItemComponentProps };
