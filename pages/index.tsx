"use client";

import { useMemo, useState } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import InfiniteScrollList from "@/components/InfiniteScrollList";
import { Post, Tag } from "@/types/post";

interface Props {
  posts: Post[];
}

const tags: Tag[] = ["#Company Updates", "#Education"];

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  // There is no tags in the response, so needed to generate tags manually.
  return {
    props: {
      posts: posts.map((post) => ({
        ...post,
        tags:
          Math.random() > 0.5
            ? [tags[Math.floor(Math.random() * tags.length)]]
            : [...tags],
      })),
    },
  };
};

const Home = ({ posts }: Props) => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const filteredPosts = useMemo(() => {
    console.log(selectedTags);
    return selectedTags.length > 0
      ? posts.filter((post) =>
          post.tags.some((tag) => selectedTags.includes(tag))
        )
      : posts;
  }, [posts, selectedTags]);

  const onSelectTag = (tag: Tag) => {
    let tags = [...selectedTags];
    if (selectedTags.includes(tag)) {
      tags = tags.filter((selectedTag) => selectedTag !== tag);
    } else {
      tags.push(tag);
    }
    setSelectedTags(tags);
  };

  return (
    <>
      <Head>
        <title>Home Page - My Blog</title>
      </Head>
      <div className="text-center py-4 md:py-8">
        <div className="text-3xl md:text-5xl font-bold">
          Our Blogs ({filteredPosts.length})
        </div>
      </div>
      <div className="flex justify-center text-xl md:text-2xl gap-4 mb-8">
        {tags.map((tag, index) => (
          <span
            key={index}
            onClick={() => onSelectTag(tag)}
            className={`cursor-pointer ${
              selectedTags.includes(tag) && "text-[#20FFB6]"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
      <InfiniteScrollList posts={filteredPosts} />
    </>
  );
};

export default Home;
