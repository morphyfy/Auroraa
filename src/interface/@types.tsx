export interface PostProps {
  postsConnection: {
    edges: {
      node: {
        excerpt: string;
        title: string;
        thumbnailImage: {
          url: string;
          fileName: string;
        };
        content: string;
      };
    }[];
    pageInfo: {
      endCursor: string;
      hasNextPage: string;
    };
  };
}
