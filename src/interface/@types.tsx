export interface PostProps {
  postsConnection: {
    edges: {
      node: {
        excerpt: string;
        title: string;
        slug: string;
        id: string;
        createdAt: string;
        categories: {
          name: string;
        }[];
      };
    }[];
    pageInfo: {
      endCursor: string;
      hasNextPage: string;
    };
  };
}

export interface PostDetailProps {
  post: {
    author: {
      name: string;
      photo: {
        fileName: string;
        url: string;
      };
    };
    thumbnailImage: {
      fileName: string;
      url: string;
    };
    categories: {
      name: string;
    }[];
    content: string;
    createdAt: string;
    title: string;
    slug: string;
    excerpt: string;
  };
}
