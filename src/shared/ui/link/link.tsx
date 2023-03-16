import Link, { LinkProps } from "next/link";
import cn from "classnames";
import React from "react";
import { Typography } from "../typography/typography";
import { link1, linkInherit } from "./link-classnames";

interface LinkT extends LinkProps {
  className?: string;
  variant?: "inherit" | "link1";
  children: React.ReactNode;
}

export const CustomLink = (props: LinkT) => {
  return (
    <Link
      {...props}
      className={cn(
        props.className,
        props.variant === "inherit" ? linkInherit : link1
      )}
    >
      {props.children}
    </Link>
  );
};
