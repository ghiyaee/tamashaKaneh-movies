'use client'
import Loading from '../loading';
import useSWR from 'swr'
import Not_found from '../not-found';
const Movie = () => {
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data, error } = useSWR("https://moviesapi.ir/api/v1/movies/1", fetcher);
    if (error) return <Not_found/>
    if (!data) return <Loading/>
    console.log(data);
    return (
        <>
        <div>{data.title}</div>
        <div>{data.year}</div>
        </>
    );
}

export default Movie;