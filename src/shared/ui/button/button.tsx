import { ButtonBase } from "./button.type";
import cn from "classnames";
import { defaultClassname } from "./button-classname";
import { ButtonHTMLAttributes } from "react";

interface ButtonType
  extends Omit<ButtonBase, "className">,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {}

export const Button = (props: ButtonType) => {
  return (
    <button
      {...props}
      className={cn(defaultClassname, {
        [`bg-[var(--button-plate)]`]:
          props.color === "plate" && props.variant === "contained",
        [`bg-primary`]:
          (props.color === "primary" || !props.color) &&
          props.variant === "contained",
        [`bg-secondary`]:
          props.color === "secondary" && props.variant === "contained",
      })}
    >
      {props.children}
    </button>
  );
};
