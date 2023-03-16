import { forwardRef, HTMLAttributes } from "react";
import cn from "classnames";

interface Menu extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  alignX?: "center" | "left" | "right";
  alignY?: "upper" | "center" | "lower";
}

// надо дописать
export const Menu = forwardRef<HTMLDivElement, Menu>((props: Menu, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={cn(
        "z-[10000] absolute bg-opacity-40 w-56 backdrop-blur-md rounded-xl overflow-hidden max-h-64 overflow-y-auto",
        props.className,
        {
          ["hidden"]: !props.isOpen,
          ["block"]: props.isOpen,
          [`right-2/4`]: props.alignX === "center" || !props.alignX,
          [`left-0`]: props.alignX === "left",
          [`right-0`]: props.alignX === "right",

          [`top-2/4 `]: props.alignY === "center" || !props.alignY,
          [`top-0`]: props.alignY === "upper",
          [`bottom-0`]: props.alignY === "lower",
        }
      )}
    >
      <ul className="list-none">{props.children}</ul>
    </div>
  );
});
