import { DropClass } from "@/types/classes/DrapAndDrop/DropInterface";

const Drop: DropClass = () => ({
  getDragData: (e) => {
    return JSON.parse(e.dataTransfer?.getData("data") as string);
  },
  ableDrop: (e) => {
    e.preventDefault();
  },
  getTargetEnter: (e) => {
    return e.currentTarget.id;
  },
});

export default Drop;
