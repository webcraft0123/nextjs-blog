import { GetStaticProps } from "next";
import Head from "next/head";
import InfiniteScrollList from "@/components/InfiniteScrollList";
import { Post } from "@/types/post";

interface Props {
  posts: Post[];
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  return {
    props: {
      posts,
    },
  };
};

const Home = ({ posts }: Props) => (
  <>
    <Head>
      <title>Home Page - My Blog</title>
    </Head>
    <div className="text-center py-8 mb-4">
      <div className="text-5xl font-bold">Our Blogs</div>
      <div className="mt-4 text-xl">
        Check out our latest blog articles here
      </div>
    </div>
    <InfiniteScrollList posts={posts} />
  </>
);

export default Home;
