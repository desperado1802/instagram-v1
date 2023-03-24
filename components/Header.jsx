import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div>
      {/* Left */}

      <div className="flex items-center justify-between max-w-6xl">
        <div className="h-24 w-24 relative hidden lg:inline-grid cursor-pointer">
          <Image
            src="https://assets.website-files.com/5ee732bebd9839b494ff27cd/5f00ff5ae68abe264c4a109b_Screen%20Shot%202020-07-05%20at%2012.09.44%20AM.png"
            layout="fill"
            className="object-contain"
          />
        </div>
        <div className="h-10 w-10 relative  lg:hidden cursor-pointer">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png"
            layout="fill"
            className="object-contain"
          />
        </div>
        <h1>Mamma mia</h1>
      </div>

      {/* Middle */}

      {/* Right */}
    </div>
  );
}
