import React from "react";
import "../styles/treeView.css";
import { TreeTextProps } from "../types/componentTypes";

/**
 * @description TreeText component that renders text within a tree view, applying specific styling.
 *
 * @param {string} text - The text to display.
 *
 * @example
 * <TreeText text="My Text" />
 */

const TreeText: React.FC<TreeTextProps> = ({
  text,
  varient = "p",
  color = "white",
  className = "",
}) => {
  return (
    <div className={`treeText ${varient} ${color} ${className}`}>{text}</div>
  );
};

export default TreeText;
