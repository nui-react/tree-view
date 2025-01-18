import React from "react";
import "../styles/treeView.css";
import { TreeViewItemProps } from "../types/componentTypes";

const TreeViewExpander: React.FC<TreeViewItemProps> = ({ title, children }) => {
  return (
    <div className="treeViewTechPanel">
      <div className="treeViewTechPanelHeader"> {title} </div>
      {children && (
        <div
          className={`treeViewTechPanelItems`}
          style={{ paddingLeft: "10px", paddingRight: "10px" }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default TreeViewExpander;
