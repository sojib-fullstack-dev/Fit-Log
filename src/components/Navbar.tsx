"use client";

import Image from "next/image";
import navbarImg from '@/assets/logo.png'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { WorkoutContext } from "@/context/WorkoutsProvider";

const Navbar = () => {

   const context = useContext(WorkoutContext);

   if (!context) {
  throw new Error("Navbar must be used within a WorkoutProvider");
}
  const { selectedWorkouts, savedWorkouts } = context;
   
  const pathname = usePathname();

  return (
    <nav>
      <div className="flex lg:flex justify-between gap-4 items-center container mx-auto py-6">

        <Link href="/" className="flex gap-3 items-center">
          <Image src={navbarImg} alt="navbar" />
          <p className="text-xl font-bold">FITLOG</p>
        </Link>

        <ul className="flex lg:flex gap-5">
          <li className={pathname === "/" ? "text-[#c2f800]" : ""}>
            <Link href="/">Workouts</Link>
          </li>

          <li className={pathname === "/myplan" ? "text-[#c2f800]" : ""}>
            <Link href="/myplan">My Plan</Link>
          </li>
        </ul>

        <div className="flex lg:flex gap-5">
          <button>
            <Link href={"myplan/"} className="flex items-center gap-2">
              Plan{" "}
              <span className="bg-green-400 text-black rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {selectedWorkouts.length}
              </span>
            </Link>
          </button>

          <button>
            <Link href={"myplan/"} className="flex items-center gap-2">
              Saved{" "}
              <span className="bg-green-400 text-black rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {savedWorkouts.length}
              </span>
            </Link>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;