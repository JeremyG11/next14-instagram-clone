import { PostWithExtras } from "@/lib/types";
import { cn } from "@/lib/utils";
import ActionIcon from "@/components/ActionIcon";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import LikeButton from "../Like";
import ShareButton from "../ShareButton";
import BookmarkButton from "../BookmarkButton";
import { CommentIcon } from "../Icons";

type Props = {
  post: PostWithExtras;
  userId?: string;
  className?: string;
};

function PostActions({ post, userId, className }: Props) {
  return (
    <div className={cn("relative flex items-start w-full gap-x-2", className)}>
      <LikeButton post={post} userId={userId} />
      <Link href={`/dashboard/p/${post.id}`}>
        <ActionIcon>
          <CommentIcon />
        </ActionIcon>
      </Link>
      <ShareButton postId={post.id} />
      <BookmarkButton post={post} userId={userId} />
    </div>
  );
}

export default PostActions;
