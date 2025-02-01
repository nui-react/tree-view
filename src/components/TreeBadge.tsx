import React from "react";
import "../styles/treeView.css";
import { TreeBadgeProps } from "../types/componentTypes";
import { TreeBadgeLoader } from "./loaders";
import dummyBadge from "../assets/dummyBadge.webp";

/**
 * @description TreeBadge component that displays as a badge with a label and an image.  It uses React.Suspense to handle
 * loading the image and displays a loader while the image is being fetched.
 *
 * @param {string} label - The text to display on the badge.
 * @param {string} [img] - The URL or path to the image to display. If not provided, a default image (`dummyBadge`) is used.
 *
 * @example
 * <TreeBadge label="My Badge" />
 *
 * @example
 * <TreeBadge label="Custom Badge" img="https://example.com/my-image.png" />
 */

const TreeBadge: React.FC<TreeBadgeProps> = ({ label, img }) => {
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

export default TreeBadge;
