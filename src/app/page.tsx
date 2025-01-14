'use client'
import { useState } from 'react'
import Login from './ui/components/Login'
import Register from './ui/components/Register'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import forwardButton from '@/app/ui/assets/chevron-right.svg'
import heroImg from '@/app/ui/assets/Rectangle 5.svg'
import concertImg from '@/app/ui/assets/Rectangle 1361.svg'
import sportsImg from '@/app/ui/assets/Rectangle 1361 (1).svg'
import theaterImg from '@/app/ui/assets/Rectangle 1361 (2).svg'
import failyImg from '@/app/ui/assets/Rectangle 1361 (3).svg'
import filterVector from '@/app/ui/assets/Vector.svg'

type HeroProps = {
    festivalName: string
    bgUrl: string
}

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

type BrowseProps = {
    category: string
    categoryImg: string
}

function BrowseItem({ category, categoryImg }: BrowseProps) {
    return (
        <div className="relative flex flex-col items-center">
            <div className="outline-4 outline outline-white flex justify-center font-semibold absolute -bottom-4 w-3/5 bg-[#04092C] rounded-full p-2 text-white">
                {category}
            </div>
            <Image src={categoryImg} alt="" />
        </div>
    )
}

export default function Home() {
    const searchParams = useSearchParams()
    const [currentIndex, setCurrentIndex] = useState(0)

    const authState = searchParams.has('auth')

    type CarouselArr = {
        index: number
        festivalName: string
        bgUrl: string
    }

    const carouselData: CarouselArr[] = [
        {
            index: 0,
            festivalName: 'Music Event',
            bgUrl: '',
        },
        {
            index: 1,
            festivalName: 'Sports Event',
            bgUrl: '',
        },
        {
            index: 2,
            festivalName: 'Family Event',
            bgUrl: '',
        },
    ]

    const carouselArr = carouselData.map((element) => {
        const { index, festivalName, bgUrl } = element
        return (
            <HeroMember key={index} festivalName={festivalName} bgUrl={bgUrl} />
        )
    })

    type BrowseArr = {
        index: number
        category: string
        categoryImg: string
    }

    const browseData: BrowseArr[] = [
        {
            index: 0,
            category: 'Concert',
            categoryImg: concertImg,
        },
        {
            index: 1,
            category: 'Sports',
            categoryImg: sportsImg,
        },
        {
            index: 2,
            category: 'Theater',
            categoryImg: theaterImg,
        },
        {
            index: 3,
            category: 'Family',
            categoryImg: failyImg,
        },
    ]

    const BrowseArr = browseData.map((element) => {
        const { index, category, categoryImg } = element
        return (
            <BrowseItem
                key={index}
                category={category}
                categoryImg={categoryImg}
            />
        )
    })

    return (
        <>
            <div className="w-4/5 my-auto mx-auto flex flex-col gap-8">
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

                <section>
                    <div className="heading flex justify-between items-center border-b-[1.5px] border-[#D9D9D9] p-4">
                        <h3 className="text-2xl font-bold">
                            Browse By Category
                        </h3>
                        <button className="text-white bg-[#2C9CF0] font-medium px-4 py-2 rounded-full">
                            See more
                        </button>
                    </div>
                    <div className="items flex gap-4">{BrowseArr}</div>
                </section>

                <section>
                    <div className="heading flex justify-between items-center border-b-[1.5px] border-[#D9D9D9] p-4">
                        <h3 className="text-2xl font-bold">
                            Top Picks Near You
                        </h3>
                        <button className="flex items-center gap-2 font-medium px-4 py-2 rounded-full">
                            <Image src={filterVector} alt="" /> Filter
                        </button>
                    </div>
                    <div className="items flex gap-4">{/* {BrowseArr} */}</div>
                </section>
            </div>

            {authState && (
                <div className="absolute top-0 left-0 w-full bg-[#00000080] flex justify-center items-center z-[99] py-8 h-full">
                    {searchParams.get('auth') == 'login' ? (
                        <Login />
                    ) : (
                        <Register />
                    )}
                </div>
            )}
        </>
    )
}
