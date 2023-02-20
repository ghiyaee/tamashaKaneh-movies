'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
const Slider = () => {
  const [posters, setPoster] = useState([]);
  useEffect(() => {
    const poster = async () => {
      const posters = await fetch(
        'https://moviesapi.ir/api/v1/movies?page={page}'
      );
      return setPoster(await posters.json());
    };
    poster();
  }, []);

  console.log(posters.data);
  return (
    <div className="container mx-auto flex justify-center items-center h-[35rem] mt-8 bg-blue-300">
    </div>
  );
};

export default Slider;
