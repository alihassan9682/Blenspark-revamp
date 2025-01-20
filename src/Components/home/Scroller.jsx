import design from '../../assets/Cards/DESIGN/2.png';
import develop from '../../assets/Cards/DESIGN/3.png';
import deliver from '../../assets/Cards/DESIGN/4.png';
import phoneImage1 from '../../assets/Cards/mobile1.png';

import { useState, useEffect } from 'react';

const Scroller = () => {
    const images = [phoneImage1, design, develop, deliver];
    const [imgIndex, setImgIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setImgIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval); // Clean up the interval on unmount
    }, []); // Empty dependency array to run only once on mount

    return (
        <div className='absolute inset-0 flex items-center justify-center md:hidden lg:hidden'>
            <img src={images[imgIndex]} alt="scrolling images" className='w-[85%] h-auto' />
        </div>
    );
}

export default Scroller;
