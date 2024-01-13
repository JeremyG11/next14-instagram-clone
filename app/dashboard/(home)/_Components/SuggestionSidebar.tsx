import Link from "next/link";
import * as React from "react";

import { User } from "next-auth";
import prisma from "@/lib/prisma";
import UserAvatar from "@/components/UserAvatar";
import { SuggestedUserList } from "./SuggestedUserList";
export async function SuggestionSidebar({ user }: { user: User }) {
  const users = await prisma.user.findMany();
  return (
    <div className="hidden w-[57%] lg:block lg:space-y-4 md:pl-14 md:px-7 py-3">
      <div className="flex justify-between items-center">
        <div className="flex">
          <UserAvatar user={user} className="w-11 h-11" />
          <div className="ml-2">
            <h1 className="font-semibold text-sm">{user.username}</h1>
            <p className="text-sm text-gray-500 font-light">{user.name}</p>
          </div>
        </div>
        <Link
          href=""
          className="text-blue-500 text-xs font-semibold hover:text-blue-950 dark:hover:text-gray-200"
        >
          Switch
        </Link>
      </div>

      <SuggestedUserList users={users} />
    </div>
  );
}
