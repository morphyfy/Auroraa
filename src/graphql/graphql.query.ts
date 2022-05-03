import { gql } from "@apollo/client";

export const QUERY_POSTS = gql`
  query PostQuery($first: Int, $skip: Int) {
    postsConnection(first: $first, skip: $skip, orderBy: createdAt_DESC) {
      edges {
        node {
          id
          excerpt
          title
          slug
          createdAt
          categories {
            name
            slug
          }
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        pageSize
      }
    }
    authors {
      photo {
        url
        fileName
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
        slug
      }
    }
  }
`;
