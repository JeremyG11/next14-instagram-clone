import { users } from "@/lib/dummy";
import React from "react";

export function IGHistoryUsers() {
  return (
    <>
      {users.map((user) => (
        <li
          key={user.id}
          className="flex flex-none flex-col items-center space-y-1"
        >
          <div
            className={
              user.isUpdate
                ? "bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full"
                : "border border-gray-300 bg-white border-1 p-1 rounded-full"
            }
          >
            <a href="#" className="block bg-white p-1 rounded-full relative">
              <img
                src={user.image_url}
                alt={user.name}
                className="w-16 h-16 rounded-full object-cover"
              />
            </a>
          </div>
          <a href="#" className="text-xs text-slate-800">
            {user.username}
          </a>
        </li>
      ))}
    </>
  );
}
