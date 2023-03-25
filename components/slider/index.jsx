'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
const Slider = () => {
  const [state, setState] = useState([]);
  let [color1, setColor1] = useState('bg-red-500');
  let [color2, setColor2] = useState('bg-red-100');
  let [color3, setColor3] = useState('bg-red-100');
  let [counter, setCounter] = useState(0);
  const handelItemNext = () => {
    if (counter < state.length - 1) {
      setCounter((prevConter) => prevConter + 1);
      if (counter === 0) {
        setColor2('bg-red-500');
        setColor1('bg-red-100');
      } else if (counter === 1) {
        setColor3('bg-red-500');
        setColor2('bg-red-100');
      }
    } else {
      setCounter(0);
      setColor1('bg-red-500');
      setColor2('bg-red-100');
      setColor3('bg-red-100');
    }
  };
  const handelItemPriv = () => {
    if (counter > 0) {
      setCounter((prevConter) => prevConter - 1);
      if (counter === 1) {
        setColor2('bg-red-100');
        setColor1('bg-red-500');
      }
      if (counter === 2) {
        setColor3('bg-red-100');
        setColor2('bg-red-500');
      }
    } else {
      setCounter(2);
      if (counter === 0) {
        setColor1('bg-red-100');
        setColor3('bg-red-500');
      }
    }
  };
  useEffect(() => {
    const fetchImg = async () => {
      const img = await fetch(`https://moviesapi.ir/api/v1/movies/2`);
      const res = await img.json();
      return setState(res.images);
    };
    fetchImg();
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      if (counter < state.length - 1) {
        setCounter((prevConter) => prevConter + 1);
        if (counter === 0) {
          setColor2('bg-red-500');
          setColor1('bg-red-100');
        } else if (counter === 1) {
          setColor3('bg-red-500');
          setColor2('bg-red-100');
        }
      } else {
        setCounter(0);
        setColor1('bg-red-500');
        setColor2('bg-red-100');
        setColor3('bg-red-100');
      }
    }, 4500);
    return () => {
      clearInterval(timer);
    };
  }, [counter]);
  return (
    <div className="container mx-auto flex justify-center items-center h-[35rem] mt-8 ">
      <div className="relative ">
        <Image
          width={900}
          height={300}
          src={state[counter]}
          alt={'imgSlider'}
          className={` rounded-lg transition-all duration-1000 ease-in-out animate-menu `}
        />
        <span
          onClick={handelItemPriv}
          className="absolute bottom-[50%] trensfrom translate-y-[50%]
         text-red-500 text-4xl m-4 cursor-pointer"
        >
          {'<'}
        </span>
        <span
          onClick={handelItemNext}
          className="absolute left-0 bottom-[50%] trensfrom translate-y-[50%]
         text-red-500 text-4xl m-4 cursor-pointer"
        >
          {'>'}
        </span>
        <div className="flex justify-center gap-2 mt-3 ">
          <span className={`w-4 h-4  ${color1} rounded-full`}></span>
          <span className={`w-4 h-4 ${color2} rounded-full`}></span>
          <span className={`w-4 h-4 ${color3} rounded-full`}></span>
        </div>
      </div>
    </div>
  );
};

export default Slider;
