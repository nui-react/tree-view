import React from "react";
import "../styles/treeView.css";
import { TreeViewProps } from "../types/componentTypes";
import CirclePointer from "./CirclePointer";

const TreeView: React.FC<TreeViewProps> = ({
  header,
  theme = "dark",
  children,
}) => {
  return (
    <div className={`treeViewPanel ${theme === "light" ? "lightTheme" : ""}`}>
      <CirclePointer header={header} />
      {children}
    </div>
  );
};

export default TreeView;
