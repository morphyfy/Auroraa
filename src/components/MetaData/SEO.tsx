import React from "react";
import { useRouter } from "next/router";
import { DefaultSeoProps, NextSeo } from "next-seo";
import moment from "moment";

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
        }}
      />
    </>
  );
}
