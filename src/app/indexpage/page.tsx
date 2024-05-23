// app/indexpage/page.tsx
import { createRouter } from "next/server";
import { getSortedPostsData } from "../../lib/getmd";
import Link from "next/link";

export const router = createRouter()
  .loader(async () => {
    const allPostsData = getSortedPostsData();
    return { allPostsData };
  })
  .page(({ data }) => {
    return (
      <section>
        <h1>Blog</h1>
        <ul>
          {data.allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>{date}</small>
            </li>
          ))}
        </ul>
      </section>
    );
  });

export default router;
