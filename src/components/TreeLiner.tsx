import React from "react";
import "../styles/treeView.css";
import { TreeLinerProps } from "../types/componentTypes";

/**
 * @description TreeLiner component that renders a horizontal line (a "liner") within the expandable body of a tree view.
 * It's used to visually separate content within the expanded section.
 *
 * @param {string} [color="rgba(0, 240, 255, 0.502)"] - The color of the line. Defaults to rgba(0, 240, 255, 0.502) (a semi-transparent light blue.)
 *
 * @example
 * <TreeLiner />
 * 
 * @example
 * <TreeLiner color="red" />
 */

const TreeLiner: React.FC<TreeLinerProps> = ({
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
