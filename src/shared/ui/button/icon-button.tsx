import { ButtonHTMLAttributes, forwardRef } from "react";
import { ButtonBase } from "./button.type";

import cn from "classnames";

interface IconButton
  extends ButtonBase,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {}

export const IconButton = forwardRef<HTMLButtonElement, IconButton>(
  (props: IconButton, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(
          "w-10 h-10 px-2 py-2 text-white bg-white bg-opacity-10 rounded-full flex items-center justify-center"
        )}
      >
        {props.children}
      </button>
    );
  }
);
