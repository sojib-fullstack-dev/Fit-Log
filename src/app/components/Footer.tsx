import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="flex justify-between py-20 bg-black px-4 md:px-8 lg:px-16 mt-8 items-center">
            <div >
                <Link className="flex gap-2 items-center" href="/">
                    <Image src={logo} width={25} height={30} alt="FitLog Logo" />
                    <p className="text-white font-bold">FITLOG</p>
                </Link>
            </div>
            <div>
                <p className="text-gray-400">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </div>
    );
};

export default Footer;