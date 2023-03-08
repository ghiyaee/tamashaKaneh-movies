'use client';

import Link from 'next/link';
import { GiFilmSpool } from 'react-icons/gi';
import { useState } from 'react';
const Header = () => {
  const [state,setState]=useState('close')
  const handelOpen = () => {
    state ==='close'?setState('open'): setState('close')
    }

  return (
    <header className="bg-blue-500 opacity-95 flex justify-center items-center h-[10vh] wx-[100vw] sticky top-0">
      <div className="container mx-auto ">
        <div className="flex justify-between items-center">
          <Link
            className="text-white p-6 text-3xl flex gap-4 items-center transition-all duration-200 hover:text-yellow-200 "
            href={'/'}
          >
            <GiFilmSpool className="text-[3rem]" />
            <div className="transition-all duration-200 hover:text-yellow-200 ">
              تماشاخانه
            </div>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex justify-center items-center gap-4">
              <li>
                <Link
                  className="w-20 h-8 text-lg font-bold bg-white flex justify-center items-center rounded-md transition-all duration-200 hover:bg-yellow-200"
                  href={'/'}
                >
                  خانه
                </Link>
              </li>
              <li>
                <Link
                  className="w-20 h-8 text-lg font-bold bg-white flex justify-center items-center rounded-md transition-all duration-200 hover:bg-yellow-200 "
                  href={'/search'}
                >
                  جستجو
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <section 
        className={` hamberger ${state} flex flex-col md:hidden p-6 ml-2 relative items-center`}
        // ref={ref}
        onClick={handelOpen}
      >
        <span className="hamber-top rounded transition-all duration-1000"></span>
        <span className="hamber-mid rounded transition-all duration-1000"></span>
        <span className="hamber-bot rounded transition-all duration-1000"></span>
      </section>

    </header>

  );
};
export default Header;
