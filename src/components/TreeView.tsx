import React from "react";
import "../styles/treeView.css";
import {
  CirclePointerProps,
  TreeBadgeProps,
  TreeViewItemContainerProps,
  TreeViewItemProps,
  TreeViewProps,
} from "../types/componentTypes";
import { TreeBadgeLoader } from "./loaders";
import dummyBadge from "../assets/dummyBadge.webp";

const TreeView: React.FC<TreeViewProps> = ({ header, children }) => {
  return (
    <div className="treeViewPanel">
      <CirclePointer header={header} />
      {children}
    </div>
  );
};

export default TreeView;

export const CirclePointer: React.FC<CirclePointerProps> = ({
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
export const TreeViewItem: React.FC<TreeViewItemProps> = ({
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
    correctedTitleWidth = 94;
    correctedChildWidth = 94;
    layoutStyle = {
      flexDirection: "column",
      alignItems: "flex-start",
      backgroundSize: `${bgGradientSize}%`,
    };
    itemStyle = {
      paddingLeft: "1.5rem",
      paddingRight: "1.5rem",
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
      paddingRight: 0,
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

export const TreeViewExpander: React.FC<TreeViewItemProps> = ({
  title,
  children,
}) => {
  return (
    <div className="treeViewTechPanel">
      <div className="treeViewTechPanelHeader"> {title} </div>
      {children && (
        <div
          className={`treeViewTechPanelItems`}
          style={{ paddingLeft: "10px", paddingRight: "10px" }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export const TreeViewItemContainer: React.FC<TreeViewItemContainerProps> = ({
  children,
}) => {
  return (
    <div className="treeViewItem">
      <span className="connectorVerticalLine" />
      <span className="itemConnector">
        <div className="connectorDot" />
        <div className="connectorHorizantalLine" />
      </span>
      <span className="treeViewItemCard">{children}</span>
    </div>
  );
};

export const TreeBadge: React.FC<TreeBadgeProps> = ({ label, img }) => {
  return (
    <React.Suspense fallback={<TreeBadgeLoader />}>
      <div className="techBadge">
        <img
          alt={label}
          src={img ? img : dummyBadge}
          className="techBadgeLogo"
        />
        <span className="badgeName">{label}</span>
      </div>
    </React.Suspense>
  );
};
