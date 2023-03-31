'use client';
import Link from 'next/link';
import { GiFilmSpool } from 'react-icons/gi';
import { useState } from 'react';
const Header = () => {
  const [state, setState] = useState('close');
  const [state1, setState1] = useState('closer');
  const handelOpen = () => {
    state === 'close' ? setState('open') : setState('close');
    state1 === 'show' ? setState1('closer') : setState1('show');
  };

  return (
    <header className="bg-zinc-800 opacity-95 flex  items-center  h-[20vh] sm:h-[10vh] w-[100vw] sticky top-0 z-50 ">
      <div className="container mx-auto mt-6 sm:mt-0">
        <div className="flex justify-around sm:justify-between items-center">
          <Link
            className="text-white p-6 text-3xl flex gap-4 items-center transition-all duration-200 hover:text-yellow-200 "
            href={'/'}
          >
            <GiFilmSpool className="text-[3rem]" />
            <div className="transition-all duration-200 hover:text-yellow-200 ">
              تماشاخانه
            </div>
          </Link>
          <nav
            className={`${state1}  md:transform translateY(500px) ml-5 transition-all duration-700`}
          >
            <ul className="flexs gap-1">
              <li>
                <Link
                  className=" flexs header-items"
                  href={'/'}
                >
                  خانه
                </Link>
              </li>
              <li>
                <Link
                  className=" flexs header-items "
                  href={'/search'}
                >
                  جستجو
                </Link>
              </li>
            </ul>
          </nav>
        </div>

      <section
        className={` hamberger ${state} flex flex-col md:hidden p-6 mb-4 relative items-center `}
        // ref={ref}
        onClick={handelOpen}
      >
        <span className="hamber-top rounded transition-all duration-1000 "></span>
        <span className="hamber-mid rounded transition-all duration-1000 "></span>
        <span className="hamber-bot rounded transition-all duration-1000 "></span>
      </section>
      </div>

    </header>
  );
};
export default Header;
