import { HTMLAttributes, useMemo } from "react";
import cn from "classnames";
import Link from "next/link";

interface MenuItem extends HTMLAttributes<HTMLElement> {
  href?: string;
  bgColor?: string;
}

const className =
  "flex px-4 py-1 text-white w-full bg-opacity-10  hover:bg-opacity-20";

export const MenuItem = (props: MenuItem) => {
  return (
    <li>
      {props.href ? (
        <Link
          {...props}
          href={props.href}
          className={cn(className, props.className)}
        >
          {props.children}
        </Link>
      ) : (
        <div {...props} className={cn(className, props.className)}>
          {props.children}
        </div>
      )}
    </li>
  );
};
