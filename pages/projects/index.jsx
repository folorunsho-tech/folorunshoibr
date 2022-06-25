import React from "react";
import ProjectCard from "../../components/ProjectCard";
import { getProjects } from "../../lib/api";
import Head from "next/head";
import { Grid } from "@mantine/core";
export const getServerSideProps = async ({ req, res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const projects = await getProjects();
  return {
    props: { projects },
  };
};
const Projects = ({ projects }) => {
  const data = projects.portfolios.nodes;

  return (
    <>
      <Head>
        <title>Folorunshoibr-Projects</title>
      </Head>
      <Grid
        sx={{
          marginTop: "2rem",
        }}
      >
        {data.map((project) => (
          <Grid.Col sm={4} md={6} lg={3} key={project.id}>
            <ProjectCard project={project} />
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
};

export default Projects;
