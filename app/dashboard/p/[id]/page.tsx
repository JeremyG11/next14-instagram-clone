import { Suspense } from "react";

import MorePosts from "@/components/Posts/MorePosts";
import { Separator } from "@/components/ui/separator";
import SinglePost from "@/components/Posts/SinglePost";
import { SinglePostSkeleton } from "@/components/Skeletons";

function PostPage({ params: { id } }: { params: { id: string } }) {
  return (
    <div>
      <Suspense fallback={<SinglePostSkeleton />}>
        <SinglePost id={id} />
      </Suspense>

      <Separator className="my-12 max-w-3xl lg:max-w-4xl mx-auto" />

      <Suspense>
        <MorePosts postId={id} />
      </Suspense>
    </div>
  );
}

export default PostPage;
