import React from "react";
import { users } from "@/lib/dummy";
import IGHistoryUser from "./IGHistoryUser";

export function IGHistoryUsers() {
  return (
    <>
      {users.map((user) => (
        <li
          key={user.id}
          className="flex overflow-hidden flex-none flex-col items-center space-x-3 space-y-0"
        >
          <div
            className={
              "bg-gradient-to-tr from-yellow-500 to-fuchsia-600 p-[2px] border-gray-300 rounded-full"
            }
          >
            <IGHistoryUser
              username={user.username}
              image_url={user.image_url}
            />
          </div>
          <p className="text-xs text-slate-800 mt-1 dark:text-white line-clamp-1 !truncate">
            {user.username}
          </p>
        </li>
      ))}
    </>
  );
}
