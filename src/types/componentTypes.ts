import CirclePointer from "../components/CirclePointer";
import TreeViewItemContainer from "../components/TreeViewItemContainer";

export type Direction = "col" | "row";
export type TreeViewAllowedChildren =
  | React.ReactElement<typeof CirclePointer>
  | React.ReactElement<typeof TreeViewItemContainer>;

export interface TreeViewProps {
  header: string;
  children: TreeViewAllowedChildren[];
}

export interface CirclePointerProps {
  header: string;
  showMainConnector?: boolean;
  setAsLast?: boolean;
}

export interface TreeViewItemProps {
  title: string;
  children?: React.ReactNode;
  direction?: Direction;
  bgGradientSize?: number;
  titleWidth?: number;
}

export interface TreeViewItemContainerProps {
  children: React.ReactNode;
}

export interface TreeBadgeProps {
  label: string;
  img?: string;
}

export interface TreeViewExpanderProps {
  expanded?: boolean;
  children: React.ReactNode;
}

export interface DownArrowProps {
  size?: number;
  color?: string;
}

export interface TreeTreeLinerProps {
  color?: string;
}
