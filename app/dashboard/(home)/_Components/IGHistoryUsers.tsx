import React from "react";
import { users } from "@/lib/dummy";

export function IGHistoryUsers() {
  return (
    <>
      {users.map((user) => (
        <li
          key={user.id}
          className="flex flex-none flex-col items-center space-y-0"
        >
          <div
            className={
              "bg-gradient-to-tr from-yellow-400 to-fuchsia-600 border-1 p-0.5 border-gray-300 bg-white rounded-full"
            }
          >
            <a href="#" className="block bg-white p-0.5 rounded-full relative">
              <img
                src={user.image_url}
                alt={user.name}
                className="w-14 h-14 rounded-full object-cover"
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
