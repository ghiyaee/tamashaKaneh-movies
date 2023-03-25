import Slider from '@/components/slider';
import Image from 'next/image';
import Link from 'next/link';
import {BsArrowUp }from 'react-icons/bs';
const dataMovies = async () => {
  const data = await fetch('https://moviesapi.ir/api/v1/movies?page={page}', {
    caches: 'no-store',
  });
  return data.json();
};

const HomePage = async () => {
  const data = await dataMovies();
  return (
    <main className="bg-zinc-800 ">
      <>
        <title>تماشاخانه</title>
        <meta name="description" content="تماشاخانه" />
        <link rel="shortcut icon" href="/iconee.png" type="image/x-icon" />
      </>

      <Slider />
      <div className="flex justify-center flex-wrap gap-10  p-8 ">
        {data.data.map((movie, i) => (
          <div
            key={i}
            className="w-[25rem] h-[30rem] shadow-2xl shadow-amber-100 rounded-lg  p-4 flex-col "
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
            <div className="text-lg text-center ">
              <h3 className="pt-4 text-bold text-red-50">{movie.title}</h3>
              <div className="flex justify-between text-red-50">
                <div className="">{movie.year}</div>
                <div className="">{movie.country}</div>
              </div>
            </div>
          </div>
        ))}
        <a
          href="#"
          class="capitalize fixed bg-yellow-300 w-7 h-7 flex items-center justify-center rounded-full right-3 bottom-3  font-medium shadow-4xl border border-blue-600 animate-ping"
        >
          <BsArrowUp />
        </a>
      </div>
    </main>
  );
};

export default HomePage;
