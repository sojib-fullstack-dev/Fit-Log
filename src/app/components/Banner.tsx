import Image from 'next/image';
import BannerLogo from '@/assets/banner.png'

const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto px-5 md:px-10 py-12 md:py-20'>

            <div className='flex flex-col md:flex-row justify-between items-center gap-12'>

                <div className='space-y-6 text-center md:text-left md:w-1/2'>

                    <p className='text-[#b7ea01] font-bold tracking-widest'>
                        WORKOUT LIBRARY
                    </p>

                    <h1 className='font-bold text-white text-4xl md:text-5xl lg:text-6xl '>
                        TRAIN WITH INTENT.LOG <br />EVERY SET. </h1>
                                    
                    <p className='text-gray-400 max-w-xl leading-7'>
                        FitLog is a dark, no-nonsense gym companion: pick a lift,
                        lock it into today's plan, and watch the week's work add up.
                    </p>

                    <button className='py-3 px-5 border border-[#b7ea01] rounded-md text-black bg-[#b7ea01] font-bold cursor-pointer hover:bg-[#c8ff00] '>
                        BROWSE WORKOUTS
                    </button>

                </div>

                <div className='relative flex justify-center items-center md:w-1/2'>

                  <Image
                        src={BannerLogo}
                        width={350}
                        height={350} className='relative w-64 md:w-[350px] hover:scale-105 transition duration-500' alt='Banner' />

                </div>

            </div>

        </div>
    );
};

export default Banner;