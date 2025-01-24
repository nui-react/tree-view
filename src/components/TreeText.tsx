import React from "react";
import "../styles/treeView.css";
import { TreeTextProps } from "../types/componentTypes";

const TreeText: React.FC<TreeTextProps> = ({ text }) => {
  return (
    <div className="treeText">
      {text}
    </div>
  );
};

export default TreeText;
