import CirclePointer from "../components/CirclePointer";
import TreeItemContainer from "../components/TreeItemContainer";

export type Direction = "col" | "row";
export type TreeViewAllowedChildren =
  | React.ReactElement<typeof CirclePointer>
  | React.ReactElement<typeof TreeItemContainer>;

export interface TreeViewProps {
  header: string;
  children: TreeViewAllowedChildren[];
}

export interface CirclePointerProps {
  header: string;
  showMainConnector?: boolean;
  setAsLast?: boolean;
}

export interface TreeItemProps {
  title: string;
  children?: React.ReactNode;
  direction?: Direction;
  bgGradientSize?: number;
  titleWidth?: number;
}

export interface TreeItemContainerProps {
  children: React.ReactNode;
}

export interface TreeBadgeProps {
  label: string;
  img?: string;
}

export interface TreeExpanderProps {
  expanded?: boolean;
  isSimpleHeader?: boolean;
  header: string;
  children: React.ReactNode;
}

export interface DownArrowProps {
  size?: number;
  color?: string;
}

export interface TreeTreeLinerProps {
  color?: string;
}

export interface TreeHeaderProps {
  header: string;
}

export interface TreeTextProps {
  text: string;
}
