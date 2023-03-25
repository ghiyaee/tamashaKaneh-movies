import Not_found from '../../not-found';
import Image from 'next/image';
const dataMovie = async (id) => {
  const singelMovie = await fetch(`https://moviesapi.ir/api/v1/movies/${id}`, {
    cache: 'no-store',
  });
  return singelMovie.json();
};
const SingelMovie = async ({ params }) => {
  const movie = await dataMovie(params.id);
  if (!movie.id) {
    return Not_found();
  }
  return (
    <main className=" p-6  shadow-2xl rounded-lg m-6 bg-black text-white ">
      <section className="sm:text-[2rem]  flex justify-around flex-wrap">
        <div>
          <h1>{`نام فیلم :${movie.title}`}</h1>
          <div>{`سال ساخت :${movie.year}`}</div>
          <div>{`مدت پخش :${movie.runtime}`}</div>
          <div>{`کارگردان :${movie.director}`}</div>
          <div>{`کشور سازنده :${movie.country}`}</div>
          <div>{` امیتاز کسب شده :${movie.imdb_rating}`}</div>
          <div>{` بازیگران :${movie.actors}`}</div>
        </div>
        <div>
          <div className="drop-shadow-[5px_5px_5px_#ffb703] rounded-lg sm:w-[30rem] mt-4 -z-10">
            {movie.id === 1 ? (
              <video className=" rounded-lg" controls>
                <source src="/shash.mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              ''
            )}
            {movie.id === 2 ? (
              <video className=" rounded-lg" controls>
                <source src="/godf1.mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              ''
            )}
            {movie.id === 3 ? (
              <video controls>
                <source src="/godf1.mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              ''
            )}
            {movie.id === 9 ? (
              <video controls>
                <source src="/GoodBad.mp4 " />
                Your browser does not support the video tag.
              </video>
            ) : (
              ''
            )}
          </div>
        </div>
      </section>
      <div className="flex gap-16 justify-center flex-wrap  mt-[5.8rem] shadow ">
        {movie.images.map((movie, i) => (
          <Image
            className="drop-shadow-[5px_5px_5px_#ffb703] rounded-lg transition-all duration-1000 hover:scale-125 cursor-pointer  "
            width={350}
            height={400}
            src={movie}
            key={i}
            alt={movie.title}
          />
        ))}
      </div>
    </main>
  );
};

export default SingelMovie;
