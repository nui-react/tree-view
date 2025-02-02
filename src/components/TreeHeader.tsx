import React from "react";
import "../styles/treeView.css";
import { TreeHeaderProps } from "../types/componentTypes";
import TreeText from "./TreeText";
import TreeLink from "./TreeLink";
import { muteColor, primaryColor, successColor } from "../styles/styleConfig";

/**
 * @description TreeHeader component is a descriptive layout for the tree items.
 *
 * @param {string} header - The text to display in the header.
 *
 * @example
 * <TreeHeader header="Section Title" />
 */

const TreeHeader: React.FC<TreeHeaderProps> = ({
  header,
  logo,
  subHeader = "",
  desc = "",
  link = "",
  sublink = "",
  descLink = "",
  headerVarient = "h1",
  subHeaderVarient = "h4",
  descVarient = "p",
  headerColor = "primary",
  subHeaderColor = "white",
  descColor = "mute",
}) => {
  return (
    <div className="treeHeader">
      {logo && (
        <img
          alt={`${header}-image`}
          src={logo}
          className="headerLogo"
          style={{
            height:
              subHeader !== "" && desc !== ""
                ? 75
                : subHeader === "" || desc === ""
                ? 50
                : 25,
          }}
        />
      )}
      <div className="treeHeaderTextPanel">
        <span className="treeHeaderTextContainer">
          <TreeText text={header} varient={headerVarient} color={headerColor} />
          {link !== "" && (
            <TreeLink
              className="treeHeaderLink"
              href={link}
              target="_blank"
              title={link}
              iconColor={successColor}
            />
          )}
        </span>
        {subHeader !== "" && (
          <span className="treeHeaderTextContainer">
            <TreeText
              text={subHeader}
              varient={subHeaderVarient}
              color={subHeaderColor}
            />
            {sublink !== "" && (
              <TreeLink
                className="treeHeaderLink"
                href={sublink}
                target="_blank"
                title={sublink}
                iconColor={primaryColor}
              />
            )}
          </span>
        )}
        {desc !== "" && (
          <span className="treeHeaderTextContainer">
            <TreeText text={desc} varient={descVarient} color={descColor} />
            {descLink !== "" && (
              <TreeLink
                className="treeHeaderLink"
                href={descLink}
                target="_blank"
                title={descLink}
                iconColor={muteColor}
              />
            )}
          </span>
        )}
      </div>
    </div>
  );
};

export default TreeHeader;
