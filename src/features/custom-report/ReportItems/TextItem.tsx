import ReportItem from "./ReportItem";
import { FC } from "react";
import { ReportItemComponentProps } from "@/types/features/custom-report/ReportItems/ReportItem";

const TextItem: FC< Omit<ReportItemComponentProps,'children'>> = (props) => {
  return (
    <ReportItem {...props}>
      <div className="w-full h-full bg-slate-400">Text</div>
    </ReportItem>
  );
};

export default TextItem;
