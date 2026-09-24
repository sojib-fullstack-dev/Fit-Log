import Image from 'next/image';
import BannerLogo from '@/assets/banner.png'

const Banner = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-around items-center gap-8 lg:gap-12 mt-15 py-5 mb-5 px-5'>
            <div className='space-y-6 text-center lg:text-left'>
                <p className='font-bold text-[#C2F800]'>WORKOUT LIBRARY</p>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>TRAIN WITH INTENT. LOG <br />
                    EVERY SET.</h1>
                <p className='text-gray-300 text-sm md:text-base'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br className="hidden md:block" />
                    into today's plan, and watch the week's work add up.</p>
                <button className='py-3 px-5 border border-[#b7ea01] rounded-md text-black bg-[#b7ea01] font-bold cursor-pointer hover:bg-[#c8ff00]'>
                    BROWSE WORKOUTS
                </button>
            </div>
            <div>
                <Image src={BannerLogo} alt='imge'></Image>
            </div>
        </div>


    );
};

export default Banner;