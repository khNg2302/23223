import { ParentComponent } from "@/types/common/ParentComponent";
import { FC } from "react";

const CustomReportLayout: FC<ParentComponent> = ({ children }) => {
  return <div className="flex flex-col h-screen">{children}</div>;
};

export default CustomReportLayout;
