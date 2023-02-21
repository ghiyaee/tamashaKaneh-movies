import Image from "next/image";
const fetchData = async () => {
  const data = await fetch('https://moviesapi.ir/api/v1/movies?page={page}', {
    cache: 'no-cache',
  });
  return data.json();
};
const Search = async () => {
  const movies = await fetchData();
  console.log(movies);
  return (
    <div className=" p-8  ">
      <div className="shadow-2xl text-2xl rounded-md flex justify-center">
        <form>
          <input
            type="text"
            placeholder="اینجااز1تا50واردکنید"
            className="outline-none"
          />
          <button className="bg-red-500 text-white px-4 py-1 rounded-md">
            جستجو
          </button>
        </form>
      </div>
      <main className="mt-8">
        <div>
          {movies.data.map((movie) => (
            <div className="flex flex-col gap-5 p-8 border m-5 rounded-lg">
              <div>
                <div className="flex justify-around items-center">
                  <div className="text-lg">
                    <h1>{`نام فلیم :${movie.title}`}</h1>
                    <div>{`سال ساخت :${movie.year}`}</div>
                    <div>{`کشور سازنده :${movie.country}`}</div>
                    <div>{`امتیاز کسب شده :${movie.imdb_rating}`}</div>
                    <div>{`ژانر فلیم :${movie.genres}`}</div>
                  </div>
                  {movie.images.map((img) => (
                    <Image
                      alt="img"
                      width={250}
                      height={250}
                      src={img}
                      className="transition-all duration-1000 hover:scale-150 rounded-lg "
                    />
                  ))}
                  <Image
                    alt="img"
                    width={200}
                    height={200}
                    src={movie.poster}
                    className=" rounded-lg"
                  />
                </div>
              </div>
              <div></div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
export default Search;




