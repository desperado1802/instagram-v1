import Image from "next/image";
import React from "react";
import { SearchIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

export default function Header() {
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-50">
      <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto ">
        {/* Left */}
        <div className="h-24 w-24 relative hidden lg:inline-grid cursor-pointer">
          <Image
            alt="logo"
            src="https://techcrunch.com/wp-content/uploads/2014/06/instagram_topic.png"
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
        <div className="flex space-x-4 items-center">
          <HomeIcon className="h-6 hidden md:inline-flex cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
          <PlusCircleIcon className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
          <img
            src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
            alt="progile-photo"
            className="h-10 w-10 rounded-full object-cover cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
