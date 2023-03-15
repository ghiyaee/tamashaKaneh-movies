import Link from "next/link";
const MenuBar = () => {
    return (
      <div className="min-h-screen w-full bg-black text-white flex justify-center flex-col items-center ">
        <Link href={'/'}>خانه </Link>
        <Link href={'/search'}> جستجو</Link>
      </div>
    );
}

export default MenuBar;