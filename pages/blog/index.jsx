import Archive from "../../components/Archive";
import { getHomePosts } from "../../lib/api";
import { Grid } from "@mantine/core";
import PostCard from "../../components/PostCard";
import Head from "next/head";

export async function getStaticProps() {
  const posts = await getHomePosts();
  return {
    props: { posts },
    revalidate: 10,
  };
}

const Blog = ({ posts }) => {
  const allPosts = posts.posts.edges;
  return (
    <>
      <Head>
        <title>Folorunshoibr-Blog</title>
      </Head>
      <Grid
        sx={{
          marginTop: "2rem",
        }}
      >
        {allPosts.map((post, index) => (
          <Grid.Col sm={4} md={6} lg={3} key={index}>
            <PostCard post={post.node} />
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
};

export default Blog;
