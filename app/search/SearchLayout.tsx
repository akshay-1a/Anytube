"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchLayout() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-row items-center justify-between gap-1 bg-white p-1 rounded-full w-fit md:w-[60vw] lg:w-[40vw]">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className="rounded-3xl p-1 text-black w-full pl-2 ring-0 focus:ring-0 focus:outline-none outline-none border-none focus:border-none"
      />
      <Link href={`/search?${search}`} className="px-3 mr-1 rounded-full bg-white h-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="black"
          className="w-5 h-5 md:w-6 md:h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </Link>
    </div>
  );
}
