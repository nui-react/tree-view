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
      <CirclePointer header={"test header"} />
      <TreeItemContainer>
        <TreeItem title="my tree view 1" />
      </TreeItemContainer>
      <TreeItemContainer>
        <TreeItem title="my tree view 1" direction="col">
          hello world...!
        </TreeItem>
      </TreeItemContainer>
      <TreeItemContainer>
        <TreeItem
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
        </TreeItem>
      </TreeItemContainer>
      <TreeItemContainer>
        <TreeItem
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
        </TreeItem>
      </TreeItemContainer>
      <CirclePointer header={"test header"} showMainConnector={true} />
      <TreeItemContainer>
        <TreeExpander
          header="ppppppp"
          logo="https://picsum.photos/200"
          link="https://www.google.com"
          subHeader="cc"
          sublink="www.google.com"
          desc="Skills Development Society of the University of Sri Jayewardenepura with the aspiration of rewarding the brilliant undergraduates "
          descLink="www.google.com"
        >
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
        </TreeExpander>
      </TreeItemContainer>
      <TreeItemContainer>
        <TreeExpander header="xcx" expanded>
          oooooooooo
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
