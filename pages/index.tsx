import React from "react";
import client from "@lib/apollo";
import Link from "next/link";
import cn from "classnames";
import Profile from "@components/Thumbnail/Profile";
import BlogFeature from "@components/BlogFeature/BlogCard/BlogCard";
import { Container } from "@styles/global.styles";
import { PostProps } from "@interface/@types";
import { PageSeo } from "@components/MetaData/SEO";
import { QUERY_POSTS } from "@graphql/graphql.query";
import { Contact } from "@components/Contacts/ContactsBadge";
import { AiFillFacebook } from "react-icons/ai";
import { FiGithub, FiAtSign } from "react-icons/fi";
import { MdOutlineArticle } from "react-icons/md";

const Home = ({ postsConnection }: PostProps) => {
  return (
    <Container>
      <PageSeo
        title="Rizkyy😎"
        description="Seorang antusias frontend developer, memiliki passion dibidang web."
        key="rizkyy.space, rizkyy, rizkyy blog, blog, mdx, next.js blog, nextjs blog, graphcms, cms developer blog"
      />

      <Profile
        srcUrl="https://media.graphassets.com/LWpfWkPERf5rs6SjZXju"
        altText="author"
      />

      <div className="max-w-[600px] border-lime-200 my-10 leading-7 sm:p-4 sm:my-4">
        <p className="text-[18px] font-[IBMSans] sm:text-[17px] xsm:text-[16px]">
          👋 Halo... Salam kenal, saya adalah seorang antusias{" "}
          <span className="text-[#17F2E5]">frontend developer</span> dan seorang{" "}
          <span className="text-[#E879F9]">self-taught programmer</span> dari
          Bogor, Indonesia. Dan saya sangat sering menggunakan JS dan CSS
          Framework. Disamping itu saya juga sering menggunakan figma sebagai
          tools prototype.
        </p>

        <div className="my-8 flex flex-wrap gap-4 text-center">
          <Contact
            href="https://www.facebook.com/rizukyy27/"
            title="Facebook"
            className={cn(`bg-sky-500`)}
            icon={<AiFillFacebook size={19} />}
          />
          <Contact
            href="https://github.com/ioofy"
            title="Github"
            className={cn(`bg-[#15B891]`)}
            icon={<FiGithub size={19} />}
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
          <div className="rounded-[12px] px-[5px] py-[4px] dark:bg-zinc-700/80">
            <MdOutlineArticle className="h-6 w-6" />
          </div>
          <h1 className="text-[25px] font-[IBMSans] ml-2">Tulisan terbaru</h1>
        </div>
      </div>

      <div className="card-post">
        {postsConnection &&
          postsConnection.edges.map(({ node }) => (
            <BlogFeature
              slug={node.slug}
              key={node.id}
              categories={node.categories}
              excerpt={node.excerpt}
              title={node.title}
              date={node.createdAt}
            />
          ))}
      </div>

      <Link href="/blog">
        <span
          className="block my-5 font-[IBMSans] text-[18px] font-bold cursor-pointer
        text-[#35f4c6] sm:p-4"
        >
          Lihat Semua →
        </span>
      </Link>
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

  const { postsConnection } = data;

  return {
    props: {
      postsConnection,
    },
  };
}

export default Home;
