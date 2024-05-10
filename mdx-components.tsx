import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
/*加入katex的css，保证数学公式渲染正确，否则会出现把数学公式中所有元素单独再次渲染一遍的问题。 */
import "katex/dist/katex.min.css";
// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1 style={{ color: "purple", fontSize: "24px" }}>{children}</h1>
    ),
    // img: (props) => (
    //   <Image
    //     sizes="100vw"
    //     style={{ width: "100%", height: "auto" }}
    //     {...(props as ImageProps)}
    //   />
    // ),
    ...components,
  };
}
