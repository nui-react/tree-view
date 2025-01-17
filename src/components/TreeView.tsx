import React from "react";
import "../styles/treeView.css";
import {
  CirclePointerProps,
  TreeViewItemContainerProps,
  TreeViewItemProps,
  TreeViewProps,
} from "../types";

const TreeView: React.FC<TreeViewProps> = ({ header, children }) => {
  return (
    <div className="treeViewPanel">
      <CirclePointer header={header} />
      {children}
    </div>
  );
};

export default TreeView;

export const CirclePointer: React.FC<CirclePointerProps> = ({ header }) => {
  return (
    <div className="treeViewHeaderPanel">
      <span className="treeViewHeaderDot">
        <div className="outerCircle">
          <div className="middleCircle">
            <div className="innerCircle" />
          </div>
        </div>
      </span>
      <span className="connectorHeaderVerticalLine" />
      <span className="treeViewHeader"> {header} </span>
    </div>
  );
};

export const TreeViewItem: React.FC<TreeViewItemProps> = ({
  title,
  children,
}) => {
  return (
    <div className="treeViewTechPanel">
      <div className="treeViewTechPanelHeader"> {title} </div>
      {children && (
        <div className="treeViewTechPanelItems mx-3">{children}</div>
      )}
    </div>
  );
};

export const TreeViewItemContainer: React.FC<TreeViewItemContainerProps> = ({
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
