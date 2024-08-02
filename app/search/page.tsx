import SearchClient from "./SearchClient";
import Client from "./Client";

export const dynamic = "force-dynamic";

export default async function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const search = Object.keys(searchParams);

  if (search.length) {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTZjYzc5NGUwZDMyY2NkODNkYzliNWJlYmRhNzUwYiIsInN1YiI6IjYxYjQ4ZDIxZWM0NTUyMDA2MDJhNTkzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.paFm5_pwIviXhyyca9_UGztkBLBtZ0dv0ZTIwqrBSGE",
      },
    };
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`,
      options
    );
    const data = await response.json();

    const response2 = await fetch(
      `https://api.themoviedb.org/3/search/tv?query=${search}&include_adult=false&language=en-US&page=1`,
      options
    );
    const data2 = await response2.json();

    return <SearchClient data={data.results} data2={data2.results} />;
  }

  return <Client />;
}
