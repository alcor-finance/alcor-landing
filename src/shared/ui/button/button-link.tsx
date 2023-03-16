import Link, { LinkProps } from "next/link";
import { ButtonBase } from "./button.type";
import cn from "classnames";
import { defaultClassname } from "./button-classname";

interface ButtonLink extends ButtonBase, LinkProps {}

export const ButtonLink = (props: ButtonLink) => {
  return (
    <Link
      {...props}
      className={cn(
        defaultClassname,
        {
          [`plate-button`]:
            props.color === "plate" && props.variant === "contained",
          [`bg-primary`]:
            (props.color === "primary" || !props.color) &&
            props.variant === "contained",
          [`bg-secondary`]:
            props.color === "secondary" && props.variant === "contained",
        },
        props.className
      )}
    >
      {props.children}
    </Link>
  );
};
