import React from "react";
import "../styles/treeView.css";
import { TreeViewProps } from "../types/componentTypes";
import CirclePointer from "./CirclePointer";

/**
 * @description TreeView component that renders the main container for a tree-view.
 *
 * @param {string} header - The header text to display at the top of the tree view.
 * @param {string} [theme="dark"] - The theme to apply to the tree view.  Can be "light" or "dark". Defaults to "dark".
 * @param {React.ReactNode} children - The tree items and other content to render within the tree view.
 * Allowing the CirclePointer & TreeItemContainer components only as children.
 *
 * @example
 * <TreeView header="Light Themed Tree" theme="light">
 *   <CirclePointer/>
 *   <TreeItemContainer>
 *     <TreeItem title="my tree view 1" />
 *   </TreeItemContainer>
 *   <TreeItemContainer>
 *      <TreeExpander header="Item header" expanded>
 *        <p>Content of item 1.</p>
 *     </TreeExpander>
 *  </TreeItemContainer>
 *  <CirclePointer header={"last header"} showMainConnector={true} setAsLast/>
 * </TreeView>
 *
 */

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
