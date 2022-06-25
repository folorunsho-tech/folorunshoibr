import { useEffect, useState } from "react";
import { createStyles, Card, Image, Text, Group } from "@mantine/core";
import { getRelatedPosts } from "../lib/api";
import { category } from "../lib/cat";
const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
  },

  body: {
    padding: theme.spacing.md,
  },
}));
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await getRelatedPosts(category);

  // Pass data to the page via props
  return { props: { res } };
}

const RealtedPosts = ({ res }) => {
  const { classes } = useStyles();
  console.log(res);
  return (
    <Card withBorder radius="md" p={0} className={classes.card}>
      {/* <Group noWrap spacing={0}>
        <Image src={image} height={140} width={140} alt="" />
        <div className={classes.body}>
          <Text transform="uppercase" color="dimmed" weight={700} size="xs">
            {category}
          </Text>
          <Text className={classes.title} mt="xs" mb="md">
            {title}
          </Text>
          <Group noWrap spacing="xs">
            <Group spacing="xs" noWrap>
              <Text size="xs">{author.name}</Text>
            </Group>
            <Text size="xs" color="dimmed">
              •
            </Text>
            <Text size="xs" color="dimmed">
              {date}
            </Text>
          </Group>
        </div>
      </Group> */}
    </Card>
  );
};

export default RealtedPosts;
