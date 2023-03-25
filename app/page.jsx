import Slider from '@/components/slider';
import Image from 'next/image';
import Link from 'next/link';

const dataMovies = async () => {
  const data = await fetch('https://moviesapi.ir/api/v1/movies?page={page}', {
    caches: 'no-store',
  });
  return data.json();
};

const HomePage = async () => {
  const data = await dataMovies();
  return (
    <main className="bg-blue-50 ">
      <>
        <title>تماشاخانه</title>
        <meta name='description' content='تماشاخانه' />
        <link rel="shortcut icon" href='/iconee.png' type='image/x-icon' />
      </>
      <Slider/>
      <div className="flex justify-center flex-wrap gap-8  p-8 ">
        {data.data.map((movie, i) => (
          <div
            key={i}
            className="w-[25rem] h-[30rem] shadow-2xl rounded-lg  p-4 flex-col "
          >
            <Link href={`/movies/${movie.id}`}>
              <div className="flex justify-center ">
                <Image
                  className="rounded-lg"
                  width={260}
                  height={200}
                  alt={movie.title}
                  src={movie.poster}
                />
              </div>
            </Link>
            <div className="text-lg text-center">
              <h3 className="pt-4 text-bold">{movie.title}</h3>
              <div className="flex justify-between">
                <div className="">{movie.year}</div>
                <div className="">{movie.country}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
