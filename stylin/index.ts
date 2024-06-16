import {
  type HTMLAttributes,
  type PropsWithChildren,
  createElement,
  type ReactNode,
} from "react";
import unikey from "unikey";

const stylin = (element: keyof JSX.IntrinsicElements) =>
  function generateStylinElement({
    children,
    ...props
  }: PropsWithChildren<HTMLAttributes<HTMLElement>>): ReactNode {
    const key = unikey();
    const className = `stylin-${key}`;

    const stylinElement = createElement(element, { className }, children);

    if (typeof document !== "undefined") {
      return stylinElement;
    }

    const cssTagElement = createElement(
      "style",
      { ["data-stylin-id"]: key },
      `.${className} { ${Object.entries(props).reduce(
        (acc, [key, value]) => `${acc} ${key}: ${value};`,
        ""
      )} }`
    );

    return [cssTagElement, stylinElement];
  };

export default stylin;
