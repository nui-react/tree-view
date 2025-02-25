import React from "react";
import "../../styles/treeView.css";
import { DownArrowProps } from "../../types/componentTypes";

/**
 * @description DownArrow component that renders a down arrow SVG icon.
 *
 * @param {number} [size=10] - The size (height and width) of the arrow icon in pixels. Defaults to 10.
 * @param {string} [color="#00f0ff"] - The fill color of the arrow icon. Defaults to "#00f0ff" (a light blue).
 *
 * @example
 * <DownArrow size={20} color="red" />
 *
 * @example
 * <DownArrow />
 */

const DownArrow: React.FC<DownArrowProps> = ({
  size = 10,
  color = "#00f0ff",
  className = ""
}) => {
  return (
    <svg
      fill={color}
      height={size}
      width={size}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 330 330"
      className={className}
      // xmlns:xlink="http://www.w3.org/1999/xlink"
      // xml:space="preserve"
    >
      <path
        id="XMLID_225_"
        d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
            c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
            s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
      />
    </svg>
  );
};

export default DownArrow;
