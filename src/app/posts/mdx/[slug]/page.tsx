import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
// import Test from "../components/test";

// const components = {};

// export default function TestPage({ source }) {
//   return (
//     <div className="wrapper">
//       <MDXRemote {...source} components={components} />
//     </div>
//   );
// }

// export async function getStaticProps() {
//   const postsDirectory = path.join(process.cwd(), "public/posts/mdx");
//   const filePath = path.join(postsDirectory, "post1.mdx"); // 替换 'your-file.mdx' 为实际文件名
//   const mdxContent = fs.readFileSync(filePath, "utf8");
//   const mdxSource = await serialize(mdxContent);
//   return { props: { source: mdxSource } };
// }
