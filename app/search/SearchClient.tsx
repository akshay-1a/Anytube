import Slider from '../../components/SliderMovies';
import TvShowSlider from '../../components/SliderTvShow';

export default function SearchClient({data, data2}: {data: any; data2: any}) {
  return (
    <div className='px-5 flex flex-col gap-7 mb-10'>
      <div>
        <h2 className='text-2xl font-bold'>Movies</h2>
        <Slider data={data} />
      </div>

      <div>
        <h2 className='text-2xl font-bold'>Series</h2>
        <TvShowSlider data={data2} />
      </div>
    </div>
  )
}
