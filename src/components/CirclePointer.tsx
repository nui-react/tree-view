import React from "react";
import "../styles/treeView.css";
import { CirclePointerProps } from "../types/componentTypes";

/**
 * @description CirclePointer component renders a circular pointer element, with the text. Typically used as a header of the tree.
 * It can display a circular pointer, header text and a vertical connector line,
 * and its styling can be adjusted as anywhere in the tree.
 *
 * @param {string} header - The text display next to the pointer.
 * @param {boolean} [showMainConnector=true] - Whether to display the pointer. Defaults to `true`.
 * @param {boolean} [setAsLast=false] - Whether this pointer is the last element in the tree.
 * This hides the bottom vertical line of the pointer. Defaults to `false`.
 *
 * @example
 * <CirclePointer header="Section 1" />
 *
 * @example
 * <CirclePointer header="Section 2" showMainConnector={false} />
 *
 * @example
 * <CirclePointer header="Last Section" setAsLast={true} />
 */

const CirclePointer: React.FC<CirclePointerProps> = ({
  header,
  showMainConnector = true,
  setAsLast = false,
}) => {
  return (
    <div className="treeViewHeaderPanel">
      {showMainConnector && (
        <span className="treeViewHeaderDot">
          <div className="outerCircle">
            <div className="middleCircle">
              <div className="innerCircle" />
            </div>
          </div>
        </span>
      )}
      {!setAsLast && (
        <span
          className={`connectorHeaderVerticalLine ${
            showMainConnector ? "withMainConnector" : "withoutMainConnector"
          }`}
        />
      )}
      <span
        className="treeViewHeader"
        style={{ paddingLeft: setAsLast ? "15px" : "35px" }}
      >
        {header}
      </span>
    </div>
  );
};

export default CirclePointer;
