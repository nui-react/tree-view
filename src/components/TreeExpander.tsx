import React from "react";
import "../styles/treeView.css";
import { TreeExpanderProps } from "../types/componentTypes";
import DownArrow from "./DownArrow";
import TreeLiner from "./TreeLiner";
import TreeHeader from "./TreeHeader";
import TreeText from "./TreeText";

const TreeExpander: React.FC<TreeExpanderProps> = ({
  expanded: initialExpanded = false,
  isSimpleHeader = true,
  header,
  children,
}) => {
  const [isExpanded, setIsExpanded] = React.useState(initialExpanded);
  const [maxHeight, setMaxHeight] = React.useState<number | string>(0);
  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (isExpanded && contentRef.current) {
      setMaxHeight(contentRef.current.scrollHeight);
    } else {
      setMaxHeight(0);
    }
  }, [isExpanded]);

  const handleExpander = () => {
    const newState = !isExpanded;
    setIsExpanded(newState);
  };

  return (
    <div className="treeViewExpander">
      <div
        className={`treeViewExpanderHeaderContainer ${
          isExpanded ? "expanded" : ""
        }`}
        onClick={handleExpander}
      >
        <div className="treeViewExpanderHeader">
          {isSimpleHeader ? (
            <TreeText text={header} />
          ) : (
            <TreeHeader header={header} />
          )}
        </div>
        <DownArrow />
      </div>
      <div
        className={`treeViewExpanderBodyContainer ${
          isExpanded ? "expanded" : ""
        }`}
        style={{ maxHeight }}
      >
        <div ref={contentRef} className="treeViewExpanderBody">
          <TreeLiner />
          {children}
        </div>
      </div>
    </div>
  );
};

export default TreeExpander;
