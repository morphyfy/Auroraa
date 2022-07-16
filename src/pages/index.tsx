import React from "react";
import client from "@lib/apollo";
import Link from "next/link";
import cn from "classnames";
import Profile from "@components/Thumbnail/Profile";
import BlogCard from "@components/BlogFeature/BlogCard/BlogCard";
import { Container } from "@styles/global.styles";
import { PostType } from "@interface/data";
import { PageSeo } from "@components/MetaData/SEO";
import { QUERY_POSTS } from "@graphql/graphql.query";
import { Contact } from "@components/Contacts/ContactsBadge";
import { FiGithub, FiAtSign, FiFacebook } from "react-icons/fi";
import { MdOutlineArticle } from "react-icons/md";
import { AiOutlineBehance } from "react-icons/ai";
import { z } from "zod";

type PostProps = z.infer<typeof PostType>;

const Home = (allPosts: PostProps) => {
  const { postsConnection, authors } = allPosts;

  return (
    <Container>
      <PageSeo
        title="Hello👋"
        description="Seorang antusias frontend developer, memiliki passion dibidang web."
        key="rizkyy.space, rizkyy, rizkyy blog, blog, mdx, next.js blog, nextjs blog, graphcms, cms developer blog"
      />

      {authors &&
        authors.map((author, index) => (
          <Profile srcUrl={author.photo.url} altText="author" key={index} />
        ))}

      <div className="my-10 max-w-[600px] leading-7 sm:my-4 sm:p-4">
        <p className="font-sans text-[17px] sm:text-[17px] xsm:text-[16px]">
          👋 Halo... Salam kenal, saya adalah seorang antusias{" "}
          <span className="font-bold text-[#1BD6CA]">frontend developer</span>{" "}
          dan seorang{" "}
          <span className="font-bold text-[#E879F9]">
            self-taught programmer
          </span>{" "}
          dari Bogor, Indonesia. Dan saya sangat sering menggunakan JS dan CSS
          Framework. Disamping itu saya juga sering menggunakan figma sebagai
          tools prototype.
        </p>

        <div className="my-8 flex flex-wrap gap-4 text-center">
          <Contact
            href="https://www.facebook.com/rizukyy27/"
            title="Facebook"
            className={cn(`bg-sky-500`)}
            icon={<FiFacebook size={19} />}
          />
          <Contact
            href="https://github.com/ioofy"
            title="Github"
            className={cn(`bg-[#15B891]`)}
            icon={<FiGithub size={19} />}
          />
          <Contact
            href="https://behance.net/rizukyy27"
            title="Behance"
            className={cn(`bg-[#1A75E8]`)}
            icon={<AiOutlineBehance size={24} />}
          />
          <Contact
            href="mailto:mrizkyy027@gmail.com"
            title="Email"
            className={cn(`bg-[#863892]`)}
            icon={<FiAtSign size={19} />}
          />
        </div>
      </div>
      <div className="flex flex-col items-start space-y-3 sm:p-4">
        <div className="flex items-center">
          <div className="rounded-[10px] px-[5px] py-[4px] dark:bg-zinc-700/80">
            <MdOutlineArticle className="h-6 w-6" />
          </div>
          <h1 className="ml-2 font-serif text-[25px]">Tulisan terbaru</h1>
        </div>
      </div>
      <div className="card__list-post w-full">
        {postsConnection &&
          postsConnection.edges.map(({ node }) => (
            <BlogCard
              slug={node.slug}
              key={node.id}
              categories={node.categories}
              excerpt={node.excerpt}
              title={node.title}
              date={node.createdAt}
            />
          ))}
        <Link href="/blog" passHref>
          <span
            className="my-5 block cursor-pointer font-sans text-[16px] font-bold
            text-[#1bd6ca] sm:p-4"
          >
            Lihat Semua →
          </span>
        </Link>
      </div>
    </Container>
  );
};

export async function getServerSideProps() {
  const { data } = await client.query({
    query: QUERY_POSTS,
    variables: {
      first: 3,
    },
  });

  const { authors, postsConnection } = data;

  return {
    props: {
      postsConnection,
      authors,
    },
  };
}

export default Home;
