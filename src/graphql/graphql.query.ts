import { gql } from "@apollo/client";

export const QUERY_POSTS = gql`
  query PostQuery($first: Int, $after: String) {
    postsConnection(first: $first, after: $after) {
      edges {
        node {
          id
          excerpt
          title
          slug
          createdAt
          categories {
            name
          }
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

export const QUERY_POSTS_DETAIL = gql`
  query PostDetailQuery($slug: String) {
    post(where: { slug: $slug }) {
      content
      title
      slug
      excerpt
      createdAt
      thumbnailImage {
        fileName
        url
      }
      author {
        name
        photo {
          url
          fileName
        }
      }
      categories {
        name
      }
    }
  }
`;
