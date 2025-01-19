import React from "react";
import "../styles/treeView.css";
import { TreeViewExpanderProps } from "../types/componentTypes";
import DownArrow from "./DownArrow";
import TreeLiner from "./TreeLiner";

const TreeViewExpander: React.FC<TreeViewExpanderProps> = ({
  expanded: initialExpanded = false,
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
        <div className="treeViewExpanderHeader">header...</div>
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

export default TreeViewExpander;
