import { getPost, getPaths } from "../../lib/api";
import SideBar from "../../components/SideBar";
import { Image, Center, Text, Box } from "@mantine/core";
import Head from "next/head";
export async function getStaticPaths() {
  const res = await getPaths();
  const paths = await res.posts.nodes;
  return {
    paths: paths.map((path) => ({
      params: { id: path.id, slug: path.slug },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const res = await getPost(params.slug);
  return {
    props: { post: res.post, slug: params.slug, parameter: params },
    revalidate: 10,
  };
}

const Post = ({ post }) => {
  const { sourceUrl, altText } = post.featuredImage.node;
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <main className="my-6  space-y-6 mx-auto w-full">
        <header className="relative">
          <Image
            src={sourceUrl}
            alt={altText}
            sx={(theme) => ({
              margin: "auto",
              [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
                width: "500px",
              },
              [`@media (min-width: ${theme.breakpoints.md}px)`]: {
                width: "80%",
              },
            })}
          />
          <Box
            sx={(theme) => ({
              [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
                width: "400px",
                left: "100px",
              },
              [`@media (min-width: ${theme.breakpoints.md}px)`]: {
                width: "40%",
              },
              [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
                width: "40%",
                left: "100px",
              },
            })}
            className="bg-black md:h-40 h-32 absolute bottom-0 "
          >
            <Center p="md">
              <Text color="#fff">
                BackgroundImage component can be used to add any content on
                image. It is useful for hero headers and other similar sections
              </Text>
            </Center>
          </Box>
        </header>
        <section className="md:w-4/5 mx-auto">
          <article dangerouslySetInnerHTML={{ __html: post.content }}></article>
        </section>
      </main>
    </>
  );
};

export default Post;
