import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PostCard from "./PostCard";
import ScrollToTop from "./ScrollToTop";
import { Post } from "../types/post";
import Spinner from "./Spinner";

interface InfiniteScrollListProps {
  posts: Post[];
}

const InfiniteScrollList = ({ posts }: InfiniteScrollListProps) => {
  const [displayedPosts, setDisplayedPosts] = useState<Post[]>([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setDisplayedPosts(posts.slice(0, 12));
  }, [posts]);

  const fetchMorePosts = () => {
    const currentLength = displayedPosts.length;
    const nextPosts = posts.slice(currentLength, currentLength + 12);

    if (nextPosts.length === 0) {
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      setDisplayedPosts((prevPosts) => [...prevPosts, ...nextPosts]);
    }, 1000);
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={displayedPosts.length}
        next={fetchMorePosts}
        hasMore={hasMore}
        loader={<Spinner size="md" />}
        endMessage={
          <p className="text-center mt-4">
            <b>All posts are loaded!</b>
          </p>
        }
        scrollThreshold={1}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </InfiniteScroll>
      <ScrollToTop />
    </div>
  );
};

export default InfiniteScrollList;
