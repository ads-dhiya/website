import { Fragment, cloneElement, createElement, isValidElement, type ReactNode } from "react";

/** Give every item of a rendered array a stable key, so static lists don't need hand-written key props. */
export function list(nodes: ReactNode): ReactNode {
  if (!Array.isArray(nodes)) return nodes;
  return nodes.map((node, i) =>
    Array.isArray(node) ? createElement(Fragment, { key: i }, list(node)) : isValidElement(node) && node.key == null ? cloneElement(node, { key: i }) : node,
  );
}
