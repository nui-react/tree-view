import React from "react";
import "../styles/treeView.css";
import { TreeBadgeProps } from "../types/componentTypes";
import { TreeBadgeLoader } from "./loaders";
import dummyBadge from "../assets/dummyBadge.webp";

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
