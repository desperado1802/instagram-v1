import React from "react";

export default function Story({ username, img }) {
  return (
    <div>
      <img
        className="h-14 rounded-full p-[1.5px] border-red-500 border-2 cursor-pointer hover:scale-105 transition-transform duration-200 ease-out"
        src={img}
        alt="photo-story"
      />
      <p className="text-xs w-14 truncate">{username}</p>
    </div>
  );
}
