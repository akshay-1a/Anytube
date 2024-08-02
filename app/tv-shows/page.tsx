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
    `https://api.themoviedb.org/3/trending/tv/day?language=en-US`,
    options
  );

  return response.json();
}

async function getDrama() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTZjYzc5NGUwZDMyY2NkODNkYzliNWJlYmRhNzUwYiIsInN1YiI6IjYxYjQ4ZDIxZWM0NTUyMDA2MDJhNTkzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.paFm5_pwIviXhyyca9_UGztkBLBtZ0dv0ZTIwqrBSGE",
    },
  };
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28`,
    options
  );

  return response.json();
}

export default async function Home() {
  const data = await getData();
  const data1 = await getDrama();

  return <Client movies={data.results} data1={data1.results} />;
}
