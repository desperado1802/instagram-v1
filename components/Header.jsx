import Image from "next/image";
import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

export default function Header() {
  return (
    <div className="flex items-center justify-between max-w-6xl">
      {/* Left */}
      <div className="h-24 w-24 relative hidden lg:inline-grid cursor-pointer">
        <Image
          alt="logo"
          src="https://assets.website-files.com/5ee732bebd9839b494ff27cd/5f00ff5ae68abe264c4a109b_Screen%20Shot%202020-07-05%20at%2012.09.44%20AM.png"
          layout="fill"
          className="object-contain"
        />
      </div>
      <div className="h-10 w-10 relative  lg:hidden cursor-pointer">
        <Image
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png"
          layout="fill"
          className="object-contain"
        />
      </div>

      {/* Middle */}

      <div className="relative mt-1">
        <div className="absolute top-[50%] left-2 transform translate-y-[-50%]">
          <SearchIcon className="h-5 text-gray-500" />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
        />
      </div>

      {/* Right */}
    </div>
  );
}
