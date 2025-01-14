import Link from "next/link";
import Image from "next/image";
import { Post } from "@/types/post";

const PostCard = ({ post }: { post: Post }) => (
  <div className=" bg-[#323232] p-5 flex flex-col shadow-md rounded-2xl hover:shadow-lg transition-shadow">
    <div className="relative">
      <Image
        src="/blog.png"
        alt="blog"
        width={500}
        height={300}
        layout="responsive"
        objectFit="cover"
        className="rounded-xl"
      />
    </div>
    <div className="mt-4 flex flex-col flex-1 justify-between">
      <div>
        <h2 className="text-2xl font-semibold text-[#20FFB6]">{post.title}</h2>
        <p className="py-2">{post.body.substring(0, 100)}...</p>
      </div>
      <div>
        <Link
          href={`/post/${post.id}`}
          className="text-[#20FFB6] font-bold mt-2 block px-10 py-3 inline-flex border border-[#20FFB6] rounded-md hover:bg-[#00cc88] hover:text-[white]"
        >
          Read More
        </Link>
      </div>
    </div>
  </div>
);

export default PostCard;
