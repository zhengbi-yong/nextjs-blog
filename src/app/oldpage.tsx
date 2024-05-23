import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
// import { getAllPosts } from "@/lib/md/getmd";
import { getAllPosts } from "@/lib/getmdx";
import Button from "@mui/material/Button";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Button href="/devlog" variant="contained">
          devlog
        </Button>
      </Container>
    </main>
  );
}
