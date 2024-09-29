"use client";
import { useState } from 'react';
import { toast } from 'sonner';
import Image from 'next/image';
import forwardButton from '@/app/ui/assets/chevron-right.svg'
import img from '@/app/ui/assets/Rectangle 5.svg'

type Props = {
  festivalName: string, 
  bgUrl: string
}

function HeroMember({festivalName, bgUrl}: Props){
  return (
    <div className=' min-w-full text-white font-semibold'>
        <div className="absolute text-left bottom-0 min-w-[50%] max-w-[50%] p-4">
          <h2 className='text-[2.5rem]'>Get your tickets for the {festivalName}</h2>
          <button className='bg-white text-[#04092C] text-[1rem] px-6 py-3 font-bold rounded-3xl'>Book now</button>
        </div>
        <Image src={img} alt='' />
            
    </div>
  );
}

export default function Home() {

  const [currentIndex, setCurrentIndex] = useState(0);

  type myArr ={
    index: number,
    festivalName: string,
    bgUrl: string
  }

  const dataArr: myArr[] = [{
    index: 0,
    festivalName: 'Music Event',
    bgUrl: './app/ui/assets/Rectangle 5.svg'
  },
  {
    index: 1,
    festivalName: 'Sports Event',
    bgUrl: './app/ui/assets/Rectangle 5.svg'
  }, 
  {
    index: 2,
    festivalName: 'Family Event',
    bgUrl: './app/ui/assets/Rectangle 5.svg'
  }]

  const carouselArr = dataArr.map(element=>{
    const {index, festivalName, bgUrl} = element
    return <HeroMember key={index} festivalName={festivalName} bgUrl={bgUrl}/>
  })

  return (
    <div className="w-4/5 my-auto mx-auto flex flex-col ">
          <section className='items-center text-center overflow-hidden relative'>
            <div className="carousel flex" style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: 'transform 0.5s ease-in-out',
            }}>
              {carouselArr}
            </div>
            <button 
                className='absolute top-1/2 right-2'
                onClick={()=>{
                  // if (index < 0) index = carouselArr.length - 1;
                  setCurrentIndex(prev=> prev+1);
                  if (currentIndex >= carouselArr.length-1) setCurrentIndex(0);
                  // carousel.style.transform = `translateX(-${index * 100}%)`;

            }}>
              <Image src={forwardButton} alt="" />
            </button>
          </section>
          <section></section>
          <section></section>
    </div>
  );
}
