import React from "react";
import UserAvatar from "@/components/UserAvatar";
import { User } from "@prisma/client";
import Link from "next/link";

interface SuggestedUserList {
  users: User[];
}
export function SuggestedUserList({ users }: SuggestedUserList) {
  return (
    <>
      <div className="flex py-3 items-center justify-between">
        <h1 className="font-semibold text-gray-500 text-sm">
          Suggested for you
        </h1>
        <Link href="#" className="text-xs font-semibold">
          See All
        </Link>
      </div>
      {users.map((user) => (
        <div key={user.id} className="flex justify-between items-center">
          <div className="flex">
            <UserAvatar user={user} className="w-11 h-11" />
            <div className="ml-3">
              <h1 className="font-semibold text-sm">{user.username}</h1>
              <p className="text-xs font-light dark:text-gray-500">
                New to Instagram
              </p>
            </div>
          </div>
          <Link
            href=""
            className="text-blue-500 text-xs font-semibold hover:text-blue-950 dark:hover:text-gray-200"
          >
            Follow
          </Link>
        </div>
      ))}
    </>
  );
}
