'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BsArrowUp } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Search = () => {
  const [movieId, setMoviesId] = useState(9);
  const [movie, setMovies] = useState();
  const notify = () => toast('!!! باید عدد وارد کنید');
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
    else {
      return
    }
  };
  useEffect(() => {
    fetchData();
  },[movieId]);
  const handelSubmit = (e) => {
    e.preventDefault();
    //  notify();
  };

  return (
    <>
      <section className=" text-xl rounded-md p-4">
        <form onSubmit={handelSubmit} className="flex justify-center flex-wrap ">
          <input
            placeholder="برای دیدن فیلم از عدد 1 تا 250 واردکنید"
            className="outline-none w-96 p-4 shadow-2xl focus"
            onChange={(e) => setMoviesId(e.target.value)}
          />
        </form>
      </section>
      <main className="mt-8 bg-black text-white ">
        {movie ? (
          <div>
            <div className="flex flex-col gap-5 p-8  m-5 ">
              <div>
                <div className="flexs flex-wrap gap-7 ">
                  <div className="w-[40rem] flex justify-center">
                    <Image
                      alt="img"
                      width={350}
                      height={200}
                      src={movie.poster}
                      className=" rounded-lg"
                    />
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
                  <div className="flex gap-8 flex-col flex-wrap sm:flex-row justify-center">
                    {movie?.images?.map((img) => (
                      <Image
                        alt="img"
                        width={350}
                        height={250}
                        src={img}
                        className="img"
                        key={img}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
        <a href="#" className="up-to-top text-black">
          <BsArrowUp />
        </a>
        <div>
          <ToastContainer position="top-center" className="text-3xl " />
        </div>
      </main>
    </>
  );
};
export default Search;
