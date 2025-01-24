import React from "react";
import "../styles/treeView.css";
import { TreeItemContainerProps } from "../types/componentTypes";

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
