import Link from "next/link";
import {
  Card,
  Image,
  Text,
  Badge,
  Group,
  Center,
  createStyles,
} from "@mantine/core";
import { BsArrowRight } from "react-icons/bs";
const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  rating: {
    position: "absolute",
    top: theme.spacing.xs,
    right: theme.spacing.xs + 2,
    pointerEvents: "none",
  },

  title: {
    display: "block",
    marginTop: theme.spacing.md,
    cursor: "pointer",
    marginBottom: theme.spacing.xs / 2,
  },

  footer: {
    marginTop: theme.spacing.md,
  },

  read: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.gray[0]
        : theme.colors.dark[7],
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
  },
}));

const PostCard = ({ post }) => {
  const { classes, cx } = useStyles();
  const { sourceUrl, altText } = post.featuredImage.node;
  return (
    <Card withBorder radius="md" className={cx(classes.card)}>
      <Card.Section>
        <Image
          src={sourceUrl}
          height={180}
          alt={altText}
          className="cursor-pointer"
        />
      </Card.Section>

      <Badge
        className={classes.rating}
        variant="gradient"
        gradient={{ from: "yellow", to: "red" }}
      >
        {post.categories.nodes[0].name}
      </Badge>

      <Text
        className={classes.title}
        weight={500}
        size="sm"
        component="a"
        lineClamp={2}
        href={`/blog/${post.slug}`}
      >
        {post.title}
      </Text>
      <Text
        size="sm"
        color="dimmed"
        lineClamp={4}
        dangerouslySetInnerHTML={{ __html: post.excerpt }}
      ></Text>
      <Group
        sx={{
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        <Link href={`/blog/${post.slug}`} passHref>
          <button
            className={`${classes.read} p-2 rounded-md flex items-center gap-2`}
          >
            <Text size="sm">Read Article</Text>
            <BsArrowRight />
          </button>
        </Link>
      </Group>
      <Group position="apart" className={classes.footer}>
        <Center>
          <Text size="sm" inline>
            By {post.author.node.name}
          </Text>
        </Center>
      </Group>
    </Card>
  );
};

export default PostCard;
