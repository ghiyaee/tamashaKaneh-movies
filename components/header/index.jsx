import Link from 'next/link';
import { GiFilmSpool } from 'react-icons/gi';
const Header = () => {
  return (
    <header className="bg-blue-500 flex justify-center items-center h-[10vh] wx-[100vw] ">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link
            className="text-white text-3xl flex gap-4 items-center transition-all duration-200 hover:text-yellow-200 "
            href={'/'}
          >
            <GiFilmSpool className="text-[3rem]" />
            <div className="transition-all duration-200 hover:text-yellow-200">
              تماشاخانه
            </div>
          </Link>
          <nav>
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
    </header>
  );
};

export default Header;
