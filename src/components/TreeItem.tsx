import React from "react";
import "../styles/treeView.css";
import { TreeItemProps } from "../types/componentTypes";

/**
 * @description reeItem component that renders a tree item with a title and user provided content.
 *
 * @param {string} title - The title text to display for the item.
 * @param {React.ReactNode} [children] - The content to display within the item (optional).
 * @param {string} [direction="row"] - The layout direction of the item ("row" or "col"). Defaults to "row".
 * * If direction set to 'col', no need to provide 'titleWidth' prop & it will be 100 by defulat.
 * @param {number} [bgGradientSize=100] - The size of the background gradient as a percentage. Defaults to 100.
 * @param {number} [titleWidth=children ? 25 : 100] - The width of the title as a percentage.
 * Must be between 10 and 100. Defaults to 25% if children are present, otherwise 100%.
 * Values are clamped to valid ranges, with warnings logged to the console if invalid values are provided.
 *
 * @example
 * <TreeItem title="Item 1">
 *   <p>Content of item 1.</p>
 * </TreeItem>
 *
 * @example
 * <TreeItem title="Item 2" direction="col" bgGradientSize={50}>
 *   <ul>
 *     <li>Subitem 1</li>
 *     <li>Subitem 2</li>
 *   </ul>
 * </TreeItem>
 *
 * @example
 * <TreeItem title="Item 3" titleWidth={75} />
 */

const TreeItem: React.FC<TreeItemProps> = ({
  title,
  children,
  direction = "row",
  bgGradientSize = 100,
  titleWidth = children ? 25 : 100,
}) => {
  let correctedTitleWidth = titleWidth;
  let correctedChildWidth = titleWidth;
  let layoutStyle = {};
  let itemStyle = {};
  if (titleWidth <= 0) {
    correctedTitleWidth = 10;
    console.warn(
      "'titleWidth' prop in 'TreeItem' component should not less than 10%"
    );
  } else if (titleWidth > 100 && !children) {
    correctedTitleWidth = 100;
    console.warn(
      "'titleWidth' prop in 'TreeItem' component should not exceed 100"
    );
  } else if (titleWidth > 90 && children) {
    correctedTitleWidth = 90;
    console.warn(
      "'titleWidth' prop in 'TreeItem' component should not exceed 90% with children!"
    );
  }
  correctedChildWidth = 100 - correctedTitleWidth;
  if (direction === "col") {
    correctedTitleWidth = 100;
    correctedChildWidth = 100;
    layoutStyle = {
      flexDirection: "column",
      alignItems: "flex-start",
      backgroundSize: `${bgGradientSize}%`,
    };
    itemStyle = {
      paddingLeft: "0.75rem",
      paddingRight: "0.75rem",
      width: `${correctedChildWidth}%`,
    };
  } else {
    layoutStyle = {
      flexDirection: "row",
      alignItems: "center",
      backgroundSize: `${bgGradientSize}%`,
    };
    itemStyle = {
      paddingLeft: 0,
      paddingRight: "0.75rem",
      width: `${correctedChildWidth}%`,
    };
  }
  return (
    <div className="treeViewTechPanel" style={layoutStyle}>
      <div
        className="treeViewTechPanelHeader"
        style={{ width: `${correctedTitleWidth}%` }}
      >
        {title}
      </div>
      {children && (
        <div className={`treeViewTechPanelItems`} style={itemStyle}>
          {children}
        </div>
      )}
    </div>
  );
};

export default TreeItem;
