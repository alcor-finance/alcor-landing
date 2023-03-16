import cn from "classnames";
import { HTMLAttributes } from "react";

interface Container extends HTMLAttributes<HTMLDivElement> {}

export const Container = (props: Container) => {
  return (
    <div {...props} className={cn("container mx-auto px-4", props.className)}>
      {props.children}
    </div>
  );
};
