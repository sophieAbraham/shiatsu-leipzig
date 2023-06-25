import React, { useState } from 'react';
import { sliderData } from './sliderData.js';
import { MdArrowCircleLeft, MdArrowCircleRight } from 'react-icons/md';


function ImageSlider({ slides }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className='mx-auto container relative h-[300px] sm:h-[400px] w-full md:w-3/4 flex flex-row justify-center items-center mb-4 mt-4'>
            <MdArrowCircleLeft 
            className='absolute top-52 md:top-64 xl:top-72 left-4 md:left-2 text-4xl md:text-5xl text-gray-400 hover:text-lavendel z-10 cursor-pointer select-none' 
            onClick={prevSlide} 
            />

            <MdArrowCircleRight 
            className='absolute top-52 md:top-64 xl:top-72 right-4 md:right-2 text-4xl md:text-5xl text-gray-400 hover:text-lavendel z-10 cursor-pointer select-none' 
            onClick={nextSlide} 
            />

            {sliderData.map((slide, index) => {
                return (
                    <div
                        className={index === current ? 'transition duration-700 ease-in opacity-100' : 'transition duration-700 ease-in opacity-0'}
                        key={index}
                    >
                        {index === current && (
                            <img src={slide.src} alt='Bild aus einer Shiatsu Behandlung' className='mx-auto w-3/4 md:w-full shadow-lg md:scale-100 rounded-md' />
                        )}

                        {index === current && (
                            <figcaption className='mt-2 text-gray-400 text-lg md:text-xl'>{slide.figcaption}</figcaption>

                        )}
                    </div>
                );
            })}
        </section>
    );
};

export default ImageSlider;