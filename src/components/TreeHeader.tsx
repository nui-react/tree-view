import React from "react";
import "../styles/treeView.css";
import { TreeHeaderProps } from "../types/componentTypes";
import TreeText from "./TreeText";

/**
 * @description TreeHeader component that renders a text with header styles for the tree structure. This uses the `TreeText` component
 * to display the header text.
 *
 * @param {string} header - The text to display in the header.
 *
 * @example
 * <TreeHeader header="Section Title" />
 */

const TreeHeader: React.FC<TreeHeaderProps> = ({ header }) => {
  return (
    <div className="treeHeader">
      <TreeText text={header} />
    </div>
  );
};

export default TreeHeader;
