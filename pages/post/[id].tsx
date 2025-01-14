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

const PostDetails = ({ post }: PostDetailsProps) => (
  <>
    <Head>
      <title>Blog - {post.title}</title>
    </Head>
    <div>
      <h1 className="text-5xl text-center font-bold py-8">{post.title}</h1>
      <Image
        src="/blog-bg.png"
        alt="blog"
        width={500}
        height={250}
        layout="responsive"
        className="rounded-xl bg-[#323232] p-4 my-8"
      />
      <p className="text-2xl">{post.body}</p>
      <p className="mt-4 text-gray-500">Post ID: {post.id}</p>
      <p className="text-gray-500">Author ID: {post.userId}</p>
    </div>
  </>
);

export default PostDetails;
