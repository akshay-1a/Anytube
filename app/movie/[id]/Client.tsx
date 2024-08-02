"use client";

import React from "react";
import Link from "next/link";
const Slider = React.lazy(() => import("../../../components/SliderMovies"));
import { Dialog } from "@headlessui/react";
import { useState } from "react";

export default function Client({ data }: { data: any }) {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-10">
      {/* Fullscreen for Movie */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50 "
      >
        <div className="fixed inset-0 bg-black/80" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-2">
          <Dialog.Panel className="min-h-[100vh] min-w-[100vw] max-h-[100vh] max-w-[100vw] flex justify-center items-center rounded bg-white">
            <iframe
              // src={`https://vidsrc.me/embed/${data.id}`}
              src={`https://www.2embed.cc/embed/${data.id}`}
              className="min-w-[100vw] min-h-[100vh]"
              allowFullScreen
            />
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-0 right-0 p-2 bg-white rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="black"
                className="w-4 h-4 md:h-6 md:w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
      <div
        className="w-full h-[50vh] lg:[70vh] bg-contain bg-center"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${data.backdrop_path})`,
        }}
      >
        <div className="items-end flex justify-center h-full w-full rounded-xl">
          <div className="px-2 md:px-5 lg:px-12 bg-gradient-to-t from-black from-0% to-30% h-full flex flex-col justify-end to-transparent w-full p-2">
            <div className="flex flex-row gap-5 items-center">
              <h2 className="text-white text-left font-bold text-3xl ">
                {data.title}
              </h2>
              <button
                className="rounded-full p-3 bg-orange-500 h-fit mr-5 ml-auto"
                onClick={() => setIsOpen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  strokeWidth={5}
                  className="w-8 h-8"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </button>
            </div>
            <div className="text-white flex flex-row gap-1 items-center text-lg my-3">
              <h4 className="text-sm">{data.vote_average.toFixed(1)} </h4>
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
              </svg>
              {" | "}
              {data.genres.length > 0 ? (
                <>
                  {data.genres.slice(0, 3).map((genre: any) => {
                    return (
                      <Link
                        key={genre.id}
                        href={`/genre/${genre.id}`}
                        className="py-1 px-2 rounded-full border"
                      >
                        <h6 className="text-white text-sm">{genre.name}</h6>
                      </Link>
                    );
                  })}
                </>
              ) : (
                "No genre available"
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="m-2 md:m-5 lg:m-12 flex flex-col gap-8">
        {/* release date, run-time, Description */}
        <div className="flex h-full flex-col md:flex-row items-center justify-start gap-5">
          <div className="flex items-start justify-stretch rounded-full md:rounded-2xl border-2 border-gray-800 flex-row md:flex-col gap-5 bg-gray-900 text-white p-4 whitespace-nowrap h-full">
            {/* Release Date */}
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z" />
                <path
                  fillRule="evenodd"
                  d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-sm ml-2">{data.release_date}</p>
            </div>

            {/* Run time */}
            <div className="flex items-center flex-row gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
              <p className="text-sm">
                {data.runtime}
                {" mins"}
              </p>
            </div>
          </div>
          {/* Description */}
          <div className="flex mt-8 md:mt-0 flex-col gap-2 mx-2 ">
            <h2 className="text-white text-left font-bold text-xl">The Plot</h2>
            <div className="text-sm">{data.overview}</div>
          </div>
        </div>

        {/* Cast */}
        <div>
          <h2 className="text-white text-left font-bold text-xl mx-2">
            Cast and Crew
          </h2>
          <div className="flex flex-row gap-5 mx-2 mt-4 overflow-x-scroll no-scrollbar">
            {data.credits.cast.length > 0 ? (
              <>
                {data.credits.cast.map((cast: any) => {
                  return (
                    <div key={cast.id}>
                      <div className="flex flex-col items-center gap-2 whitespace-nowrap">
                        <div className="w-24 h-24 border-2 rounded-full overflow-hidden">
                          <img
                            src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                            width={100}
                            height={100}
                            alt={cast.name}
                            className="object-cover"
                          />
                        </div>
                        <h4
                          className="text-xs text-center text-white overflow-hidden"
                          title={cast.name}
                        >
                          {cast.name}
                        </h4>
                        <h4
                          className="text-xs text-center text-gray-500 overflow-hidden"
                          title={cast.character}
                        >
                          {cast.character}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              "No cast available"
            )}
          </div>
        </div>

        {/* Vidoes & Trailers */}
        <div>
          <h2 className="text-white text-left font-bold text-xl mx-2">
            Videos & Trailers
          </h2>
          <div className="flex flex-row gap-4 mx-2 overflow-x-scroll no-scrollbar">
            {data.videos.results.length > 0 ? (
              <>
                {data.videos.results.map((video: any) => {
                  return (
                    <div key={video.id}>
                      <div className="flex flex-col items-center">
                        <div className="w-64 h-48 overflow-hidden">
                          <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${video.key}`}
                            title={video.name}
                            allowFullScreen
                          ></iframe>
                        </div>
                        <div className="text-sm text-white text-left w-full">
                          {video.name}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              "No videos available"
            )}
          </div>
        </div>

        {/* Recommended Movies */}
        <div className="mx-2">
          <h2 className="text-white text-left font-bold text-xl">
            Recommended Movies
          </h2>
          {data.recommendations.results.length > 0 ? (
            <Slider data={data.recommendations.results} />
          ) : (
            <h3 className="text-white m-2 ">No recommended movies available</h3>
          )}
        </div>

        {/* Similar Movies */}
        <div className="mx-2 ">
          <h2 className="text-white text-left font-bold text-xl">
            Similar Movies
          </h2>
          {data.similar.results.length > 0 ? (
            <Slider data={data.similar.results} />
          ) : (
            <h3 className="text-white m-2 ">No similar movies available</h3>
          )}
        </div>
      </div>
    </div>
  );
}
