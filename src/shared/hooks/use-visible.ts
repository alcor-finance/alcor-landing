import { HTMLAttributes, RefObject, useEffect, useState } from "react";

export const useVisible = (element: RefObject<any>) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (element.current) {
      const observer = new IntersectionObserver(([entry]) =>
        setIsVisible(entry.isIntersecting)
      );

      observer.observe(element.current!);

      return () => observer.disconnect();
    }
  }, []);

  return isVisible;
};
