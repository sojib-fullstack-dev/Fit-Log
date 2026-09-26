import Image from 'next/image';
import footerImg from '@/assets/logo.png'
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='flex lg:flex sm:text-center justify-between container mx-auto py-10 items-center'>
            <Link href={'/'}>
            <div className='flex gap-2'>
                <Image src={footerImg} alt='footer'></Image>
                <p className='text-xl font-bold'>FITLOG</p>
            </div>
            </Link>
            <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
        </div>
    );
};

export default Footer;