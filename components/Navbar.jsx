"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-black text-white sticky inset-0 z-20 w-full border-b md:border-white bg-inherit"
      >
        <div className="mx-auto max-w-screen px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link
                className="text-white-600 text-3xl w-10 h-9 
                flex transition duration-300 ease-in-out"
                href="/"
                prefetch={true}
              >
                <Image
                  src="/anytube.png"
                  height={400}
                  width={400}
                  className="object-contain h-10 w-10 img"
                />
                <span className="grad archivo">ANYTUBE</span>
              </Link>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-lg">
                  <li>
                    <Link
                      className="text-white-600 eff transition hover:text-orange-300"
                      href="/"
                      prefetch={true}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-white-600 transition hover:text-orange-300"
                      href="/movies"
                      prefetch={true}
                    >
                      Movies
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-white-600 transition hover:text-orange-300"
                      href="/tv-shows"
                      prefetch={true}
                    >
                      TV Shows
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center">
                <div className="flex flex-row justify-center gap-4">
                  <Link href="/search" prefetch={true}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="flex w-6 h-6 mt-1 hover:text-orange-300 md:flex md:gap-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <div className="block md:hidden">
                    <DropdownMenu>
                      <DropdownMenuTrigger className="rounded">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="black"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="white"
                          className="w-8 h-8 bg-black"
                        >
                          <path
                            fill="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 9h16.5m-16.5 6.75h16.5"
                          />
                        </svg>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="rounded mt-2 mr-4 block bg-white text-gray-800">
                        <DropdownMenuLabel className="block text-gray-800">
                          <Link
                            className="block px-4 py-2 text-gray-800"
                            href="/"
                            prefetch={true}
                          >
                            Home
                          </Link>
                        </DropdownMenuLabel>
                        <DropdownMenuLabel className="block text-gray-800">
                          <Link
                            className="block px-4 py-2 text-gray-800"
                            href="/movies"
                            prefetch={true}
                          >
                            Movies
                          </Link>
                        </DropdownMenuLabel>
                        <DropdownMenuItem>
                          <Link
                            className="block px-4 py-2 text-gray-800"
                            href="/tv-shows"
                            prefetch={true}
                          >
                            TV Shows
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.header>
    </>
  );
}
