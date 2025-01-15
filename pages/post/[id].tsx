"use client";

import { useSearchParams } from "next/navigation";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import Image from "next/image";
import { Post } from "@/types/post";

interface PostDetailsProps {
  post: Post;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<PostDetailsProps> = async ({
  params,
}) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.id}`
  );
  const post: Post = await res.json();

  return {
    props: {
      post,
    },
  };
};

const PostDetails = ({ post }: PostDetailsProps) => {
  const searchParams = useSearchParams();
  const tags = JSON.parse(searchParams.get("tags") || "[]");

  return (
    <>
      <Head>
        <title>Blog - {post.title}</title>
      </Head>
      <div>
        <h1 className="text-xl md:text-5xl text-center font-bold py-4 md:py-8">
          {post.title}
        </h1>
        <div className="p-4 my-8 rounded-xl bg-[#323232] text-center">
          <Image
            src="/blog-bg.png"
            alt="blog"
            width={500}
            height={250}
            layout="responsive"
            className=" rounded-xl"
          />
          <div className="pt-4 font-bold flex justify-center">
            <p className="text-gray-400">Post ID: {post.id}</p>
            <p className="text-gray-400 ml-4">Author ID: {post.userId}</p>
          </div>
          <div className="pb-1 text-[#20FFB6]">{tags.join(" ")}</div>
        </div>
        <p className="text-lg md:text-2xl pb-8">{post.body}</p>
      </div>
    </>
  );
};

export default PostDetails;
