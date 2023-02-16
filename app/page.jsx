import Image from 'next/image';

const dataMovies = async () => {
  const result = await fetch('https://moviesapi.ir/api/v1/movies?page={page}', {
    caches: 'no-store',
  });
  return result.json();
};
const HomePage = async () => {
  const data = await dataMovies();
  console.log(data);
  return (
    <main className="py-5">
      <div className="flex justify-center flex-wrap gap-6 ">
        {data.data.map((movie, i) => (
          <div className="w-[25rem] h-[30rem] shadow-xl rounded-lg  p-4 flex-col ">
            <div className="flex justify-center">
              <Image
                className="rounded-lg   "
                width={260}
                height={200}
                alt={movie.title}
                src={movie.poster}
              />
            </div>
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
