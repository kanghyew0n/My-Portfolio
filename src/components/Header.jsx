"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 z-10 h-[60px] w-full bg-gray-800 px-[5vw] lg:h-[80px]">
      <div className="flex items-center justify-between">
        <Link href="/">
          <div className="flex cursor-pointer">
            <div className="size-[25px] rounded-full bg-gray-200 lg:size-[30px]"></div>
            <div className="size-[25px] rounded-full border border-gray-200 lg:size-[30px]"></div>
          </div>
        </Link>

        <ul className="flex h-[60px] items-center gap-[48px] lg:h-[80px] max-sm:gap-[24px]">
          <Link href="/experience">
            <li className="cursor-pointer text-lg">Experience</li>
          </Link>
          <Link href="/project">
            <li className="cursor-pointer text-lg">Project</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
