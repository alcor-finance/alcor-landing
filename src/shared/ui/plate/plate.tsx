import {
  HTMLAttributes,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import cn from "classnames";
import st from "./styles.module.css";

interface Plate extends HTMLAttributes<HTMLDivElement> {}

export const Plate = (props: Plate) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mouseX, setMouseX] = useState<number | null>(null);
  const [mouseY, setMouseY] = useState<number | null>(null);

  const handleMousePos = (evt: any) => {
    setIsLoaded(true);
    const event = evt.nativeEvent;
    setMouseX(event.layerX);
    setMouseY(event.layerY);
  };

  return (
    <div
      {...props}
      onMouseMove={handleMousePos}
      className={cn(
        st.card,
        st.light,
        isLoaded && st.light_disabled,
        "relative overflow-hidden",
        props.className
      )}
      style={
        {
          [`--mouse-x`]: mouseX,
          [`--mouse-y`]: mouseY,
        } as React.CSSProperties
      }
    >
      {props.children}
    </div>
  );
};
