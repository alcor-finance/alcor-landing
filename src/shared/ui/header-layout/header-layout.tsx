import cn from "classnames";

import { HTMLAttributes } from "react";

interface Header extends HTMLAttributes<HTMLDivElement> {}

export const HeaderLayout = (props: Header) => {
  return (
    <header
      {...props}
      className={cn(
        "h-[var(--header-height)] flex items-center",
        props.className
      )}
    >
      {props.children}
    </header>
  );
};
