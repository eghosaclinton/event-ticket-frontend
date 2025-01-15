'use client'
import { useState } from 'react'
import Image from 'next/image'
import forwardButton from '@/app/ui/assets/chevron-right.svg'
import heroImg from '@/app/ui/assets/carousel-image.svg'
import { type HeroProps } from '@/app/utils/types'
import { carouselData } from '@/app/utils/placeholder'

function HeroMember({ festivalName, bgUrl }: HeroProps) {
    return (
        <div className=" min-w-full text-white font-semibold">
            <div className="absolute text-left bottom-0 min-w-[50%] max-w-[50%] p-4">
                <h2 className="text-[2.5rem] font-bold">
                    Get your tickets for the {festivalName}
                </h2>
                <button className="bg-white text-[#04092C] text-[1rem] px-6 py-3 font-bold rounded-full text-sm">
                    Book now
                </button>
            </div>
            <Image src={heroImg} alt="" />
        </div>
    )
}

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const carouselArr = carouselData.map((element) => {
        const { index, festivalName, bgUrl } = element
        return (
            <HeroMember key={index} festivalName={festivalName} bgUrl={bgUrl} />
        )
    })
    return (
        <section className="items-center text-center overflow-hidden relative">
            <div
                className="carousel flex"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    transition: 'transform 0.5s ease-in-out',
                }}
            >
                {carouselArr}
            </div>
            <button
                className="absolute top-1/2 right-2"
                onClick={() => {
                    // if (index < 0) index = carouselArr.length - 1;
                    setCurrentIndex((prev) => prev + 1)
                    if (currentIndex >= carouselArr.length - 1)
                        setCurrentIndex(0)
                    // carousel.style.transform = `translateX(-${index * 100}%)`;
                }}
            >
                <Image src={forwardButton} alt="" />
            </button>
        </section>
    )
}
