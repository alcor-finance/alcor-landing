import gsap from "gsap";
import { createRef, useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import { IconButton } from "../button";
import { Menu } from "../menu/menu";
import { MenuItem } from "../menu/menu-item";

interface BurgerMenu {
  children?: React.ReactNode;
}

export const BurgerMenu = (props: BurgerMenu) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = createRef<HTMLDivElement>();
  const buttonRef = createRef<HTMLButtonElement>();

  useEffect(() => {
    const clickHandler = (evt: MouseEvent) => {
      const path = evt.composedPath();
      if (
        !path.includes(buttonRef.current!) &&
        !path.includes(menuRef.current!)
      ) {
        gsap.from(menuRef.current!, { opacity: 1 });
        gsap.to(menuRef.current!, {
          opacity: 0,
          onComplete: () => {
            setIsOpen(false);
          },
        });
      }
    };
    if (isOpen) {
      gsap.from(menuRef.current!, { opacity: 0 });
      gsap.to(menuRef.current!, { opacity: 1 });
      window.addEventListener("click", clickHandler);
    } else {
      window.removeEventListener("click", clickHandler);
    }

    return () => window.removeEventListener("click", clickHandler);
  }, [isOpen]);

  return (
    <>
      <IconButton ref={buttonRef}>
        <MdMenu className="w-full h-full" onClick={() => setIsOpen(true)} />
      </IconButton>
      <Menu
        className="bg-primary"
        ref={menuRef}
        onClick={() => setIsOpen(false)}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        {props.children}
      </Menu>
    </>
  );
};
