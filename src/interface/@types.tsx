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
          slug: string;
        }[];
      };
    }[];
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
      slug: string;
    }[];
    content: string;
    createdAt: string;
    title: string;
    slug: string;
    excerpt: string;
  };
}

export type ThemeStylesProps = {
  body: string;
  text: string;
};

export type NowPlayingProps = {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};
