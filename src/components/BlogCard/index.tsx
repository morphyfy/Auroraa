import { Post } from "@interface/Post";
import React from "react";
interface IProps {
  post: Post;
}

const Default: React.FC<IProps> = ({ post }) => {
  return <div></div>;
};

export default Default;
