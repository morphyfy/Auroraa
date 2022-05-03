import React from "react";
import { useRouter } from "next/router";
import { ArticleJsonLd, DefaultSeoProps, NextSeo } from "next-seo";
import moment from "moment";
import { generateOgImage } from "@lib/og";

export type PageSeoProps = {
  title: string;
  titleTemplate?: string;
  description?: string;
};

export type BlogSeoProps = {
  title: string;
  description?: string;
  date: string;
  url: string;
};

const defaultMeta = {
  title: "Muhamad Rizky",
  siteName: "rizkyy.space",
  description:
    "Seorang antusias frontend developer, memiliki passion dibidang web.",
  url: "https://rizkyy.space",
  type: "website",
};

export const SEO: DefaultSeoProps = {
  title: defaultMeta.title,
  titleTemplate: `%s — ${defaultMeta.title}`,
  description: defaultMeta.description,
  openGraph: {
    type: "website",
    locale: "id_ID",
    title: defaultMeta.title,
    site_name: defaultMeta.siteName,
    url: `defaultMeta.url`,
    images: [
      {
        url: generateOgImage({
          title: defaultMeta.title,
          meta: defaultMeta.siteName,
        }),
        width: 1200,
        height: 600,
        alt: defaultMeta.title,
      },
    ],
  },
  twitter: {
    handle: "@ioofyy",
    site: "@rizkyy",
    cardType: "summary_large_image",
  },
};

export function PageSeo({ title, titleTemplate, description }: PageSeoProps) {
  const { asPath } = useRouter();
  const url = `${defaultMeta.url}${asPath}`;
  return (
    <NextSeo
      title={title}
      titleTemplate={titleTemplate}
      description={description}
      canonical={url}
      openGraph={{
        title,
        description: description,
        url,
      }}
    />
  );
}

export function BlogSeo({ title, description, date, url }: BlogSeoProps) {
  const publishedAt = new Date(date).toISOString();

  const intoMoment = moment(publishedAt).format("DD MMMM YYYY");

  const ogImage = generateOgImage({
    title: title,
    meta: "rizkyy.space · " + intoMoment,
  });

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          type: "article",
          article: { publishedTime: intoMoment },
          url,
          title,
          description: description,
          images: [
            {
              url: ogImage,
              alt: title,
            },
          ],
        }}
      />
      <ArticleJsonLd
        authorName={defaultMeta.title}
        publisherName={defaultMeta.title}
        datePublished={publishedAt}
        dateModified={publishedAt}
        url={url}
        images={[ogImage]}
        title={title}
        description={description}
      />
    </>
  );
}
