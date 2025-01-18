import React from "react";
import "../styles/treeView.css";
import { TreeViewItemContainerProps } from "../types/componentTypes";

const TreeViewItemContainer: React.FC<TreeViewItemContainerProps> = ({
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

export default TreeViewItemContainer;
