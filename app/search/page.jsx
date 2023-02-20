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
                      width={250}
                      height={250}
                      src={img}
                      className="transition-all duration-1000 hover:scale-150 rounded-lg "
                    />
                  ))}
                  <Image
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

// const fetchData = async () => {
//   const data = await fetch(`https://moviesapi.ir/api/v1/movies/1`, {
//     cache: 'no-store',
//   });
//    return  data.json();
// };

// const Search =async () => {
//   //این استیت برای اینپوت

//  const movie=await fetchData()
//   //این هم یک یوزافیکت برای تغییر مقدار جدید
//   // useEffect(() => {
//   //   //این هم ریکوست به سمت سرور

//   //   fetchData(id);
//   // }, []);
//   console.log(movie);
//   //این هندل کردن که صفحه رفرش نشه و خط بعدی هم برای اینکه مقدار قبلی استیت پاک بشه
//   // const inputHandel = (e) => {
//   //   e.preventDefault();
//   // };
//   return (
//     <div className=" p-8  h-[90vh]">
//       <div className="shadow-2xl text-5xl rounded-md flex justify-center">
//         {/* <form onSubmit={inputHandel}>
//           <input
//             type="text"
//             placeholder="اینجااز1تا50واردکنید"
//             className="outline-none"
//             onChange={(e) => setId(e.target.value)}
//             value={id}
//           />
//           <button
//             className="bg-red-500 text-white px-4 py-1 rounded-md"
//             onClick={() => setId(id)}
//           >
//             ارسال
//           </button>
//         </form> */}
//       </div>
//       <div className="flex justify-between container mx-auto">
//         {/* <section className="text-[2rem] mt-10">
//           <h1>{`نام فیلم :${movie.title}`}</h1>
//           <div>{`سال ساخت :${movie.year}`}</div>
//           <div>{`مدت پخش :${movie.runtime}`}</div>
//           <div>{`کارگردان :${movie.director}`}</div>
//           <div>{`کشور سازنده :${movie.country}`}</div>
//           <div>{` امیتاز کسب شده :${movie.imdb_rating}`}</div>
//           <div>{` بازیگران :${movie.actors}`}</div>
//           <div className="flex gap-4  mt-[2.8rem]">
//             {movie.images.map((movie, i) => (
//               <Image
//                 className="rounded-lg transition-all duration-1000 hover:scale-150 cursor-pointer"
//                 width={350}
//                 height={400}
//                 src={movie}
//                 key={i}
//                 alt={movie.title}
//               />
//             ))}
//           </div>
//         </section> */}
//         {/* <div className=" ">
//           <Image
//             width={300}
//             height={100}
//             src={movie.poster}
//             className="rounded-lg mt-6"
//           />
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default Search;

// {
// }
