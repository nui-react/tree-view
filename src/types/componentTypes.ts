import CirclePointer from "../components/CirclePointer";
import TreeItemContainer from "../components/TreeItemContainer";

export type Direction = "col" | "row";

export type TreeViewAllowedChildren =
  | React.ReactElement<typeof CirclePointer>
  | React.ReactElement<typeof TreeItemContainer>;

export type ThemeType = "dark" | "light";

export type TextVarientType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

export type TextThemeColorType =
  | "white"
  | "black"
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "info"
  | "warning"
  | "mute";

export type AnchorTargetTypes = "_blank" | "_self" | "_parent" | "_top";

export interface TreeViewProps {
  header: string;
  theme?: ThemeType;
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
  header: string;
  logo?: string;
  children: React.ReactNode;
  subHeader?: string;
  desc?: string;
  link?: string;
  sublink?: string;
  descLink?: string;
}

export interface DownArrowProps {
  size?: number;
  color?: string;
  className?: string;
}

export interface LinkIconProps {
  color?: string;
  className?: string;
}

export interface TreeLinerProps {
  color?: string;
}

export interface TreeHeaderProps {
  header: string;
  logo?: string;
  subHeader?: string;
  desc?: string;
  link?: string;
  sublink?: string;
  descLink?: string;
  headerVarient?: TextVarientType;
  subHeaderVarient?: TextVarientType;
  descVarient?: TextVarientType;
  headerColor?: TextThemeColorType;
  subHeaderColor?: TextThemeColorType;
  descColor?: TextThemeColorType;
}

export interface TreeTextProps {
  text: string;
  varient?: TextVarientType;
  color?: TextThemeColorType;
  className?: string;
}

export interface TreeLinkProps {
  href: string;
  target?: AnchorTargetTypes;
  title?: string;
  className?: string;
  iconColor?: string;
}
