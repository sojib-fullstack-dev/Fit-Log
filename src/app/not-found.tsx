

import Link from "next/link";

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#0d0f12] text-white text-center px-5">
            <h1 className="text-7xl font-bold text-[#ccff00]">404</h1>
            <h2 className="mt-4 text-2xl font-bold uppercase">Page Not Found</h2>
            <p className="mt-2 text-gray-400 max-w-md">
                The page you're looking for doesn't exist or may have been moved.
            </p>
            <Link href="/">
                <button className="mt-6 bg-[#ccff00] text-black font-semibold px-6 py-3 rounded-full hover:bg-[#b8e600] transition cursor-pointer">
                    Go to Home
                </button>
            </Link>
        </div>
    );
};

export default NotFound;