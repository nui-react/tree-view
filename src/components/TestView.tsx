import React from "react";
import "../styles/treeView.css";
import TreeView from "./TreeView";
import CirclePointer from "./CirclePointer";
import TreeViewItem from "./TreeViewItem";
import TreeViewItemContainer from "./TreeViewItemContainer";
import TreeBadge from "./TreeBadge";

export interface TestViewProps {
  header: string;
  children?: React.ReactNode;
}

const TestView: React.FC<TestViewProps> = ({ header, children }) => {
  return (
    <TreeView header={header}>
      <CirclePointer header={"test header"} />
      <TreeViewItemContainer>
        <TreeViewItem title="my tree view 1" />
      </TreeViewItemContainer>
      <TreeViewItemContainer>
        <TreeViewItem title="my tree view 1" direction="col">
          hello world...!
        </TreeViewItem>
      </TreeViewItemContainer>
      <TreeViewItemContainer>
        <TreeViewItem
          title="my tree view 2"
          bgGradientSize={25}
          titleWidth={40}
          direction="col"
        >
          <TreeBadge label="my lable" />
          <TreeBadge label="my lable" />
          <TreeBadge label="my lable" />
          <TreeBadge label="my lable" />
          <TreeBadge label="my lable" />
          <TreeBadge label="my lable" />
        </TreeViewItem>
      </TreeViewItemContainer>
      <TreeViewItemContainer>
        <TreeViewItem
          title="my tree view 3"
          bgGradientSize={25}
          titleWidth={40}
          direction="row"
        >
          <TreeBadge label="my lable" />
          <TreeBadge label="my lable" />
          <TreeBadge label="my lable" />
          <TreeBadge label="my lable" />
          <TreeBadge label="my lable" />
          <TreeBadge label="my lable" />
        </TreeViewItem>
      </TreeViewItemContainer>
      <CirclePointer header={"test header"} showMainConnector={true} />
      <CirclePointer
        header={"test header"}
        showMainConnector={true}
        setAsLast
      />
      {children}
    </TreeView>
  );
};

export default TestView;
