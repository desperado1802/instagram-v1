import { PlusIcon } from "@heroicons/react/solid";
import React from "react";

export default function Story({ username, img, isUser }) {
  return (
    <div className="relative group cursor-pointer">
      <img
        className="h-14 rounded-full p-[1.5px] border-red-500 border-2 group-hover:scale-105 transition-transform duration-200 ease-out "
        src={img}
        alt="photo-story"
      />
      {isUser && (
        <PlusIcon className="absolute h-6 text-white z-20 top-4 left-4" />
      )}

      <p className="text-xs w-14 truncate">{username}</p>
    </div>
  );
}
