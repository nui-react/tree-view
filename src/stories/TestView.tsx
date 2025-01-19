import React from "react";
import "../styles/treeView.css";
import TreeView from "../components/TreeView";
import CirclePointer from "../components/CirclePointer";
import TreeViewItem from "../components/TreeViewItem";
import TreeViewItemContainer from "../components/TreeViewItemContainer";
import TreeBadge from "../components/TreeBadge";
import TreeViewExpander from "../components/TreeViewExpander";

export interface TestViewProps {
  header: string;
}

const TestView: React.FC<TestViewProps> = ({ header }) => {
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
      <TreeViewItemContainer>
        <TreeViewExpander>
          <div>xxxxxxxxxxxx</div>
          <div>xxxxxxxxxxxx</div>
          <div>xxxxxxxxxxxx</div>
          <div>xxxxxxxxxxxx</div>
          <div>xxxxxxxxxxxx</div>
          <div>xxxxxxxxxxxx</div>
          <div>xxxxxxxxxxxx</div>
          <div>xxxxxxxxxxxx</div>
          <div>xxxxxxxxxxxx</div>
          <div>xxxxxxxxxxxx</div>
          <div>xxxxxxxxxxxx</div>
          <div>xxxxxxxxxxxx</div>
          <div>xxxxxxxxxxxx</div>
          <div>xxxxxxxxxxxx</div>
          <div>xxxxxxxxxxxx</div>
        </TreeViewExpander>
      </TreeViewItemContainer>
      <TreeViewItemContainer>
        <TreeViewExpander expanded>oooooooooo</TreeViewExpander>
      </TreeViewItemContainer>
      <CirclePointer
        header={"test header"}
        showMainConnector={true}
        setAsLast
      />
    </TreeView>
  );
};

export default TestView;
