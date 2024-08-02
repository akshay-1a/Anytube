"use client";

import {
  useState
} from "react";
import GridMovies from "../../components/GridMovies";

export default function Client({ movies }: { movies: any }) {
  // console.log(movies)
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleGenreClick = (genreId: any) => {
    setSelectedGenre(genreId);
  };

  const resetGenreFilter = () => {
    setSelectedGenre(null);
  };

  const filteredMovies = selectedGenre
    ? movies.filter((movie: { genre_ids: string | never[] }) =>
        movie.genre_ids.includes(selectedGenre)
      )
    : movies;

  return (
    <div className="bg-black text-white flex flex-col gap-10 p-5">
      <h1 className="text-4xl font-bold">Movies</h1>
      {/* Filters */}
      <div className="flex flex-col gap-5">
        <h2 className="text-lg font-semibold">Genres</h2>
        <ul className="flex flex-row flex-wrap gap-3">
          <button
            className="border rounded-full px-2 "
            onClick={resetGenreFilter}
          >
            All
          </button>
          <button
            className="border rounded-full px-2 "
            onClick={() => handleGenreClick(28)}
          >
            Action
          </button>
          <button
            className="border rounded-full px-2 "
            onClick={() => handleGenreClick(12)}
          >
            Adventure
          </button>
          <button
            className="border rounded-full px-2 "
            onClick={() => handleGenreClick(16)}
          >
            Animation
          </button>
          <button
            className="border rounded-full px-2 "
            onClick={() => handleGenreClick(35)}
          >
            Comedy
          </button>
          <button
            className="border rounded-full px-2 "
            onClick={() => handleGenreClick(80)}
          >
            Crime
          </button>
          <button
            className="border rounded-full px-2 "
            onClick={() => handleGenreClick(99)}
          >
            Documentary
          </button>
          <button
            className="border rounded-full px-2 "
            onClick={() => handleGenreClick(18)}
          >
            Drama
          </button>
          <button
            className="border rounded-full px-2 "
            onClick={() => handleGenreClick(10751)}
          >
            Family
          </button>
          <button
            className="border rounded-full px-2 "
            onClick={() => handleGenreClick(14)}
          >
            Fantasy
          </button>
          <button
            className="border rounded-full px-2 "
            onClick={() => handleGenreClick(36)}
          >
            History
          </button>
          <button
            className="border rounded-full px-2 "
            onClick={() => handleGenreClick(27)}
          >
            Horror
          </button>
          <button
            className="border rounded-full px-2 "
            onClick={() => handleGenreClick(10402)}
          >
            Music
          </button>
          <button
            className="border rounded-full px-2 "
            onClick={() => handleGenreClick(9648)}
          >
            Mystery
          </button>
          <button
            className="border rounded-full px-2 "
            onClick={() => handleGenreClick(10749)}
          >
            Romance
          </button>
          <button
            className="border rounded-full px-2 "
            onClick={() => handleGenreClick(878)}
          >
            Science Fiction
          </button>
          <button
            className="border rounded-full px-2 "
            onClick={() => handleGenreClick(10770)}
          >
            TV Movie
          </button>
          <button
            className="border rounded-full px-2 "
            onClick={() => handleGenreClick(53)}
          >
            Thriller
          </button>
          <button
            className="border rounded-full px-2 "
            onClick={() => handleGenreClick(10752)}
          >
            War
          </button>
          <button
            className="border rounded-full px-2 "
            onClick={() => handleGenreClick(37)}
          >
            Western
          </button>
        </ul>
      </div>

      <div className="bg-inherit">
        <div className="bg-inherit">
          {selectedGenre !== null && (
            <button
              className="border px-2 rounded-full mb-4 "
              onClick={resetGenreFilter}
            >
              Reset Filter
            </button>
          )}
        </div>
        <GridMovies data={filteredMovies} />
      </div>
    </div>
  );
}
