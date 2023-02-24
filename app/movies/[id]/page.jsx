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
    <main className=" flex justify-between p-6  shadow-2xl rounded-lg m-6 bg-black text-white">
      <section className="text-[2rem] ">
        <h1>{`نام فیلم :${movie.title}`}</h1>
        <div>{`سال ساخت :${movie.year}`}</div>
        <div>{`مدت پخش :${movie.runtime}`}</div>
        <div>{`کارگردان :${movie.director}`}</div>
        <div>{`کشور سازنده :${movie.country}`}</div>
        <div>{` امیتاز کسب شده :${movie.imdb_rating}`}</div>
        <div>{` بازیگران :${movie.actors}`}</div>

        <div className="flex gap-8 justify-start mt-[5.8rem]">
          {movie.images.map((movie, i) => (
            <Image
              className="rounded-lg transition-all duration-1000 hover:scale-150 cursor-pointer"
              width={350}
              height={400}
              src={movie}
              key={i}
              alt={movie.title}
            />
          ))}
        </div>
      </section>
      <div className="w-[40rem] rounded-lg ">
        {movie.id === 1 ? (
          <video className=" rounded-lg" controls autoPlay>
            <source src="/shash.mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          ''
        )}
        {movie.id === 2 ? (
          <video className=" rounded-lg" controls autoPlay>
            <source src="/godf1.mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          ''
        )}
        {movie.id === 3 ? (
          <video controls autoPlay>
            <source src="/godf1.mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          ''
        )}
        {movie.id === 9 ? (
          <video controls autoPlay>
            <source src="https://as3.asset.aparat.com/aparat-video/c7d6c18f5af8377db0e780104046aa6317016688-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjVkODAyZTc3YjBkZWZjZDMxMzIzYzg2MGU4MWM0N2FkIiwiZXhwIjoxNjc2OTE1MDg4LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.Kj9yO06qret_QRsXvnnVeFHHcM9bGvtGEWkhr1FEy1Q " />
            Your browser does not support the video tag.
          </video>
        ) : (
          ''
        )}
      </div>
    </main>
  );
};

export default SingelMovie;
