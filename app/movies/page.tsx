import Client from "./Client";

export const dynamic = "auto";
export const revalidate = 3600;
export const fetchCache = "default-cache";
export const preferredRegion = "bom1";

async function getData() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTZjYzc5NGUwZDMyY2NkODNkYzliNWJlYmRhNzUwYiIsInN1YiI6IjYxYjQ4ZDIxZWM0NTUyMDA2MDJhNTkzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.paFm5_pwIviXhyyca9_UGztkBLBtZ0dv0ZTIwqrBSGE",
    },
  };
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?language=en-US&append_to_response=images`,
    options
  );

  return response.json();
}

export default async function Home() {
  const data = await getData();

  return <Client movies={data.results} />;
}
