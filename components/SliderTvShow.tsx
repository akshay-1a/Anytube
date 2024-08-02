"use client";

import Link from "next/link";
import { Key } from "react";

export default function Client({ data }: { data: any }) {
  return (
    <div className="bg-black text-white flex overflow-x-scroll flex-row gap-5 no-scrollbar bg-transparent">
      {data.map(
        (movie: {
          id: Key | null | undefined;
          poster_path: any;
          title: string;
          name: string;
          media_type: string | undefined;
          backdrop_path: string;
          vote_average: number;
        }) => (
          <Link
            href={`/tv-show/${movie.id}`}
            key={movie.id}
            className="min-w-[70vw] sm:min-w-[50vw] md:min-w-[40vw] lg:min-w-[30vw] xl:min-w-[25vw] h-[23vh] bg-contain bg-center rounded-xl bg-blue-400 bg-inherit"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
            }}
          >
            <div className="items-end flex justify-center h-full w-full rounded-xl ">
              <div className="bg-gradient-to-bl from-slate-800 to-transparent backdrop-blur-3xl backdrop-opacity-80 w-full rounded-lg p-2">
                <h2 className=" text-white text-left text-lg text-bold">
                  {movie.name.slice(0, 22)}
                </h2>
                <div className="flex flex-row gap-1 items-center">
                  <h4 className="text-sm">{movie.vote_average.toFixed(1)} </h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fill="orange"
                      fillRule="nonzero"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clipRule="nonzero"
                    />
                  </svg>{" "}
                  |{" "}
                  <h4 className="text-white text-sm text-left">
                    TV Show
                  </h4>
                </div>
              </div>
            </div>
          </Link>
        )
      )}
    </div>
  );
}
