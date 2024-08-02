import Client from "./Client";

export const dynamic = "force-dynamic";

export default async function page({ params }: { params: { id: string } }) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTZjYzc5NGUwZDMyY2NkODNkYzliNWJlYmRhNzUwYiIsInN1YiI6IjYxYjQ4ZDIxZWM0NTUyMDA2MDJhNTkzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.paFm5_pwIviXhyyca9_UGztkBLBtZ0dv0ZTIwqrBSGE",
    },
  };
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${params.id}?api_key=9a6cc794e0d32ccd83dc9b5bebda750b&append_to_response=videos,credits,similar,recommendations`,
    options
  );

  const data = await response.json();

  return <Client data={data} />;
}
