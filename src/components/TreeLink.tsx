import React from "react";
import "../styles/treeView.css";
import LinkIcon from "./Icons/LinkIcon";
import { TreeLinkProps } from "../types/componentTypes";

const TreeLink: React.FC<TreeLinkProps> = ({
  href,
  target = "_blank",
  title = "",
  className = "",
  iconColor,
}) => {
  return (
    <a
      className={`treeLink ${className}`}
      href={new URL(href, window.location.origin).href}
      target={target}
      data-tooltip={title === "" ? href : title}
    >
      <LinkIcon color={iconColor} />
    </a>
  );
};

export default TreeLink;
