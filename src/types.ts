export interface ButtonProps {
  label: string;
  onClick: () => void;
}

export interface CirclePointerProps {
  header: string;
}

export interface TreeViewProps {
  header: string;
  children?: React.ReactNode;
}

export interface TreeViewItemProps {
  title: string;
  children?: React.ReactNode;
}

export interface TreeViewItemContainerProps {
  children?: React.ReactNode;
}
