import { HTMLAttributes } from "react";
import { Container } from "../container/container";
import cn from "classnames";

interface ColContainer extends HTMLAttributes<HTMLDivElement> {}

export const ColContainer = (props: ColContainer) => {
  return (
    <Container
      {...props}
      className={cn(
        "container flex flex-col items-center gap-16",
        props.className
      )}
    >
      {props.children}
    </Container>
  );
};
