import Slider from "../components/SliderMovies";
export default function Client({ data, data1, data2, data3 }: { data: any; data1: any; data2: any; data3: any }) {
  return (
    <>
      <div className="bg-black text-white flex flex-col gap-7 p-2 md:p-5">
        <h2 className="text-2xl font-bold">Top Trending Today</h2>
        <Slider data={data} />

        <h2 className="text-2xl font-bold">Top Action Movies</h2>
        <Slider data={data1} />

        <h2 className="text-2xl font-bold">Top Drama Movies</h2>
        <Slider data={data2} />

        <h2 className="text-2xl font-bold">Top Family Movies</h2>
        <Slider data={data3} />
      </div>
    </>
  );
}
