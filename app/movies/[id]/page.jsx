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
    console.log(movie)
    if (!movie.id) {
        return Not_found();
    }
  return (
    <main className="container mx-auto flex justify-between p-6  shadow-2xl rounded-lg m-6">
      <section className="text-[2rem] ">
        <h1>{`نام فیلم :${movie.title}`}</h1>
        <div>{`سال ساخت :${movie.year}`}</div>
        <div>{`مدت پخش :${movie.runtime}`}</div>
        <div>{`کارگردان :${movie.director}`}</div>
        <div>{`کشور سازنده :${movie.country}`}</div>
        <div>{` امیتاز کسب شده :${movie.imdb_rating}`}</div>
        <div>{` بازیگران :${movie.actors}`}</div>
        <div className="flex gap-4  mt-[2.8rem]">
          {movie.images.map((movie, i) => (
            <Image className="rounded-lg " width={350} height={400} src={movie} key={i} />
          ))}
        </div>
      </section>
      <div className="w-96 ">
        <Image
          width={400}
          height={260}
          src={movie.poster}
          className="rounded-lg"
        />
      </div>
    </main>
  );
};

export default SingelMovie;
