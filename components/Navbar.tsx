import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const isActive = (path: string) =>
    router.pathname === path
      ? "text-white font-bold"
      : "text-gray-400 hover:text-gray-300";

  return (
    <nav className="bg-[#323232] text-white p-4 fixed w-full left-0 top-0 z-[1000]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-lg flex gap-3">
          <Image src="/logo.svg" alt="logo" width={30} height={30} />
          <span className="text-xl md:text-3xl font-bold text-[#20FFB6]">
            Miracle Tree
          </span>
        </Link>
        <div className="space-x-4">
          <Link href="/" className={isActive("/")}>
            Home
          </Link>
          <Link href="/about" className={isActive("/about")}>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
