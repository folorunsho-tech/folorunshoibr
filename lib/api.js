import { GraphQLClient, gql } from "graphql-request";
async function fetch(query) {
  const graphQLClient = new GraphQLClient(process.env.BASE_URL, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await graphQLClient.request(query);
  return data;
}
fetch().catch((err) => console.error(err));
export default fetch;
//POST QUERIES START

export const getHomePosts = async () => {
  const query = gql`
    query getPosts {
      posts {
        edges {
          node {
            slug
            id
            title
            excerpt
            featuredImage {
              node {
                sourceUrl(size: MEDIUM)
                altText
              }
            }
            author {
              node {
                nickname
                name
              }
            }
            modified
            categories {
              nodes {
                name
                slug
              }
            }
          }
        }
      }
    }
  `;
  return await fetch(query);
};
export const getPaths = async () => {
  const query = gql`
    query getpaths {
      posts(first: 20) {
        nodes {
          slug
          id
        }
      }
    }
  `;
  return await fetch(query);
};
export const getAuthorPosts = async ({ name }) => {
  const query = gql`
  query getAuthorPosts {
    posts(where: {authorName: "${name}"}, first: 5) {
      nodes {
        title
        date
       excerpt
        categories(first: 1) {
          nodes {
            name
            slug
          }
        }
        tags {
          nodes {
            name
            slug
          }
        }
        featuredImage {
          node {
            altText
            sourceUrl(size: LARGE)
          }
        }
        author {
          node {
            name
          }
        }
      }
    }
  }
  `;
  return await fetch(query);
};
export const getPost = async (slug) => {
  const query = gql`
 query getPost{ 
  post(id: "${slug}", idType: SLUG) {
    title
    date
    content(format: RENDERED)
    categories(first: 1) {
      nodes {
        name
        slug
      }
    }
    tags {
      nodes {
        name
        slug
      }
    }
    featuredImage {
      node {
        altText
        sourceUrl(size: LARGE)
      }
    }
  }}
  `;
  return await fetch(query);
};

//POST QUERIES END

//PROJECTS QUERIES START
export const getProjects = async () => {
  const query = gql`
    query getProjects {
      portfolios {
        nodes {
          id
          title
          techs {
            nodes {
              name
            }
          }
          portfoliosCategory {
            nodes {
              name
            }
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
          portfolioFields {
            featured
            projectLink
            repoLink
          }
        }
      }
    }
  `;
  return fetch(query);
};

//PROJECTS QUERIES END

//CATEGORIES QUERIES START
//CATEGORIES QUERIES END

//TAGS QUERIES START
//TAGS QUERIES END

//TUTORIALS QUERIES START
//TUTORIALS QUERIES END
// dXNlcjox
