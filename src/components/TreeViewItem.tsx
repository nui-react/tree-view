import React from "react";
import "../styles/treeView.css";
import { TreeViewItemProps } from "../types/componentTypes";

/**
 * @description TreeViewItem component that renders a tree item with a title and user provided content.
 *
 * @param {string} title - The title of the TreeViewItem.
 * @param {React.ReactNode} [children] - The content to be displayed within the TreeViewItem.
 * This can be any valid React node, including other components, text, or elements.
 * @param {'col' | 'row'} [direction='row'] - The direction of the layout (column or row). Defaults to 'row'.
 * If direction set to 'col', no need to provide 'titleWidth' prop & it will be 100 by defulat.
 * @param {number} [bgGradientSize=100] - The size of the background gradient as a percentage.
 * @param {number} [titleWidth] - The width of the title section as a percentage.
 * Must be between 10 and 100. Defaults to 25% if children are present, otherwise 100%.
 *
 * @example
 * <TreeViewItem title="Item 1">
 *   <TreeBadge label="my lable"/>
 * </TreeViewItem>
 *
 */
const TreeViewItem: React.FC<TreeViewItemProps> = ({
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
      "'titleWidth' prop in 'TreeViewItem' component should not less than 10%"
    );
  } else if (titleWidth > 100 && !children) {
    correctedTitleWidth = 100;
    console.warn(
      "'titleWidth' prop in 'TreeViewItem' component should not exceed 100"
    );
  } else if (titleWidth > 90 && children) {
    correctedTitleWidth = 90;
    console.warn(
      "'titleWidth' prop in 'TreeViewItem' component should not exceed 90% with children!"
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

export default TreeViewItem;
