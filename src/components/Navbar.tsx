"use client";

import Image from "next/image";
import  navbarImg from '@/assets/logo.png'
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {

  const pathname = usePathname();



  return (
    <nav>
      <div className="lg:flex justify-between gap-4 items-center container mx-auto py-6">

        <Link href="/" className="flex gap-3 items-center">
          <Image src={navbarImg} alt="navbar" />
          <p className="text-xl font-bold">FITLOG</p>
        </Link>

        <ul className="lg:flex gap-5">
          <li className={pathname === "/" ? "text-green-500" : ""}>
            <Link href="/">Workouts</Link>
          </li>

          <li className={pathname === "/myplan" ? "text-green-500" : ""}>
            <Link href="/myplan">My Plan</Link>
          </li>
        </ul>

        <div className="lg:flex gap-5">

          <button>
            <Link href={"myplan"}>
            Plan{" "}
            <span className="bg-green-400 text-black rounded-full px-1"></span>
            </Link>
          </button>

          <button>
            <Link  href={'myplan'}>
            Saved {" "}
            <span className="bg-green-400 text-black rounded-full px-1"></span>
            </Link>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;