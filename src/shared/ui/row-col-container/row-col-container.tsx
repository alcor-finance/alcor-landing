import { HTMLAttributes } from "react";
import { Container } from "../container/container";
import cn from "classnames";

interface RowColContainer extends HTMLAttributes<HTMLDivElement> {}

export const RowColContainer = (props: RowColContainer) => {
  return (
    <Container
      {...props}
      className={cn(
        "container flex flex-col lg:flex-row lg:justify-between lg:items-start gap-16",
        props.className
      )}
    >
      {props.children}
    </Container>
  );
};
