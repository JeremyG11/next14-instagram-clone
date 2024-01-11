import { fetchPosts } from "@/lib/data";
import Post from "./Post";

async function Posts() {
  const posts = await fetchPosts();

  return (
    <div className="max-w-lg w-full mx-auto">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Posts;
