import React from "react";
import "../styles/treeView.css";
import TreeView from "../components/TreeView";
import CirclePointer from "../components/CirclePointer";
import TreeItem from "../components/TreeItem";
import TreeItemContainer from "../components/TreeItemContainer";
import TreeBadge from "../components/TreeBadge";
import TreeExpander from "../components/TreeExpander";

export interface TestViewProps {
  header: string;
}

const TestView: React.FC<TestViewProps> = ({ header }) => {
  return (
    <TreeView header={header} theme="dark">
      <CirclePointer header={"Test header"} />
      <TreeItemContainer>
        <TreeItem title="Simple TreeItem component without any children. (defult direction is row.)" />
      </TreeItemContainer>
      <TreeItemContainer>
        <TreeItem
          title="TreeItem component with children. (direction set as col.)"
          direction="col"
        >
          This is a text node...!
        </TreeItem>
      </TreeItemContainer>
      <TreeItemContainer>
        <TreeItem
          title="TreeItem component with TreeBadges as children. (direction set as col.)"
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
        </TreeItem>
      </TreeItemContainer>
      <TreeItemContainer>
        <TreeItem
          title="TreeItem component with TreeBadges as children. (direction set as row.)"
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
        </TreeItem>
      </TreeItemContainer>
      <CirclePointer header={"test header"} showMainConnector={true} />
      <TreeItemContainer>
        <TreeExpander
          header="TreeExpander Header"
          logo="https://picsum.photos/200"
          link="https://www.google.com"
          subHeader="TreeExpander sub-header"
          // sublink="www.google.com"
          desc="TreeExpander description text. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          // descLink="www.google.com"
        >
          <div>Lorem Ipsum is simply dummy text.</div>
          <div>Lorem Ipsum is simply dummy text.</div>
          <div>Lorem Ipsum is simply dummy text.</div>
          <div>Lorem Ipsum is simply dummy text.</div>
          <div>Lorem Ipsum is simply dummy text.</div>
          <div>Lorem Ipsum is simply dummy text.</div>
          <div>Lorem Ipsum is simply dummy text.</div>
          <div>Lorem Ipsum is simply dummy text.</div>
          <div>Lorem Ipsum is simply dummy text.</div>
          <div>Lorem Ipsum is simply dummy text.</div>
          <div>Lorem Ipsum is simply dummy text.</div>
        </TreeExpander>
      </TreeItemContainer>
      <TreeItemContainer>
        <TreeExpander
          header="Expanded TreeExpander component with its children"
          expanded
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </TreeExpander>
      </TreeItemContainer>
      <CirclePointer
        header={"test header"}
        showMainConnector={true}
        setAsLast
      />
    </TreeView>
  );
};

export default TestView;
