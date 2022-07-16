import { z } from "zod";

export const PostType = z.object({
  postsConnection: z.object({
    edges: z.array(
      z.object({
        node: z.object({
          excerpt: z.string(),
          title: z.string(),
          slug: z.string(),
          id: z.string(),
          createdAt: z.string(),
          categories: z.array(
            z.object({
              name: z.string(),
              slug: z.string(),
            }),
          ),
        }),
      }),
    ),
  }),

  authors: z.array(
    z.object({
      photo: z.object({
        fileName: z.string(),
        url: z.string(),
      }),
    }),
  ),
});

export const PostDetailType = z.object({
  post: z.object({
    author: z.object({
      name: z.string(),
      photo: z.object({
        fileName: z.string(),
        url: z.string(),
      }),
    }),
    thumbnailImage: z.object({
      fileName: z.string(),
      url: z.string(),
    }),
    categories: z.array(
      z.object({
        name: z.string(),
        slug: z.string(),
      }),
    ),
    content: z.string(),
    createdAt: z.string(),
    title: z.string(),
    slug: z.string(),
    excerpt: z.string(),
  }),
});

export const PlayingMusicType = z.object({
  album: z.string(),
  albumImageUrl: z.string(),
  artist: z.string(),
  isPlaying: z.boolean(),
  songUrl: z.string(),
  title: z.string(),
});
