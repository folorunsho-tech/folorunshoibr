import React from "react";
import { createStyles, Paper, Text, Title, Badge, Group } from "@mantine/core";
import { FiExternalLink } from "react-icons/fi";
const useStyles = createStyles((theme) => ({
  card: {
    height: 440,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  title: {
    fontFamily: `Greycliff CF ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 26,
    marginTop: theme.spacing.xs,
    zIndex: 100,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
    zIndex: 100,
  },
  tech: {
    color: theme.colors.dark,
    backgroundColor: theme.colors.gray[0],
    border: "1px solid",
    borderColor: theme.colors.gray[0],
    zIndex: 100,
  },
  techs: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    zIndex: 100,
  },
  ctas: {
    textAlign: "center",
    backgroundColor: "white",
    color: theme.colors.dark,
    padding: theme.spacing.sm,
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: ".3s ease-in-out",
    gap: "1rem",
    width: "100%",
    zIndex: 100,
    "&:hover": {
      backgroundColor: theme.colors.dark,
      color: "white",
    },
  },
}));

const data = {
  image:
    "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  title: "Best forests to visit in North America",
  category: "nature",
};
export function ArticleCardImage({ image = data.image, project }) {
  const { classes } = useStyles();
  const { title, featuredImage, techs, portfoliosCategory, portfolioFields } =
    project;
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{
        backgroundImage: `url(${featuredImage.node.sourceUrl})`,
      }}
      className={`${classes.card} space-y-4 relative`}
    >
      <div className="absolute top-0 bg-slate-900 w-full h-full left-0 bg-opacity-70"></div>
      <Group
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {portfolioFields.featured !== null ||
          (portfolioFields.featured !== false && (
            <Text className={classes.category} size="xs">
              Featured
            </Text>
          ))}
        <Text className={classes.category} size="xs">
          {portfoliosCategory.nodes[0].name}
        </Text>
      </Group>
      <Title order={3} className={classes.title}>
        {title}
      </Title>
      <Text size="xs" className={classes.techs}>
        {techs.nodes.map((tech) => (
          <Badge className={classes.tech} key={tech.name}>
            {tech.name}
          </Badge>
        ))}
      </Text>

      <Group
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <button className={classes.ctas}>
          View Project <FiExternalLink />
        </button>
        <button className={classes.ctas}>
          View Code <FiExternalLink />
        </button>
      </Group>
    </Paper>
  );
}
export default ArticleCardImage;
