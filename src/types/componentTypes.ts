export interface ButtonProps {
  label: string;
  onClick: () => void;
}

export interface CirclePointerProps {
  header: string;
  showMainConnector?: boolean;
}

export interface TreeViewProps {
  header: string;
  children?: React.ReactNode;
}

export type Direction = 'col' | 'row';

export interface TreeViewItemProps {
  title: string;
  children?: React.ReactNode;
  direction?: Direction;
  bgGradientSize?: number;
  titleWidth?: number;
}

export interface TreeViewItemContainerProps {
  children?: React.ReactNode;
}

export interface TreeBadgeProps {
    label: string;
    img?: string;
}