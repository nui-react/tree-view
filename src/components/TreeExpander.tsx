import React from "react";
import "../styles/treeView.css";
import { TreeExpanderProps } from "../types/componentTypes";
import DownArrow from "./Icons/DownArrow";
import TreeLiner from "./TreeLiner";
import TreeHeader from "./TreeHeader";

/**
 * @description TreeExpander component that creates an expandable section in a tree view. This displays a header that, when clicked,
 * expands or collapses to reveal the content within.  This uses CSS transitions for smooth animation of the height change.
 *
 * @param {boolean} [expanded=false] - Controls the initial expanded state of the component. Defaults to `false` (collapsed).
 * @param {boolean} [isSimpleHeader=true] - Determines whether to render the header using the `TreeText` component (simple) or the `TreeHeader` component (more complex). Defaults to `true` (simple header).
 * @param {string} header - The text to display in the header of the expandable section.
 * @param {React.ReactNode} children - The content to be displayed within the expandable section.
 *
 * @example
 * <TreeExpander header="Section 1">
 *   <p>Content of section 1.</p>
 * </TreeExpander>
 *
 * @example
 * <TreeExpander header="Advanced Section" expanded isSimpleHeader={false}>
 *   <p>Content of section 1.</p>
 * </TreeExpander>
 */

const TreeExpander: React.FC<TreeExpanderProps> = ({
  expanded: initialExpanded = false,
  header,
  children,
  logo,
  subHeader,
  desc,
  link,
  sublink,
  descLink,
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
          <TreeHeader
            header={header}
            logo={logo}
            subHeader={subHeader}
            desc={desc}
            link={link}
            sublink={sublink}
            descLink={descLink}
          />
        </div>
        <DownArrow className="treeViewExpanderArrow"/>
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
