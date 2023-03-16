import { useEffect, useMemo } from "react";
import cn from "classnames";
import { body1, h1, h2, h3, h4, h5 } from "./typography-classnames";

type Typography = {
  tag?: keyof JSX.IntrinsicElements;

  /** Пожалуйста, пихайте в variant только теги для текста ;(*/
  variant?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
};

const switchTags = (arg: keyof JSX.IntrinsicElements) => {
  switch (arg) {
    case "h1":
      return h1;
    case "h2":
      return h2;
    case "h3":
      return h3;
    case "h4":
      return h4;
    case "h5":
      return h5;
    case "span":
      return body1;
    default:
      return body1;
  }
};

export const Typography = (props: Typography) => {
  const Tag = props.tag ? props.tag : "p";

  const className = useMemo(() => {
    if (!props.variant && props.tag) {
      return switchTags(props.tag);
    } else if (props.variant) {
      return switchTags(props.variant);
    }
    return body1;
  }, [props.className, props.tag, props.variant]);

  return (
    <Tag {...props} className={cn(className, props.className)}>
      {props.children}
    </Tag>
  );
};
