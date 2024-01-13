"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import useMount from "@/hooks/useMount";

interface IGHistoryUserProps {
  username: string;
  image_url: string;
}
export default function IGHistoryUser({
  username,
  image_url,
}: IGHistoryUserProps) {
  const mount = useMount();
  if (!mount) return null;
  return (
    <Link
      href="#"
      className="relative block w-14 h-14 xl:w-[60px] xl:h-[60px] bg-white dark:bg-black p-1 rounded-full"
    >
      <div className="absolute overflow-hidden inset-0 m-0.5 rounded-full bg-gradient-to-tr from-yellow-400 to-fuchsia-600">
        <Image
          src={image_url}
          alt={username}
          width={60}
          height={60}
          className="rounded-full object-cover"
        />
      </div>
    </Link>
  );
}
