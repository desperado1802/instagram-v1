import Image from "next/image";
import React from "react";
import { SearchIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRecoilState } from "recoil";
import { modalState } from "@/atom/modalAtom";
import { useRouter } from "next/router";

export default function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();

  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-50 py-5 lg:py-0">
      <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto ">
        {/* Left */}
        <div className="h-24 w-24 relative hidden lg:inline-grid cursor-pointer">
          <Image
            onClick={() => router.push("/")}
            alt="logo"
            src="https://techcrunch.com/wp-content/uploads/2014/06/instagram_topic.png"
            layout="fill"
            className="object-contain"
          />
        </div>
        <div className="h-10 w-10 relative  lg:hidden cursor-pointer">
          <Image
            onClick={() => router.push("/")}
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
          <HomeIcon
            onClick={() => router.push("/")}
            className="h-6 hidden md:inline-flex cursor-pointer hover:scale-125 transition-transform duration-200 ease-out"
          />
          {session ? (
            <>
              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out"
              />
              <img
                onClick={signOut}
                src={session.user.image}
                alt="progile-photo"
                className="h-10 w-10 rounded-full object-cover cursor-pointer"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
}
