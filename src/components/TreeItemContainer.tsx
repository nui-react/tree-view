import React from "react";
import "../styles/treeView.css";
import { TreeItemContainerProps } from "../types/componentTypes";

/**
 * @description TreeItemContainer component acts as the wrapper for the TreeItem & TreeExpander components.
 *
 * @param {React.ReactNode} children - The content to be rendered within the tree item container.  This is typically
 * the `TreeItem` component itself or other nested tree structures.
 *
 * @example
 * <TreeItemContainer>
 *   <TreeItem title="My Item">...</TreeItem>
 * </TreeItemContainer>
 */

const TreeItemContainer: React.FC<TreeItemContainerProps> = ({
  children,
}) => {
  return (
    <div className="treeViewItem">
      <span className="connectorVerticalLine" />
      <span className="itemConnector">
        <div className="connectorDot" />
        <div className="connectorHorizantalLine" />
      </span>
      <span className="treeViewItemCard">{children}</span>
    </div>
  );
};

export default TreeItemContainer;
