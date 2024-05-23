// 静态加载mdx文件使用next-mdx
import nextMDX from "@next/mdx";
// 动态加载mdx文件使用next-mdx-remote
import { serialize } from "next-mdx-remote/serialize";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// const withMDX = createMDX({
//   // Add markdown plugins here, as desired
// });
// Initialize MDX support with necessary configurations
const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
};

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
