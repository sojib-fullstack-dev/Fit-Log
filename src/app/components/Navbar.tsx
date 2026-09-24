"use client"; 
 
import Image from "next/image"; 
import Link from "next/link"; 
import logo from "@/assets/logo.png"; 
import { usePathname } from "next/navigation"; 
 
const Navbar = () => { 
  const pathname = usePathname(); 
 
  return ( 
    <div className="mt-5"> 
      <nav className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-0  py-4 px-4 md:px-8 lg:px-16"> 
 
        <Link className="flex gap-2 items-center" href="/"> 
          <Image src={logo} width={30} height={30} alt="FitLog Logo" /> 
          <p className="text-white font-bold">FITLOG</p> 
        </Link> 
         
 
        <div className="flex gap-6"> 
          <Link 
            className={ pathname === "/" ? "text-[#c2f800]" : "text-gray-500 hover:text-[#c2f800]"} 
            href="/" > 
            Workout </Link> 
           
          <Link className={  pathname === "/my-plan" ? "text-[#c2f800]" : "text-gray-500 hover:text-[#c2f800]" } 
            href="/my-plan"> 
            My Plan 
          </Link> 
        </div> 
 
        <div className="flex gap-3"> 
          <button className="font-bold border border-gray-300 px-4 py-1 rounded hover:bg-gray-700 hover:text-white transition cursor-pointer"> 
            Plan 
          </button> 
 
          <button className="font-bold bg-[#c2f800de] px-4 py-1 rounded hover:bg-[#c2f800] transition cursor-pointer"> 
            Saved 
          </button> 
        </div> 
 
      </nav> 
    </div> 
  ); 
}; 
 
export default Navbar;