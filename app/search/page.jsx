'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Search = () => {
  const [movieId, setMoviesId] = useState(9);
  const [movie, setMovies] = useState();

  const fetchData = async () => {
    if (movieId) {
      const data = await fetch(
        `https://moviesapi.ir/api/v1/movies/${movieId}`,
        {
          cache: 'no-cache',
        }
      );
      const parsedData = await data.json();
      setMovies(parsedData);
      setMoviesId('');
    }
    return;
  };
  useEffect(() => {
  fetchData()
},[])
  const handelSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className=" text-xl rounded-md p-4">
        <form onSubmit={handelSubmit} className="flex justify-center flex-wrap">
          <input
            placeholder="برای دیدن فیلم از1 تا 50 واردکنید"
            className="outline-none w-96 p-4 shadow-2xl"
            onChange={(e) => setMoviesId(e.target.value)}
            value={movieId}
          />
          <button
            className="bg-red-500 text-white px-4 py-1  rounded-md"
            onClick={fetchData}
          >
            جستجو
          </button>
        </form>
      </section>
      <main className="mt-8 bg-black text-white ">
        {movie ? (
          <div>
            <div className="flex flex-col gap-5 p-8  m-5 ">
              <div>
                <div className="flex justify-center flex-wrap gap-7 items-center ">
                  <div className="w-[40rem] flex justify-center">
                    <Image
                      alt="img"
                      width={350}
                      height={200}
                      src={movie.poster}
                      className=" rounded-lg"
                    />
                  </div>

                  <div className=" ">
                    {movie
                      ? movie?.images?.map((img) => (
                          <Image
                            alt="img"
                            width={350}
                            height={250}
                            src={img}
                            className="transition-all duration-1000 hover:scale-125 rounded-lg mb-6 "
                          />
                        ))
                      : ''}
                  </div>

                  <div className="text-2xl ">
                    <h1 className="mb-4">{`نام فلیم :${movie.title}`}</h1>
                    <div className="mb-4">{`سال ساخت :${movie.year}`}</div>
                    <div className="mb-4">{`کشور سازنده :${movie.country}`}</div>
                    <div className="mb-4">{`امتیاز کسب شده :${movie.imdb_rating}`}</div>
                    <div className="mb-4">{`ژانر فلیم :${movie.genres}`}</div>
                    <div className="mb-4">{` بازیگران :${movie.actors}`}</div>
                    <div className="mb-4">{` داستان فیلم :${movie.plot}`}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </main>
    </>
  );
};
export default Search;
