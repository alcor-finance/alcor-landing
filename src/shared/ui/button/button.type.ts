export type ButtonBase = {
  variant?: "contained";
  children?: React.ReactNode;
  className?: string;

  /** plate - gradient */
  color?: "primary" | "secondary" | "plate";
};
