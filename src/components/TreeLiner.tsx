import React from "react";
import "../styles/treeView.css";
import { TreeTreeLinerProps } from "../types/componentTypes";

const TreeLiner: React.FC<TreeTreeLinerProps> = ({
  color = "rgba(0, 240, 255, 0.502)",
}) => {
  return (
    <hr
      className="treeViewExpanderBodyLiner"
      style={{ borderTopColor: color }}
    />
  );
};

export default TreeLiner;
