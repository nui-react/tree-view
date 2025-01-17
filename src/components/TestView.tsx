import React from "react";
import "../styles/treeView.css";
import { CirclePointer, TreeViewItem, TreeViewItemContainer } from "./TreeView";

export interface TestViewProps {
  header: string;
  children?: React.ReactNode;
}

const TestView: React.FC<TestViewProps> = ({ header, children }) => {
  return (
    <div className="treeViewPanel">
      <CirclePointer header={header} />
      <TreeViewItemContainer>
        <TreeViewItem title="my tree view 1"></TreeViewItem>
      </TreeViewItemContainer>
      <TreeViewItemContainer>
        <TreeViewItem title="my tree view 2"></TreeViewItem>
      </TreeViewItemContainer>
      {children}
    </div>
  );
};

export default TestView;
