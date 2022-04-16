import React from "react";
import styled from "@emotion/styled";
import { parseDate } from "@utils/parseDate";
import Link from "next/link";

const CardWrapper = styled.div`
  margin: 50px 0px;

  @media screen and (max-width: 653px) {
    padding: 15px;
  }

  @media screen and (max-width: 428px) {
    margin: 20px 0px;
  }
`;

const CardTop = styled.div`
  display: flex;
  font-size: 14px;
  font-family: "IBMSans", sans-serif;

  @media screen and (max-width: 280px) {
    flex-direction: column;
  }
`;

const CardContent = styled.div`
  max-width: 100%;
`;

const CardDate = styled.p`
  opacity: 0.7;
  font-size: 14px;
`;

const CardCategories = styled.span`
  margin-left: 5px;
  color: #1bd6ca;
  cursor: pointer;
  font-weight: bold;

  @media screen and (max-width: 280px) {
    margin: 2px 0px;
  }
`;

const CardTitle = styled.h1`
  font-weight: bold;
  cursor: pointer;
  text-transform: capitalize;
  margin: 15px 0px;
  font-family: "Grotesk", sans-serif;
  font-size: 24px;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 280px) {
    font-size: 22px;
  }
`;

const CardExcerpt = styled.p`
  font-size: 16px;
  font-family: "IBMSans", sans-serif;
  opacity: 0.7;
`;

type BlogFeatureProps = {
  date: string;
  title: string;
  slug: string;
  excerpt: string;
  categories: {
    name: string;
    slug: string;
  }[];
};

const BlogCard: React.FC<BlogFeatureProps> = (props) => {
  return (
    <CardWrapper>
      <CardTop>
        <CardDate>{parseDate(props.date)}</CardDate>
        {props.categories.map((cat, index) => (
          <Link key={index} href={`/blog?query=${cat.slug}`}>
            <CardCategories> #{cat.name}</CardCategories>
          </Link>
        ))}
      </CardTop>
      <CardContent>
        <Link href={`/blog/${props.slug}`}>
          <CardTitle>{props.title}</CardTitle>
        </Link>
        <CardExcerpt>{props.excerpt}</CardExcerpt>
      </CardContent>
    </CardWrapper>
  );
};

export default BlogCard;
