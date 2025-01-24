import React from "react";
import "../styles/treeView.css";
import { TreeHeaderProps } from "../types/componentTypes";
import TreeText from "./TreeText";

const TreeHeader: React.FC<TreeHeaderProps> = ({ header }) => {
  return (
    <div className="treeHeader">
      <TreeText text={header} />
    </div>
  );
};

export default TreeHeader;
