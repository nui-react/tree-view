import React from "react";
import "../styles/treeView.css";
import { CirclePointerProps } from "../types/componentTypes";

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
