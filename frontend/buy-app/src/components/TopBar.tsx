"use client";

import Link from "next/link";
import { Logo } from "./Logo";

export function TopBar() {
  return (
    <div className="relative z-10 h-18 w-full bg-white">
      <div className="relative z-10 flex justify-between items-center gap-4 max-w-7xl h-full mx-auto px-6 py-4 text-base font-medium">
        <Link
          href='/'
          className="relative flex items-center gap-4 h-full pr-2 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-focused active:translate-y-px"
        >
          <div className="flex-shrink-0">
            <Logo />
          </div>
          <div className="flex-shrink-0 flex items-center gap-2 whitespace-nowrap text-[#2f4225]">
            Nerite
          </div>
        </Link>
        <Link
          href={process.env.NEXT_PUBLIC_APP_URL || 'https://nerite.org'}
          passHref
        >
          <p className="text-sm text-[#2f4225] hover:underline">Back to Main App</p>
        </Link>
        {/* <AccountButton /> */}
      </div>
    </div>
  );
}
